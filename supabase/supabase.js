const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(process.env.DB_URL, process.env.DB_SECRET);

module.exports = supabase;