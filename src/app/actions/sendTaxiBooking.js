// app/actions/sendTaxiBooking.js
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

export async function sendTaxiBooking(formData) {
  try {
    // Extract fields (coming from FormData)
    const from = formData.get("from")?.toString() || "—";
    const to = formData.get("to")?.toString() || "—";
    const pickupdate = formData.get("pickupdate")?.toString() || "—";
    const carType = formData.get("carType")?.toString() || "—";
    const tripType = formData.get("tripType")?.toString() || "One-Way";

    // Personal details (from step 2)
    const name = formData.get("name")?.toString() || "—";
    const email = formData.get("email")?.toString() || "—";
    const phone = formData.get("phone")?.toString() || "—";
    const notes = formData.get("notes")?.toString() || "—";

    const pickupDateObj = new Date(pickupdate);
    const formattedDate = pickupDateObj.toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "short",
    });

    const mailOptions = {
      from: `"Khera Tours Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Taxi Booking Request - ${from} → ${to} (${carType})`,
      text: `
New One-Way Taxi Booking Request

Customer Details:
Name:        ${name}
Email:       ${email}
Phone:       ${phone}

Trip Details:
From:        ${from}
To:          ${to}
Pickup:      ${formattedDate}
Car Type:    ${carType}
Trip Type:   ${tripType}

Additional Notes:
${notes || "None"}

Reply directly to this email to contact the customer.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taxi Booking Request</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f4f4f7; color:#333;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f7">
    <tr>
      <td align="center" style="padding: 30px 10px;">
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding:40px 30px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:28px;">New Taxi Booking Request</h1>
              <p style="margin:8px 0 0; font-size:16px; opacity:0.9;">One-Way • ${carType}</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 30px 20px;">
              <h2 style="margin:0 0 20px; font-size:22px; color:#1e3a8a;">Customer Information</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size:15px; line-height:1.5;">
                <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 30px 30px;">
              <h2 style="margin:30px 0 20px; font-size:22px; color:#1e3a8a;">Trip Details</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size:15px; line-height:1.5; background:#f8fafc; border-radius:8px;">
                <tr><td><strong>From:</strong></td><td>${from}</td></tr>
                <tr><td><strong>To:</strong></td><td>${to}</td></tr>
                <tr><td><strong>Pickup Date & Time:</strong></td><td>${formattedDate}</td></tr>
                <tr><td><strong>Car Type:</strong></td><td>${carType}</td></tr>
                <tr><td><strong>Trip Type:</strong></td><td>${tripType}</td></tr>
              </table>
            </td>
          </tr>

          ${
            notes
              ? `
          <tr>
            <td style="padding:0 30px 40px;">
              <h2 style="margin:30px 0 20px; font-size:22px; color:#1e3a8a;">Additional Notes</h2>
              <div style="background:#f8fafc; padding:20px; border-radius:8px; white-space:pre-wrap;">${notes}</div>
            </td>
          </tr>
          `
              : ""
          }

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:0 30px 40px;">
              <a href="mailto:${email}?subject=Re%3A%20Your%20Taxi%20Booking%20Request" 
                 style="display:inline-block; padding:14px 32px; background:#3b82f6; color:white; text-decoration:none; font-weight:bold; border-radius:8px; font-size:16px;">
                Reply to Customer
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1e293b; color:#cbd5e1; text-align:center; padding:30px; font-size:14px;">
              <p style="margin:0 0 8px;">
                <strong>${process.env.NEXT_PUBLIC_COMPANY_NAME || "Khera Tours & Travels"}</strong><br>
                <a href="${process.env.NEXT_PUBLIC_URL}" style="color:#93c5fd; text-decoration:none;">${process.env.NEXT_PUBLIC_URL?.replace("https://", "")}</a>
              </p>
              <p style="margin:12px 0 0; opacity:0.7;">
                This is an automated message from a new booking request.
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

    const info = await transporter.sendMail(mailOptions);
    console.log("Booking email sent:", info.messageId);

    return { success: true, message: "Booking request sent successfully!" };
  } catch (err) {
    console.error("Booking email error:", err);
    return {
      success: false,
      message: "Failed to send booking request. Please try again.",
      error: err.message,
    };
  }
}
