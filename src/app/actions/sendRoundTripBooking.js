// app/actions/sendRoundTripBooking.js
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

export async function sendRoundTripBooking(formData) {
  try {
    // Trip details
    const from = formData.get("from")?.toString() || "—";
    const to = formData.get("to")?.toString() || "—";
    const pickupdate = formData.get("pickupdate")?.toString() || "—";
    const dropdate = formData.get("dropdate")?.toString() || "—";
    const carType = formData.get("carType")?.toString() || "—";
    const tripType = formData.get("tripType")?.toString() || "Round-Trip";

    // Personal details
    const name = formData.get("name")?.toString() || "—";
    const email = formData.get("email")?.toString() || "—";
    const phone = formData.get("phone")?.toString() || "—";

    // Format dates (Indian locale, readable)
    const pickupFormatted =
      pickupdate !== "—"
        ? new Date(pickupdate).toLocaleString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : "—";

    const returnFormatted =
      dropdate !== "—"
        ? new Date(dropdate).toLocaleString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : "—";

    const mailOptions = {
      from: `"Khera Round-Trip Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Round-Trip Booking • ${from} ↔ ${to} • ${carType}`,
      text: `
New Round-Trip Taxi Booking Request

Customer:
Name:  ${name}
Email: ${email}
Phone: ${phone}

Trip:
From:          ${from}
To:            ${to}
Pickup Date:   ${pickupFormatted}
Return Date:   ${returnFormatted}
Car Type:      ${carType}
Trip Type:     ${tripType}

Reply to this email to contact the customer directly.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Round-Trip Booking Request</title>
</head>
<body style="margin:0; font-family:Arial,sans-serif; background:#f8fafc; color:#1f2937;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:30px 15px;">
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,0.08); overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8b5cf6,#7c3aed); padding:45px 30px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:30px;">Round-Trip Booking Request</h1>
              <p style="margin:12px 0 0; font-size:17px; opacity:0.95;">${carType} • Return Trip</p>
            </td>
          </tr>

          <!-- Customer -->
          <tr>
            <td style="padding:40px 35px 20px;">
              <h2 style="margin:0 0 20px; font-size:24px; color:#5b21b6;">Customer Details</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="12" style="font-size:15px; background:#f3e8ff; border-radius:10px; line-height:1.6;">
                <tr><td width="140"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              </table>
            </td>
          </tr>

          <!-- Trip -->
          <tr>
            <td style="padding:0 35px 40px;">
              <h2 style="margin:30px 0 20px; font-size:24px; color:#5b21b6;">Trip Information</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="12" style="font-size:15px; background:#f3e8ff; border-radius:10px; line-height:1.6;">
                <tr><td width="140"><strong>From:</strong></td><td>${from}</td></tr>
                <tr><td><strong>To:</strong></td><td>${to}</td></tr>
                <tr><td><strong>Pickup:</strong></td><td>${pickupFormatted}</td></tr>
                <tr><td><strong>Return:</strong></td><td>${returnFormatted}</td></tr>
                <tr><td><strong>Car Type:</strong></td><td style="text-transform:capitalize;">${carType}</td></tr>
                <tr><td><strong>Trip Type:</strong></td><td>${tripType}</td></tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:20px 35px 50px;">
              <a href="mailto:${email}?subject=Re%3A%20Your%20Round-Trip%20Booking%20(${from}%20↔%20${to})"
                 style="display:inline-block; padding:16px 48px; background:#7c3aed; color:white; text-decoration:none; font-weight:600; border-radius:50px; font-size:16px; box-shadow:0 6px 16px rgba(124,58,237,0.3);">
                Reply to Customer →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1e1b4b; color:#e0e7ff; text-align:center; padding:35px; font-size:14px;">
              <p style="margin:0 0 10px;">
                <strong>Khera Tours & Travels</strong><br>
                <a href="https://khera-tour-travel.vercel.app" style="color:#c4b5fd; text-decoration:none;">khera-tour-travel.vercel.app</a>
              </p>
              <p style="margin:10px 0 0; opacity:0.8;">
                Round-trip request received • ${new Date().toLocaleDateString("en-IN")}
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
      message: "Round-trip booking request sent successfully!",
    };
  } catch (err) {
    console.error("Round-trip booking error:", err);
    return {
      success: false,
      message: "Failed to send booking request. Please try again.",
    };
  }
}
