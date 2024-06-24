import {SECRECT_ANON_KEY} from '$env/static/private'
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient('https://wpplaphychsmdbfjmcqf.supabase.co', SECRECT_ANON_KEY)