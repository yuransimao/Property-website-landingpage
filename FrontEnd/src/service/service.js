import { createClient } from "@supabase/supabase-js";

const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
 const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const supabase = createClient(SUPABASE_URL,SERVICE_KEY)