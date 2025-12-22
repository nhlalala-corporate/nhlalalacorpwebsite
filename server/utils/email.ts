// server/utils/email.ts
import { createTransport, type Transporter } from 'nodemailer'

let transporter: Transporter | null = null

export const initEmailTransporter = () => {
  if (transporter) {
    return transporter
  }

  // Check if required environment variables are set
  const mailHost = process.env.MAIL_HOST
  const mailPort = process.env.MAIL_PORT
  const mailUser = process.env.MAIL_USER
  const mailPassword = process.env.MAIL_PASSWORD

  if (!mailUser || !mailPassword) {
    console.warn('Mail credentials not configured. Email sending will be simulated.')
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

  // Use the credentials from the .env file
  transporter = createTransport({
    host: mailHost || 'smtp.gmail.com',
    port: parseInt(mailPort || '465'), // Using 465 for SSL
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailUser,
      pass: mailPassword,
    },
  })

  return transporter
}

export const sendEmail = async (to: string, subject: string, html: string, from?: string) => {
  const emailTransporter = initEmailTransporter()

  const mailOptions = {
    from: from || process.env.MAIL_USER,
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