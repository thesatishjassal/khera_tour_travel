import React, { useState } from 'react';
import PersonalDetails from './BookTaxi'; // Assuming you have a PersonalDetails component

const AirportTransfer = () => {
    const [formData, setFormData] = useState({
        departureAirport: '',
        arrivalAirport: '',
        pickupDateTime: '',
        carType: '',
        tripType: 'Airport-Transfer', // Default to 'Airport-Transfer'
        returnDateTime: '',
        url: '/api/taxi/airporttaxi/'
    });
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1); // 1 for airport transfer details, 2 for personal details

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
   
      
        e.preventDefault();
        let validationErrors = {};

        // Basic validation
        if (!formData.departureAirport) validationErrors.departureAirport = true;
        if (!formData.arrivalAirport) validationErrors.arrivalAirport = true;
        if (!formData.pickupDateTime) validationErrors.pickupDateTime = true;
        if (!formData.carType) validationErrors.carType = true;
        if (formData.tripType === 'round-trip' && !formData.returnDateTime) validationErrors.returnDateTime = true;

        setErrors(validationErrors);

        // If no errors, proceed to personal details step
        if (Object.keys(validationErrors).length === 0) {
            setStep(2); // Move to the next step
        }
    };

    return (
        <>
            {step === 1 && (
                <section className="airport-transfer-section">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Departure Airport */}
                            <div className="col-md-3 mb-3">
                                <label htmlFor="departureAirport" className="form-label">Departure Airport</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-plane-departure"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.departureAirport ? 'border-danger' : ''}`}
                                        id="departureAirport"
                                        name="departureAirport"
                                        placeholder="e.g., DEL"
                                        value={formData.departureAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Arrival Airport */}
                            <div className="col-md-3 mb-3">
                                <label htmlFor="arrivalAirport" className="form-label">Arrival Airport</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-plane-arrival"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.arrivalAirport ? 'border-danger' : ''}`}
                                        id="arrivalAirport"
                                        name="arrivalAirport"
                                        placeholder="e.g., BOM"
                                        value={formData.arrivalAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Pickup Date & Time */}
                            <div className="col-md-3 mb-3">
                                <label htmlFor="pickupDateTime" className="form-label">Pickup Date & Time</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-calendar-alt"></i>
                                    </span>
                                    <input
                                        aria-label="Pickup date and time"
                                        type="datetime-local"
                                        className={`form-control ${errors.pickupDateTime ? 'border-danger' : ''}`}
                                        id="pickupDateTime"
                                        name="pickupDateTime"
                                        value={formData.pickupDateTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Return Date & Time (visible only for round trip) */}
                            {formData.tripType === 'round-trip' && (
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="returnDateTime" className="form-label">Return Date & Time</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fas fa-calendar-alt"></i>
                                        </span>
                                        <input
                                            aria-label="Return date and time"
                                            type="datetime-local"
                                            className={`form-control ${errors.returnDateTime ? 'border-danger' : ''}`}
                                            id="returnDateTime"
                                            name="returnDateTime"
                                            value={formData.returnDateTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Car Type */}
                            <div className="col-md-3 mb-3">
                                <label htmlFor="carType" className="form-label">Car Type</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-car"></i>
                                    </span>
                                    <select
                                        className={`form-select ${errors.carType ? 'border-danger' : ''}`}
                                        id="carType"
                                        name="carType"
                                        value={formData.carType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select car type</option>
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
                </section>
            )}

            {step === 2 && (
                <PersonalDetails formData={formData} setFormData={setFormData} />
            )}
        </>
    );
};

export default AirportTransfer;
