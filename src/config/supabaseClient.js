import { createClient } from "@supabase/supabase-js";

const baseUrl = process.env.REACT_APP_SUPABASE_URL
const baseKey = process.env.REACT_APP_API_KEY

export const supabase = createClient(baseUrl, baseKey);