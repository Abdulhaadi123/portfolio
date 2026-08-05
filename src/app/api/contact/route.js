import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Option 1: Web3Forms (No password required - recommended)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          message,
          subject: `Portfolio Contact: Message from ${name}`,
          from_name: 'Abdul Hadi Portfolio',
        }),
      });

      const data = await response.json();
      if (data.success) {
        return NextResponse.json({ success: true, provider: 'web3forms' });
      }
    }

    // Option 2: Nodemailer (SMTP)
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: process.env.CONTACT_TO || 'abdulhadi86411@gmail.com',
        subject: `New message from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2>New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f5; padding: 15px; border-left: 4px solid #7c3aed; margin: 0;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
          </div>
        `,
      });

      return NextResponse.json({ success: true, provider: 'smtp' });
    }

    // Option 3: Fallback if no provider keys set yet
    // Return friendly error asking owner to add WEB3FORMS_ACCESS_KEY or SMTP variables
    return NextResponse.json(
      {
        error: 'Form service pending setup. Please contact directly via email at abdulhadi86411@gmail.com',
      },
      { status: 503 }
    );
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to send message. Please try emailing directly.' },
      { status: 500 }
    );
  }
}
