"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setIsSuccess(false); // Reset success state

    try {
      // Send data to API
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, formData);
      // Check if the API response was successful
      if (response.status === 200) {
        setIsSuccess(true); // Set success state
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }); // Clear form fields
      } else {
        console.error('Error in API response:', response);
      }
    } catch (error) {
      console.error('Error sending data to API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="row">
          {/* Name */}
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
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
          </div>

          {/* Email */}
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
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          </div>
        </div>

        {/* Subject */}
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
          {errors.subject && <p className="error-text">{errors.subject}</p>}
        </div>

        {/* Message */}
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
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="theme-btn" disabled={loading}>
          {loading ? "Sending..." : 'Send Message'}
          <i className="far fa-paper-plane"></i>
        </button>

        {/* Success Message */}
        {isSuccess && (
          <div className="col-md-12 mt-3">
            <div className="form-message text-success">Your message has been sent successfully!</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
