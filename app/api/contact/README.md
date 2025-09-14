Contact API SMTP configuration

To enable the contact form to send real emails, set these environment variables in your environment or in a `.env.local` file at the project root:

- `SMTP_HOST` — SMTP server hostname (e.g., `smtp.gmail.com`)
- `SMTP_PORT` — SMTP port (e.g., `587` for STARTTLS or `465` for SSL)
- `SMTP_USER` — SMTP username (the account used to send mail)
- `SMTP_PASS` — SMTP password or app-specific password
- `TO_EMAIL` — Optional. Destination email address to receive contact form messages. If omitted, `SMTP_USER` will be used.

Example `.env.local`:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=sender@example.com
SMTP_PASS=supersecret
TO_EMAIL=marketing@pipi.co.uk
```

Note: For providers like Gmail, you may need to generate an App Password and enable mail access.
