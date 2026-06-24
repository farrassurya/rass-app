import { createClient } from '@supabase/supabase-js';

// Langsung ditembak di sini biar ga pusing mikirin .env.local yang ga kebaca
const supabaseUrl = 'https://ecmgvafbdasnylxwwjb.supabase.co';
const supabaseAnonKey = 'sb_publishable_c5VmxN30Z6pMC1_clJjH8A_Yg_DACrB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

