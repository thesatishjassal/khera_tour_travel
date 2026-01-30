// app/actions/sendEmail.js
"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for 587 + TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(formData) {
  try {
    const name = formData.get("name")?.toString() || "No name";
    const email = formData.get("email")?.toString() || "No email";
    const subject = formData.get("subject")?.toString() || "No subject";
    const message = formData.get("message")?.toString() || "No message";

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // ← lets you reply directly to sender
      subject: `New message: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
      // Optional: nice HTML version
      html: `
<div style="font-family: sans-serif; max-width: 600px;">
  <h2>New Contact Message</h2>
  <p><strong>From:</strong> ${name} (${email})</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <hr />
  <p style="white-space: pre-wrap;">${message}</p>
</div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent:", info.messageId);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message,
    };
  }
}
