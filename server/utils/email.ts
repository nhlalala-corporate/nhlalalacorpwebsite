// server/utils/email.ts
import { createTransport, type Transporter } from 'nodemailer'

let transporter: Transporter | null = null

export const initEmailTransporter = () => {
  if (transporter) {
    return transporter
  }

  // Check if required environment variables are set
  const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST || 'smtp.gmail.com'
  const smtpPort = parseInt(process.env.SMTP_PORT || process.env.MAIL_PORT || '587')
  const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER
  const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD

  if (!smtpUser || !smtpPass) {
    console.warn('SMTP credentials not configured. Email sending will be simulated.')
    // Create a transport that simulates sending email without actually sending
    return {
      sendMail: async (options: any) => {
        console.log('Email simulation (not sent due to missing credentials):', {
          from: options.from,
          to: options.to,
          subject: options.subject,
          html: options.html
        })
        return {
          messageId: 'simulated-message-id',
          response: '250 Email simulated successfully'
        }
      }
    } as any
  }

  transporter = createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  return transporter
}

export const sendEmail = async (to: string, subject: string, html: string, from?: string) => {
  const emailTransporter = initEmailTransporter()

  const mailOptions = {
    from: from || process.env.SMTP_USER,
    to,
    subject,
    html,
  }

  try {
    const info = await emailTransporter.sendMail(mailOptions)
    return {
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error(`Failed to send email: ${(error as Error).message}`)
  }
}