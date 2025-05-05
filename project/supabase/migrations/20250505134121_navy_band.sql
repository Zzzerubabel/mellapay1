/*
  # Create contact submissions table and functions

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `browser_info` (jsonb)
      - `created_at` (timestamp)
      - `status` (text)
  
  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for authenticated service role to insert data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  browser_info jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users only"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);