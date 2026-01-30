// app/actions/sendAirportBooking.js
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

export async function sendAirportBooking(formData) {
  try {
    // ────────────────────────────────────────────────
    // Extract all fields safely
    // ────────────────────────────────────────────────
    const departureAirport =
      formData.get("departureAirport")?.toString()?.trim() || "—";
    const arrivalAirport =
      formData.get("arrivalAirport")?.toString()?.trim() || "—";
    const pickupDateTime =
      formData.get("pickupDateTime")?.toString()?.trim() || "";
    const carType = formData.get("carType")?.toString()?.trim() || "—";
    const tripType =
      formData.get("tripType")?.toString()?.trim() || "Airport-Transfer";
    const returnDateTime =
      formData.get("returnDateTime")?.toString()?.trim() || "";

    const name = formData.get("name")?.toString()?.trim() || "—";
    const email = formData.get("email")?.toString()?.trim() || "—";
    const phone = formData.get("phone")?.toString()?.trim() || "—";

    // ────────────────────────────────────────────────
    // Safe date formatting function
    // ────────────────────────────────────────────────
    const formatDate = (dateStr) => {
      if (!dateStr) return "—";

      const dt = new Date(dateStr);
      if (isNaN(dt.getTime())) {
        console.warn(`Invalid date received: "${dateStr}"`);
        return "Invalid date format";
      }

      return dt.toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    };

    const pickupFormatted = formatDate(pickupDateTime);
    const returnFormatted = formatDate(returnDateTime);

    const isRoundTrip = tripType.toLowerCase().includes("round");

    // Optional: log raw input for debugging (remove in production if you want)
    console.log("Received booking data:", {
      departureAirport,
      arrivalAirport,
      pickupDateTimeRaw: pickupDateTime || "(empty)",
      pickupFormatted,
      returnDateTimeRaw: returnDateTime || "(empty)",
      carType,
      name,
      email,
      phone,
    });

    // ────────────────────────────────────────────────
    // Email content
    // ────────────────────────────────────────────────
    const mailOptions = {
      from: `"Khera Airport Transfer" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email !== "—" ? email : undefined,
      subject: `New Airport Transfer Booking • ${departureAirport} → ${arrivalAirport} • ${carType}`,
      text: `
New Airport Transfer Request

Customer:
Name:  ${name}
Email: ${email}
Phone: ${phone}

Trip:
Departure Airport: ${departureAirport}
Arrival Airport:   ${arrivalAirport}
Pickup:            ${pickupFormatted}
${isRoundTrip ? `Return:            ${returnFormatted}` : ""}
Car Type:          ${carType}
Trip Type:         ${tripType}

Reply directly to contact the customer.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Airport Transfer Booking</title>
</head>
<body style="margin:0; font-family:Arial,sans-serif; background:#f8fafc; color:#1f2937;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:30px 15px;">
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background:#ffffff; border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,0.08); overflow:hidden;">
          
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5e9,#0284c7); padding:45px 30px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:30px;">Airport Transfer Booking</h1>
              <p style="margin:12px 0 0; font-size:17px; opacity:0.95;">${carType} • ${tripType}</p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px 35px 20px;">
              <h2 style="margin:0 0 20px; font-size:24px; color:#0c4a6e;">Customer Information</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="12" style="font-size:15px; background:#f1f5f9; border-radius:10px; line-height:1.6;">
                <tr><td width="140"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}" style="color:#0ea5e9;">${email}</a></td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 35px 40px;">
              <h2 style="margin:30px 0 20px; font-size:24px; color:#0c4a6e;">Trip Details</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="12" style="font-size:15px; background:#f1f5f9; border-radius:10px; line-height:1.6;">
                <tr><td width="140"><strong>Departure:</strong></td><td>${departureAirport}</td></tr>
                <tr><td><strong>Arrival:</strong></td><td>${arrivalAirport}</td></tr>
                <tr><td><strong>Pickup:</strong></td><td>${pickupFormatted}</td></tr>
                ${isRoundTrip ? `<tr><td><strong>Return:</strong></td><td>${returnFormatted}</td></tr>` : ""}
                <tr><td><strong>Car Type:</strong></td><td style="text-transform:capitalize;">${carType}</td></tr>
                <tr><td><strong>Trip Type:</strong></td><td>${tripType}</td></tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:20px 35px 50px;">
              <a href="mailto:${email}?subject=Re%3A%20Your%20Airport%20Transfer%20Booking%20(${departureAirport}%20→%20${arrivalAirport})"
                 style="display:inline-block; padding:16px 48px; background:#0ea5e9; color:white; text-decoration:none; font-weight:600; border-radius:50px; font-size:16px; box-shadow:0 6px 16px rgba(14,165,233,0.3);">
                Reply to Customer →
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#0f172a; color:#e2e8f0; text-align:center; padding:35px; font-size:14px;">
              <p style="margin:0 0 10px;">
                <strong>Khera Tours & Travels</strong><br>
                <a href="https://khera-tour-travel.vercel.app" style="color:#38bdf8; text-decoration:none;">khera-tour-travel.vercel.app</a>
              </p>
              <p style="margin:10px 0 0; opacity:0.8;">
                Booking request • ${new Date().toLocaleDateString("en-IN")}
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
    console.log("Airport booking email sent:", info.messageId);

    return {
      success: true,
      message: "Airport transfer booking submitted successfully!",
    };
  } catch (err) {
    console.error("Airport booking failed:", err);
    return {
      success: false,
      message:
        "Failed to send booking request. Please try again or contact us directly.",
    };
  }
}
