"use client"
import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa"; // Import a check icon from react-icons
import 'animate.css/animate.min.css';

const PersonalDetails = ({ formData, setFormData }) => {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // Handle personal details change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalData({ ...personalData, [id]: value });
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!personalData.name) validationErrors.name = true;
    if (!personalData.email) validationErrors.email = true;
    if (!personalData.phone) validationErrors.phone = true;

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setSuccess(''); // Reset success message
      try {
        const fullData = { ...formData, ...personalData };
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}${formData && formData.url}`, fullData
        );
        if (response.status === 200) {
          setSuccess('Booking submitted successfully!');
        }
      } catch (error) {
        console.error("Error submitting form", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">Personal Details</h5>

      <div className="row">
        {/* Name */}
        <div className="col-md-4 mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "border-danger" : ""}`}
            id="name"
            placeholder="Enter your full name"
            value={personalData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-danger">Please enter your name</p>}
        </div>

        {/* Email */}
        <div className="col-md-4 mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "border-danger" : ""}`}
            id="email"
            placeholder="Enter your email address"
            value={personalData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-danger">Please enter a valid email</p>}
        </div>

        {/* Phone */}
        <div className="col-md-4 mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "border-danger" : ""}`}
            id="phone"
            placeholder="Enter your phone number"
            value={personalData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="text-danger">Please enter a valid phone number</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`theme-btn submit-btn ${loading ? "disabled" : ""}`}  // Green button
        disabled={loading}
        style={{
          backgroundColor: success ? "#28a745" : "#00BCD4",
          transition: "background-color 0.3s ease"
        }}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Submitting...
          </>
        ) : (
          "Submit Booking"
        )}
      </button>

      {/* Success Message with Check Icon and Animation */}
      {success && (
        <div className="d-flex align-items-center mt-3 text-success">
          <FaCheckCircle className="me-2 animate__animated animate__fadeIn" /> {/* Check icon with animation */}
          <p className="mb-0">{success}</p>
        </div>
      )}
    </form>
  );
};

export default PersonalDetails;
