import React, { useState } from 'react';
import PersonalDetails from './BookTaxi'; // Assuming you have a PersonalDetails component

const RoundTrip = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        pickupdate: '',
        dropdate: '',
        carType: '',
        tripType: 'Round-Trip',
        url: '/api/taxi/roundtripttaxi/'
    });
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1); // 1 for trip details, 2 for personal details

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        // Validate required fields
        if (!formData.from) validationErrors.from = true;
        if (!formData.to) validationErrors.to = true;
        if (!formData.dropdate) validationErrors.dropdate = true;
        if (!formData.pickupdate) validationErrors.pickupdate = true;
        if (!formData.carType) validationErrors.carType = true;

        setErrors(validationErrors);

        // If no errors, proceed to step 2 (personal details)
        if (Object.keys(validationErrors).length === 0) {
            setStep(2); // Move to the next step
        }
    };

    return (
        <>
            {step === 1 && (
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* From */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="from" className="form-label">From</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <input
                                    type="text"
                                    className={`form-control ${errors.from ? 'border-danger' : ''}`}
                                    name="from"
                                    placeholder="Where From?"
                                    value={formData.from}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* To */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="to" className="form-label">To</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-location-arrow"></i>
                                </span>
                                <input
                                    type="text"
                                    className={`form-control ${errors.to ? 'border-danger' : ''}`}
                                    name="to"
                                    placeholder="Where to?"
                                    value={formData.to}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* pickupdate Date */}
                        <div className="col-md-2 mb-3">
                            <label htmlFor="pickupdate" className="form-label">Pickupdate Date</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                                <input
                                    aria-label="pickupdate date and time"
                                    type="datetime-local"
                                    className={`form-control ${errors.pickupdate ? 'border-danger' : ''}`}
                                    name="pickupdate"
                                    value={formData.pickupdate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Return Date */}
                        <div className="col-md-2 mb-3">
                            <label htmlFor="dropdate" className="form-label">Return Date</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                                <input
                                    aria-label="Return date and time"
                                    type="datetime-local"
                                    className={`form-control ${errors.dropdate ? 'border-danger' : ''}`}
                                    name="dropdate"
                                    value={formData.dropdate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Car Type */}
                        <div className="col-md-2 mb-3">
                            <label htmlFor="carType" className="form-label">Car Type</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-car"></i>
                                </span>
                                <select
                                    className={`form-select ${errors.carType ? 'border-danger' : ''}`}
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
            )}

            {step === 2 && (
                <PersonalDetails formData={formData} setFormData={setFormData} />
            )}
        </>
    );
};

export default RoundTrip;
