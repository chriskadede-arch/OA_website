import { supabase } from '@/lib/supabase';
import { ApiResponse, PaginatedResponse, BlogPost } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

// GET all blog posts (paginated)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%,content.ilike.%${search}%`);
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
    } as PaginatedResponse<BlogPost>);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    // Check admin auth (implement your own auth logic)
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, slug, excerpt, content, featured_image_url, category, author_name } = body;

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          slug,
          excerpt,
          content,
          featured_image_url,
          category,
          author_name,
          is_published: true,
          published_at: new Date(),
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
