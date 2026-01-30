"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "animate.css/animate.min.css";
import { sendBooking } from "@/app/actions/sendBooking"; // ← adjust path

const PersonalDetails = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { success: true/false, message: string }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name) validationErrors.name = true;
    if (!formData.email) validationErrors.email = true;
    if (!formData.phone) validationErrors.phone = true;

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setStatus(null);

    // Prepare native FormData for Server Action
    const fd = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      fd.append(key, val || "");
    });

    const result = await sendBooking(fd);

    setStatus(result);
    setLoading(false);

    // Optional: clear sensitive fields after success
    if (result.success) {
      setFormData((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">Personal Details</h5>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "border-danger" : ""}`}
            id="name"
            placeholder="Enter your full name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-danger small mt-1">Please enter your name</p>
          )}
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "border-danger" : ""}`}
            id="email"
            placeholder="Enter your email address"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-danger small mt-1">Please enter a valid email</p>
          )}
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? "border-danger" : ""}`}
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone || ""}
            onChange={handleChange}
            required
          />
          {errors.phone && (
            <p className="text-danger small mt-1">
              Please enter a valid phone number
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={`theme-btn submit-btn w-100 w-md-auto ${loading ? "opacity-75" : ""}`}
        disabled={loading}
        style={{
          backgroundColor: status?.success
            ? "#28a745"
            : loading
              ? "#6c757d"
              : "#00BCD4",
          transition: "background-color 0.4s ease, transform 0.2s",
          transform: loading ? "scale(0.98)" : "scale(1)",
        }}
      >
        {loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            />
            Submitting...
          </>
        ) : status?.success ? (
          "Booking Submitted!"
        ) : (
          "Confirm & Submit Booking"
        )}
      </button>

      {status && (
        <div
          className={`d-flex align-items-center mt-4 p-3 rounded ${
            status.success
              ? "bg-success-subtle text-success"
              : "bg-danger-subtle text-danger"
          }`}
        >
          {status.success ? (
            <FaCheckCircle
              className="me-3 animate__animated animate__fadeIn"
              size={24}
            />
          ) : null}
          <p className="mb-0 fw-medium">{status.message}</p>
        </div>
      )}
    </form>
  );
};

export default PersonalDetails;
