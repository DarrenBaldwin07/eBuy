import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvkicyipudcascybkfrj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjc1MzA4MCwiZXhwIjoxOTUyMzI5MDgwfQ.XMYcXBfYM7rqq49bimcaJXvZQixP_Kn0U05QTenLtkw'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)