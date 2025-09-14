import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const requiredFields = ['name', 'email', 'subject', 'message'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Read SMTP config from env
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || process.env.SMTP_USER;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      console.error('SMTP configuration missing in environment variables');
      return NextResponse.json({ error: 'Server mailer not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const { name, company = '', email, phone = '', subject, message } = body;

    const mailOptions = {
      from: `${name} <${email}>`,
      to: TO_EMAIL,
      subject: `[Website Contact] ${subject}`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <hr />
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.info('Contact email sent:', info);

    return NextResponse.json({ success: true, message: 'Message sent' });

  } catch (error) {
    console.error('Contact POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
