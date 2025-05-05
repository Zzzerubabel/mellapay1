import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import { z } from 'npm:zod@3.22.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  browserInfo: z.object({
    userAgent: z.string(),
    language: z.string(),
    platform: z.string(),
  }).optional(),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    // Insert into database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([validatedData]);

    if (dbError) {
      throw new Error('Failed to save submission');
    }

    // Send email using built-in Supabase SMTP
    const emailTemplate = `
      New Contact Form Submission
      
      From: ${validatedData.name} (${validatedData.email})
      Subject: ${validatedData.subject}
      Message: ${validatedData.message}
      
      Browser Info:
      ${JSON.stringify(validatedData.browserInfo, null, 2)}
      
      Time: ${new Date().toISOString()}
    `;

    const { error: emailError } = await supabase.auth.admin.sendEmail(
      'support@mellapay.com',
      {
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        text: emailTemplate,
      }
    );

    if (emailError) {
      throw new Error('Failed to send email notification');
    }

    // Send auto-reply
    const { error: autoReplyError } = await supabase.auth.admin.sendEmail(
      validatedData.email,
      {
        subject: 'Thank you for contacting Mellapay',
        text: `
          Dear ${validatedData.name},

          Thank you for reaching out to Mellapay. We have received your message and will get back to you within 24 hours.

          Best regards,
          The Mellapay Team
        `,
      }
    );

    if (autoReplyError) {
      console.error('Failed to send auto-reply:', autoReplyError);
    }

    return new Response(
      JSON.stringify({ message: 'Submission successful' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An error occurred' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});