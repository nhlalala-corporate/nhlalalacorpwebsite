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

    // Send email using utility function
    const emailResult = await sendEmail(
      process.env.CONTACT_EMAIL || 'info@nhlalala.co.za',
      `Contact Form: ${formData.subject}`,
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      process.env.MAIL_USER
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