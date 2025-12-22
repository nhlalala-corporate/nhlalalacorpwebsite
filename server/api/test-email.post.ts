// server/api/test-email.post.ts
import { sendEmail, type EmailOptions } from '../utils/email';

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);
    
    // Define email options with attachment support
    const emailOptions: EmailOptions = {
      to: body.to || 'test@example.com',
      subject: body.subject || 'Test Email from Nuxt App',
      html: body.html || '<h1>This is a test email</h1><p>Sent via the multi-provider SMTP system.</p>',
      text: body.text || 'This is a test email sent via the multi-provider SMTP system.',
      from: body.from || undefined,
      attachments: body.attachments || [],
      spamIdentifier: body.spamIdentifier || event.node.req.socket.remoteAddress || 'unknown'
    };

    // Send the email
    const result = await sendEmail(emailOptions);

    return {
      success: true,
      message: 'Email sent successfully',
      result
    };
  } catch (error) {
    console.error('Error sending test email:', error);
    return {
      success: false,
      message: `Failed to send email: ${(error as Error).message}`
    };
  }
});