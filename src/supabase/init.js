import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rhaskfyjaotwsqumytao.supabase.co";
const supabaseKey = process.env.VUE_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
