// app/components/ContactForm.jsx  (or wherever it lives)
// "use client"  ← keep this!

"use client";
import React, { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail"; // ← adjust path

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // { success: true/false, message: "..." }
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Convert to FormData (Server Actions love native FormData)
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("subject", formData.subject);
    fd.append("message", formData.message);

    const result = await sendEmail(fd);

    setStatus(result);
    setLoading(false);

    if (result.success) {
      // Clear form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Your Subject"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="theme-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
          <i className="far fa-paper-plane"></i>
        </button>

        {status && (
          <div className="col-md-12 mt-3">
            <div
              className={`form-message ${
                status.success ? "text-success" : "text-danger"
              }`}
            >
              {status.message}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
