// app/actions/sendBooking.js
"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendBooking(formData) {
  try {
    // Trip details (from step 1)
    const from = formData.get("from")?.toString() || "—";
    const to = formData.get("to")?.toString() || "—";
    const pickupdate = formData.get("pickupdate")?.toString() || "—";
    const carType = formData.get("carType")?.toString() || "—";
    const tripType = formData.get("tripType")?.toString() || "One-Way";

    // Personal details (from this component)
    const name = formData.get("name")?.toString() || "—";
    const email = formData.get("email")?.toString() || "—";
    const phone = formData.get("phone")?.toString() || "—";

    const pickupDateObj = new Date(pickupdate);
    const formattedDate = pickupDateObj.toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const mailOptions = {
      from: `"Khera Tours Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Taxi Booking • ${from} → ${to} • ${carType}`,
      text: `
New Booking Request (One-Way)

Customer:
Name:  ${name}
Email: ${email}
Phone: ${phone}

Trip:
From:        ${from}
To:          ${to}
Pickup:      ${formattedDate}
Car Type:    ${carType}
Trip Type:   ${tripType}

Reply to this email to respond quickly.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Taxi Booking</title>
</head>
<body style="margin:0; font-family:Arial,sans-serif; background:#f5f7fa; color:#333;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:30px 15px;">
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background:#fff; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.1); overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1d4ed8,#3b82f6); padding:40px 30px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:28px;">New Taxi Booking Request</h1>
              <p style="margin:10px 0 0; font-size:16px; opacity:0.95;">One-Way • ${carType}</p>
            </td>
          </tr>

          <!-- Customer Info -->
          <tr>
            <td style="padding:35px 30px 20px;">
              <h2 style="margin:0 0 18px; font-size:22px; color:#1e40af;">Customer Details</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="10" style="font-size:15px; line-height:1.6; background:#f8fafc; border-radius:8px;">
                <tr><td width="120"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              </table>
            </td>
          </tr>

          <!-- Trip Info -->
          <tr>
            <td style="padding:0 30px 35px;">
              <h2 style="margin:25px 0 18px; font-size:22px; color:#1e40af;">Trip Information</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="10" style="font-size:15px; line-height:1.6; background:#f8fafc; border-radius:8px;">
                <tr><td width="120"><strong>From:</strong></td><td>${from}</td></tr>
                <tr><td><strong>To:</strong></td><td>${to}</td></tr>
                <tr><td><strong>Pickup:</strong></td><td>${formattedDate}</td></tr>
                <tr><td><strong>Car Type:</strong></td><td style="text-transform:capitalize;">${carType}</td></tr>
                <tr><td><strong>Trip Type:</strong></td><td>${tripType}</td></tr>
              </table>
            </td>
          </tr>

          <!-- Action -->
          <tr>
            <td align="center" style="padding:20px 30px 40px;">
              <a href="mailto:${email}?subject=Re%3A%20Your%20Khera%20Tours%20Booking%20Request" 
                 style="display:inline-block; padding:14px 40px; background:#2563eb; color:white; text-decoration:none; font-weight:600; border-radius:50px; font-size:16px; box-shadow:0 4px 12px rgba(37,99,235,0.3);">
                Reply to Customer →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a; color:#cbd5e1; text-align:center; padding:30px; font-size:14px;">
              <p style="margin:0;">
                <strong>Khera Tours & Travels</strong><br>
                <a href="https://khera-tour-travel.vercel.app" style="color:#60a5fa; text-decoration:none;">khera-tour-travel.vercel.app</a>
              </p>
              <p style="margin:12px 0 0; opacity:0.8;">
                Automated message • Booking request received • ${new Date().toLocaleDateString("en-IN")}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Booking submitted successfully!",
    };
  } catch (err) {
    console.error("Send booking error:", err);
    return {
      success: false,
      message:
        "Failed to submit booking. Please try again or contact us directly.",
    };
  }
}
