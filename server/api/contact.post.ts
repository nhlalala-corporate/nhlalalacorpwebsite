// server/api/contact.post.ts
import type { H3Event } from 'h3'
import { sendEmail } from '../utils/email'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  'g-recaptcha-response'?: string
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get form data from request body
    const formData = await readBody(event) as ContactFormData

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }

    // Verify reCAPTCHA if present
    if (formData['g-recaptcha-response']) {
      const recaptchaResponse = formData['g-recaptcha-response'];

      // Skip verification for dummy token used in development
      if (recaptchaResponse === 'dummy-token-for-development') {
        console.warn('Using dummy reCAPTCHA token - skipping verification (development mode)');
        // In a real implementation, you might want to skip reCAPTCHA verification in development
      } else {
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
        if (!recaptchaSecret) {
          throw new Error('reCAPTCHA secret key is not configured')
        }

        const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`
        const recaptchaResponseData = await $fetch(recaptchaVerifyUrl, {
          method: 'POST'
        })

        // Type guard for recaptchaResponseData
        if (typeof recaptchaResponseData !== 'object' || recaptchaResponseData === null || !('success' in recaptchaResponseData)) {
          throw createError({
            statusCode: 500,
            statusMessage: 'Invalid response from reCAPTCHA service'
          })
        }

        if (recaptchaResponseData.success !== true) {
          throw createError({
            statusCode: 400,
            statusMessage: 'reCAPTCHA verification failed'
          })
        }
      }
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: 'reCAPTCHA verification required'
      })
    }

    // Format a beautiful HTML email with text alternative
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 30px; border: 1px solid #e9ecef; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 5px 5px; font-size: 0.9em; color: #6c757d; }
            .field { margin: 15px 0; }
            .field-label { font-weight: bold; color: #495057; }
            .field-value { margin-top: 5px; }
            .highlight { background-color: #e7f3ff; padding: 15px; border-left: 4px solid #0d6efd; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; color: #0d6efd;">New Contact Form Submission</h1>
            </div>

            <div class="content">
              <div class="highlight">
                <p style="margin: 0; font-size: 1.1em;"><strong>Subject:</strong> ${formData.subject}</p>
              </div>

              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${formData.name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${formData.email}</div>
              </div>

              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${formData.phone || 'Not provided'}</div>
              </div>

              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value" style="white-space: pre-line;">${formData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>

            <div class="footer">
              <p>Sent from Nhlalala Corporate Contact Form</p>
              <p style="margin-top: 10px;">This email was automatically generated. Please do not reply directly to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create a plain text version for email clients that don't support HTML
    const textEmail = `
      New Contact Form Submission

      Subject: ${formData.subject}

      Name: ${formData.name}

      Email: ${formData.email}

      Phone: ${formData.phone || 'Not provided'}

      Message:
      ${formData.message}

      --
      Sent from Nhlalala Corporate Contact Form
      This email was automatically generated. Please do not reply directly to this email.
    `;

    // Send email with both HTML and text versions
    const emailResult = await sendEmail(
      process.env.CONTACT_EMAIL || 'info@nhlalala-co.za',
      `Contact Form: ${formData.subject}`,
      htmlEmail,
      process.env.MAIL_USER,
      textEmail
    )

    return {
      success: true,
      messageId: emailResult.messageId,
      message: 'Your message has been sent successfully!'
    }
  } catch (error: any) {
    console.error('Error processing contact form:', error)

    // Return error response
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || error.message || 'Error processing contact form'
    })
  }
})