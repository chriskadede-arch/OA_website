import { supabase } from '@/lib/supabase';
import { ApiResponse, PaginatedResponse, GalleryItem } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

// GET all gallery items (paginated, filterable)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '24');
    const type = searchParams.get('type'); // 'photo' or 'video'
    const category = searchParams.get('category');

    let query = supabase
      .from('gallery_items')
      .select('*', { count: 'exact' })
      .eq('is_published', true)
      .order('display_order', { ascending: true });

    if (type) {
      query = query.eq('type', type);
    }

    if (category) {
      query = query.eq('category', category);
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
    } as PaginatedResponse<GalleryItem>);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create gallery item (admin only)
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
    const { title, description, image_url, video_url, type, category, display_order } = body;

    if (!title || !type || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (type === 'photo' && !image_url) {
      return NextResponse.json(
        { success: false, error: 'Image URL required for photos' },
        { status: 400 }
      );
    }

    if (type === 'video' && !video_url) {
      return NextResponse.json(
        { success: false, error: 'Video URL required for videos' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('gallery_items')
      .insert([
        {
          title,
          description,
          image_url: type === 'photo' ? image_url : null,
          video_url: type === 'video' ? video_url : null,
          type,
          category,
          display_order: display_order || 0,
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
