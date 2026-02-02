-- Update the CHECK constraint to include 'semipro' level
ALTER TABLE courses DROP CONSTRAINT IF EXISTS courses_level_check;
ALTER TABLE courses ADD CONSTRAINT courses_level_check CHECK (level IN ('amateur', 'semipro', 'professional', 'expert'));