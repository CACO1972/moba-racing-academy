-- Fix security vulnerability in smile_analysis_leads table
-- This table currently has insecure RLS policies that could expose customer data

-- Step 1: Drop existing insecure policies
DROP POLICY IF EXISTS "Users can view their own leads by email" ON smile_analysis_leads;
DROP POLICY IF EXISTS "Anyone can create leads" ON smile_analysis_leads;

-- Step 2: Add user_id column to properly link leads to authenticated users
ALTER TABLE smile_analysis_leads 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Step 3: Create secure RLS policies that require authentication
-- Allow authenticated users to view only their own leads
CREATE POLICY "Users can view own leads" ON smile_analysis_leads
    FOR SELECT 
    USING (auth.uid() = user_id);

-- Allow authenticated users to create leads with their own user_id
CREATE POLICY "Users can create own leads" ON smile_analysis_leads
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Allow authenticated users to update only their own leads
CREATE POLICY "Users can update own leads" ON smile_analysis_leads
    FOR UPDATE 
    USING (auth.uid() = user_id);

-- Allow authenticated users to delete only their own leads
CREATE POLICY "Users can delete own leads" ON smile_analysis_leads
    FOR DELETE 
    USING (auth.uid() = user_id);

-- Step 4: Update existing records to have proper user_id (if any exist)
-- Note: This will set user_id to NULL for existing records, making them inaccessible
-- This is intentional for security - existing data without proper user association should not be accessible