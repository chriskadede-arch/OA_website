/**
 * ══════════════════════════════════════════════════════════════════
 * DATABASE CONNECTION (Supabase - optional)
 * ══════════════════════════════════════════════════════════════════
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Client-side Supabase client
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

// Server-side Supabase client (with service role key)
export const supabaseAdmin = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, process.env.SUPABASE_SERVICE_KEY || supabaseAnonKey)
  : null as any;

export type Database = any; // Type definitions will be auto-generated
