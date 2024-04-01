// Set up superbase client
import { DB_URL, DB_KEY } from "@/config";

import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(DB_URL, DB_KEY);
