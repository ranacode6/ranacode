import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: any) {
  try {
    const { name, email, tel, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_USER,
      to: process.env.NEXT_PUBLIC_NODEMAILER_TO_USER,
      subject: 'Someone fillup contact form on ranacode website',
      html: `
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Tel: ${tel}</li>
        <li>Message: ${message}</li>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    );
  }
}
