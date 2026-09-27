import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mrioiqsgoutnssxrniye.supabase.co";
// Paste the FULL copied key below, replacing my truncated example
const supabaseKey = "sb_publishable_4OLro95T3Pb3Gkvp-aUBfQ_Ik9mL59j"; 

export const supabase = createClient(supabaseUrl, supabaseKey);
