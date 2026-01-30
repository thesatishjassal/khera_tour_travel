"use client";
import React, { useState } from "react";
import PersonalDetails from "./BookTaxi";
import { sendTaxiBooking } from "@/app/actions/sendTaxiBooking"; // adjust path

const OneWay = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupdate: "",
    carType: "",
    tripType: "One-Way",
    // We'll add personal fields here too in step 2
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.from) validationErrors.from = true;
    if (!formData.to) validationErrors.to = true;
    if (!formData.pickupdate) validationErrors.pickupdate = true;
    if (!formData.carType) validationErrors.carType = true;

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    }
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    setStatus(null);

    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });

    const result = await sendTaxiBooking(fd);

    setStatus(result);
    setLoading(false);

    if (result.success) {
      // Optional: reset form or show thank you page
      setFormData({
        from: "",
        to: "",
        pickupdate: "",
        carType: "",
        tripType: "One-Way",
        name: "",
        email: "",
        phone: "",
        notes: "",
      });
      setStep(1); // or redirect / show success component
    }
  };

  return (
    <>
      {step === 1 && (
        <form onSubmit={handleTripSubmit}>
          <div className="row">
            {/* Where From */}
            <div className="col-md-3 mb-3">
              <label htmlFor="from" className="form-label">
                Where From?
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.from ? "border-danger" : ""}`}
                  id="from"
                  placeholder="Enter pickupdate location"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Where To */}
            <div className="col-md-3 mb-3">
              <label htmlFor="to" className="form-label">
                Where To?
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-location-arrow"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.to ? "border-danger" : ""}`}
                  id="to"
                  placeholder="Enter destination"
                  value={formData.to}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Pickup Date & Time */}
            <div className="col-md-3 mb-3">
              <label htmlFor="pickupdate" className="form-label">
                Pickup Date & Time
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="datetime-local"
                  className={`form-control ${errors.pickupdate ? "border-danger" : ""}`}
                  id="pickupdate"
                  value={formData.pickupdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Car Type */}
            <div className="col-md-3 mb-3">
              <label htmlFor="carType" className="form-label">
                Car Type
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-car"></i>
                </span>
                <select
                  className={`form-select ${errors.carType ? "border-danger" : ""}`}
                  id="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select car type
                  </option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                  <option value="luxury">Luxury</option>
                  <option value="convertible">Convertible</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="theme-btn submit-btn">
            Continue <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      )}

      {step === 2 && (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFinalSubmit} // ← pass this
          loading={loading}
          status={status}
        />
      )}

      {/* Optional global success/error message */}
      {status && step === 2 && (
        <div
          className={`alert mt-4 ${status.success ? "alert-success" : "alert-danger"}`}
        >
          {status.message}
        </div>
      )}
    </>
  );
};

export default OneWay;
