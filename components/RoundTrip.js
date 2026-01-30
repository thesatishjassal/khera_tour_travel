"use client";
import React, { useState } from "react";
import PersonalDetails from "./BookTaxi"; // Use the updated Server-Action version from earlier
import { sendRoundTripBooking } from "@/app/actions/sendRoundTripBooking"; // adjust path

const RoundTrip = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupdate: "",
    dropdate: "",
    carType: "",
    tripType: "Round-Trip",
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.from) validationErrors.from = true;
    if (!formData.to) validationErrors.to = true;
    if (!formData.pickupdate) validationErrors.pickupdate = true;
    if (!formData.dropdate) validationErrors.dropdate = true;
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
      fd.append(key, value || "");
    });

    const result = await sendRoundTripBooking(fd);

    setStatus(result);
    setLoading(false);

    if (result.success) {
      // Reset form on success (optional)
      setFormData({
        from: "",
        to: "",
        pickupdate: "",
        dropdate: "",
        carType: "",
        tripType: "Round-Trip",
        name: "",
        email: "",
        phone: "",
      });
      setStep(1); // or keep step 2 and show permanent success message
    }
  };

  return (
    <>
      {step === 1 && (
        <form onSubmit={handleTripSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="from" className="form-label">
                From
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.from ? "border-danger" : ""}`}
                  name="from"
                  placeholder="Where From?"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="to" className="form-label">
                To
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-location-arrow"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.to ? "border-danger" : ""}`}
                  name="to"
                  placeholder="Where to?"
                  value={formData.to}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-2 mb-3">
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
                  name="pickupdate"
                  value={formData.pickupdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-2 mb-3">
              <label htmlFor="dropdate" className="form-label">
                Return Date & Time
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="datetime-local"
                  className={`form-control ${errors.dropdate ? "border-danger" : ""}`}
                  name="dropdate"
                  value={formData.dropdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-2 mb-3">
              <label htmlFor="carType" className="form-label">
                Car Type
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-car"></i>
                </span>
                <select
                  className={`form-select ${errors.carType ? "border-danger" : ""}`}
                  name="carType"
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
          onSubmit={handleFinalSubmit} // ← triggers the email
          loading={loading}
          status={status}
        />
      )}

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

export default RoundTrip;
