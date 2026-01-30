"use client";
import React, { useState } from "react";
import PersonalDetails from "./BookTaxi"; // must be the server-action version (no axios)
import { sendAirportBooking } from "@/app/actions/sendAirportBooking"; // adjust path if needed

const AirportTransfer = () => {
  const [formData, setFormData] = useState({
    departureAirport: "",
    arrivalAirport: "",
    pickupDateTime: "",
    returnDateTime: "",
    carType: "",
    tripType: "one-way", // default one-way (more common)
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get tomorrow as minimum date for pickup
  const minDateTime = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear return date error when user starts filling it
    if (name === "returnDateTime" && errors.returnDateTime) {
      setErrors((prev) => ({ ...prev, returnDateTime: false }));
    }
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.departureAirport.trim())
      validationErrors.departureAirport = true;
    if (!formData.arrivalAirport.trim()) validationErrors.arrivalAirport = true;
    if (!formData.pickupDateTime) validationErrors.pickupDateTime = true;
    if (!formData.carType) validationErrors.carType = true;

    // Require return date only for round-trip
    if (formData.tripType === "round-trip" && !formData.returnDateTime) {
      validationErrors.returnDateTime = true;
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    }
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    setStatus(null);

    // Debug what is actually being sent
    console.log("Submitting airport transfer data:", formData);

    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        fd.append(key, value.toString().trim());
      }
    });

    const result = await sendAirportBooking(fd);

    setStatus(result);
    setLoading(false);

    if (result.success) {
      setFormData({
        departureAirport: "",
        arrivalAirport: "",
        pickupDateTime: "",
        returnDateTime: "",
        carType: "",
        tripType: "one-way",
        name: "",
        email: "",
        phone: "",
      });
      setStep(1);
      // You can also set a global success message here if desired
    }
  };

  const isRoundTrip = formData.tripType === "round-trip";

  return (
    <>
      {step === 1 && (
        <section className="airport-transfer-section">
          <form onSubmit={handleTripSubmit} noValidate>
            <div className="row g-3">
              {/* Trip Type Selector */}
              <div className="col-12 mb-3">
                <label className="form-label">Trip Type</label>
                <div className="d-flex gap-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="oneWay"
                      value="one-way"
                      checked={formData.tripType === "one-way"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="oneWay">
                      One Way
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="roundTrip"
                      value="round-trip"
                      checked={formData.tripType === "round-trip"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="roundTrip">
                      Round Trip
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="departureAirport" className="form-label">
                  Departure Airport
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-plane-departure"></i>
                  </span>
                  <input
                    type="text"
                    className={`form-control ${errors.departureAirport ? "is-invalid" : ""}`}
                    id="departureAirport"
                    name="departureAirport"
                    placeholder="e.g., DEL, BOM, MAA..."
                    value={formData.departureAirport}
                    onChange={handleChange}
                    required
                  />
                  {errors.departureAirport && (
                    <div className="invalid-feedback">Required</div>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="arrivalAirport" className="form-label">
                  Arrival Airport
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-plane-arrival"></i>
                  </span>
                  <input
                    type="text"
                    className={`form-control ${errors.arrivalAirport ? "is-invalid" : ""}`}
                    id="arrivalAirport"
                    name="arrivalAirport"
                    placeholder="e.g., DEL, BOM, MAA..."
                    value={formData.arrivalAirport}
                    onChange={handleChange}
                    required
                  />
                  {errors.arrivalAirport && (
                    <div className="invalid-feedback">Required</div>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="pickupDateTime" className="form-label">
                  Pickup Date & Time
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-calendar-alt"></i>
                  </span>
                  <input
                    type="datetime-local"
                    className={`form-control ${errors.pickupDateTime ? "is-invalid" : ""}`}
                    id="pickupDateTime"
                    name="pickupDateTime"
                    min={minDateTime}
                    value={formData.pickupDateTime}
                    onChange={handleChange}
                    required
                  />
                  {errors.pickupDateTime && (
                    <div className="invalid-feedback">Required</div>
                  )}
                </div>
              </div>

              {isRoundTrip && (
                <div className="col-md-3">
                  <label htmlFor="returnDateTime" className="form-label">
                    Return Date & Time
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className={`form-control ${errors.returnDateTime ? "is-invalid" : ""}`}
                      id="returnDateTime"
                      name="returnDateTime"
                      min={formData.pickupDateTime || minDateTime}
                      value={formData.returnDateTime}
                      onChange={handleChange}
                      required={isRoundTrip}
                    />
                    {errors.returnDateTime && (
                      <div className="invalid-feedback">
                        Required for round trip
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="col-md-3">
                <label htmlFor="carType" className="form-label">
                  Car Type
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-car"></i>
                  </span>
                  <select
                    className={`form-select ${errors.carType ? "is-invalid" : ""}`}
                    id="carType"
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
                  {errors.carType && (
                    <div className="invalid-feedback">Required</div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="theme-btn submit-btn">
                Continue <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </section>
      )}

      {step === 2 && (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFinalSubmit}
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

export default AirportTransfer;
