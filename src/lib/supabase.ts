
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hiibyscrrmunkxqzvyer.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpaWJ5c2Nycm11bmt4cXp2eWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MDg0NTYsImV4cCI6MjA2NjM4NDQ1Nn0.jN6v3_kMZLza9B2EH55-rrMITu0ejP3hkt1N7yh8Scc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});
