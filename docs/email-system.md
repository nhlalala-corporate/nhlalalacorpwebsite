# SMTP Email System Configuration

This project implements a flexible SMTP transporter system for Nodemailer that supports multiple email service providers. Configuration is managed via environment variables, with the ability to dynamically select a single default provider.

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure your SMTP settings:

```bash
# Set the default provider (one of: gmail, mailtrap, mailgun, sendgrid, zoho, ses)
DEFAULT_SMTP_PROVIDER=gmail

# Gmail SMTP Configuration
SMTP_GMAIL_HOST=smtp.gmail.com
SMTP_GMAIL_PORT=587
SMTP_GMAIL_SECURE=false
SMTP_GMAIL_USER=your_email@gmail.com
SMTP_GMAIL_PASS=your_app_password
SMTP_GMAIL_FROM_NAME="Your App Name"

# Mailtrap SMTP Configuration (for testing)
SMTP_MAILTRAP_HOST=smtp.mailtrap.io
SMTP_MAILTRAP_PORT=587
SMTP_MAILTRAP_SECURE=false
SMTP_MAILTRAP_USER=your_mailtrap_username
SMTP_MAILTRAP_PASS=your_mailtrap_password
SMTP_MAILTRAP_FROM_NAME="Your App Name"

# Mailgun SMTP Configuration
SMTP_MAILGUN_HOST=smtp.mailgun.org
SMTP_MAILGUN_PORT=587
SMTP_MAILGUN_SECURE=false
SMTP_MAILGUN_USER=your_mailgun_username
SMTP_MAILGUN_PASS=your_mailgun_password
SMTP_MAILGUN_FROM_NAME="Your App Name"

# SendGrid SMTP Configuration
SMTP_SENDGRID_HOST=smtp.sendgrid.net
SMTP_SENDGRID_PORT=587
SMTP_SENDGRID_SECURE=false
SMTP_SENDGRID_USER=apikey
SMTP_SENDGRID_PASS=your_sendgrid_api_key
SMTP_SENDGRID_FROM_NAME="Your App Name"

# Zoho SMTP Configuration
SMTP_ZOHO_HOST=smtp.zoho.com
SMTP_ZOHO_PORT=587
SMTP_ZOHO_SECURE=false
SMTP_ZOHO_USER=your_zoho_email@zoho.com
SMTP_ZOHO_PASS=your_zoho_password
SMTP_ZOHO_FROM_NAME="Your App Name"

# Amazon SES SMTP Configuration
SMTP_SES_HOST=email-smtp.us-east-1.amazonaws.com  # Update region as needed
SMTP_SES_PORT=587
SMTP_SES_SECURE=false
SMTP_SES_USER=your_smtp_username
SMTP_SES_PASS=your_smtp_password
SMTP_SES_FROM_NAME="Your App Name"

# Default email from address (optional - defaults to the SMTP user if not provided)
DEFAULT_EMAIL_FROM="Your App Name <your_email@gmail.com>"

# Anti-spam configuration
ANTISPAM_EMAIL_LIMIT=10                    # Max emails per identifier per duration
ANTISPAM_EMAIL_DURATION=3600               # Duration in seconds (default: 1 hour)
ANTISPAM_MAX_LINKS=5                       # Max links allowed in email
ANTISPAM_MAX_CAPS_RATIO=0.7                # Max ratio of capitalized letters (0.0 to 1.0)
ANTISPAM_MAX_RECIPIENTS=10                 # Max recipients per email
```

## Usage

### Sending an Email

```typescript
import { sendEmail } from '~/server/utils/email';

const result = await sendEmail({
  to: 'recipient@example.com',
  subject: 'Your Subject',
  html: '<h1>Your HTML content</h1>',
  text: 'Plain text version',
  from: 'sender@example.com',
  attachments: [
    {
      filename: 'document.pdf',
      path: '/path/to/document.pdf'
    }
  ],
  spamIdentifier: 'user-id-or-ip-address' // For anti-spam measures
});
```

### Using with Nuxt API Routes

```typescript
// server/api/send-email.post.ts
import { sendEmail } from '~/server/utils/email';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    const result = await sendEmail({
      to: body.to,
      subject: body.subject,
      html: body.html,
      spamIdentifier: event.node.req.socket.remoteAddress
    });

    return { success: true, result };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
```

## Anti-Spam Measures

The system includes several anti-spam measures:

1. **Rate Limiting**: Limits the number of emails that can be sent per identifier (e.g., user ID or IP address)
2. **Content Validation**: Checks for common spam indicators in email content
3. **Recipient Validation**: Validates email addresses and limits the number of recipients
4. **Link Counting**: Limits the number of links in an email
5. **Capitalization Detection**: Flags emails with excessive capitalization

## Providers

Currently supported SMTP providers:
- Gmail
- Mailtrap (for testing)
- Mailgun
- SendGrid
- Zoho
- Amazon SES

## Testing

A test endpoint is available at `/api/test-email` to verify the email functionality. Send a POST request with email details to test the system.

```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "html": "<h1>Test Email</h1><p>This is a test.</p>"
  }'
```

## Security Notes

- Never hardcode credentials in source code
- Store all SMTP credentials in environment variables
- Use app passwords for Gmail instead of account passwords
- Regularly rotate SMTP credentials
- Monitor email sending logs for suspicious activity