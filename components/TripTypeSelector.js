"use client";
import React, { useState } from "react";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";
import DateTimePicker from "react-datetime-picker";

const TripTypeSelector = () => {
  const [tripType, setTripType] = useState("One-Way"); // Default to One-Way

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <div className="form-card">
      <label className="form-label fw-bold mobile-only">Select Trip Type</label>
      <div className="service-content">
        <div className="mb-4 cab-booking-form__trip-type">
          <label className="form-label fw-bold desktop-only">
            Select Trip Type
          </label>
          <div
            className={`form-check ${tripType === "One-Way" ? "active" : ""}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="tripType"
              id="oneWay"
              value="One-Way"
              checked={tripType === "One-Way"}
              onChange={handleTripTypeChange}
              required
            />
            <label className="form-check-label" htmlFor="oneWay">
              One-Way
            </label>
          </div>
          <div
            className={`form-check ${
              tripType === "Round-Trip" ? "active" : ""
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="tripType"
              id="roundTrip"
              value="Round-Trip"
              checked={tripType === "Round-Trip"}
              onChange={handleTripTypeChange}
            />
            <label className="form-check-label" htmlFor="roundTrip">
              Round-Trip
            </label>
          </div>
          {/* <div
            className={`form-check ${
              tripType === "Airport Transfers" ? "active" : ""
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="tripType"
              id="airport"
              value="Airport Transfers"
              checked={tripType === "Airport Transfers"}
              onChange={handleTripTypeChange}
            />
            <label className="form-check-label" htmlFor="airport">
              Airport
            </label>
          </div> */}
        </div>
        <p className="cta-label desktop-only">
          Online <i className="fas fa-car"></i> Cab Booking
        </p>
      </div>

      {/* Render the corresponding component based on the selected trip type */}
      {tripType === "One-Way" && <OneWay />}
      {tripType === "Round-Trip" && <RoundTrip />}
    </div>
  );
};

export default TripTypeSelector;
