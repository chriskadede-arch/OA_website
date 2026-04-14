import { supabase } from '@/lib/supabase';
import { ApiResponse, PaginatedResponse, Resource } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

// GET all resources (paginated, filterable)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = supabase
      .from('resources')
      .select('*', { count: 'exact' })
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const offset = (page - 1) * limit;
    const { data, count, error } = await query.range(offset, offset + limit - 1);

    if (error) throw error;

    const totalPages = Math.ceil((count || 0) / limit);

    return NextResponse.json({
      success: true,
      data,
      total: count,
      page,
      limit,
      totalPages,
    } as PaginatedResponse<Resource>);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create new resource (admin only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, description, file_url, thumbnail_url, category, file_type } = body;

    if (!title || !file_url || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('resources')
      .insert([
        {
          title,
          description,
          file_url,
          thumbnail_url,
          category,
          file_type: file_type || 'pdf',
          is_published: true,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(
      { success: true, data: data[0] },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
