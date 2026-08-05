// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Ensure this route runs on the Node.js runtime (so nodemailer can spin up sockets)
export const runtime = 'nodejs'

export async function POST(request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // use true if you’re on port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'abdulhadi86411@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
You got a new message via the website!

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
