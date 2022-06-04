import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eahrgchfaojpuievgtyk.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaHJnY2hmYW9qcHVpZXZndHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg2NzcwMDYsImV4cCI6MTk2NDI1MzAwNn0.3YSoscfzeI4m59vEMIeVEtmw63xuy_qI-d1kTx3yN5o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
