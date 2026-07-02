import { createClient } from '@supabase/supabase-js';

const fallbackSupabaseUrl = 'https://ecmgvafbdasnynlxwwjb.supabase.co';
const fallbackSupabaseAnonKey = 'sb_publishable_JF7xrXL4xJq72j9Hq7QSBQ_ZgRQEqch';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || fallbackSupabaseUrl;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || fallbackSupabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

