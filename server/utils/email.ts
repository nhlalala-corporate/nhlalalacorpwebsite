// server/utils/email.ts
import { createTransport, type Transporter } from 'nodemailer'

let transporter: Transporter | null = null

export const initEmailTransporter = () => {
  if (transporter) {
    return transporter
  }

  transporter = createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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