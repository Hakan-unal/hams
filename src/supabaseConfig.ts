import { createClient } from '@supabase/supabase-js'

const supabaseKey = import.meta.env.VITE_supabaseKey as any

const SUPABASE_URL = import.meta.env.VITE_supabaseUrl as any



const supabase = createClient(SUPABASE_URL, supabaseKey)

supabase.auth.signInWithPassword({
    email: 'hakanunal.1996@gmail.com',
    password: 'test'
})


export default supabase