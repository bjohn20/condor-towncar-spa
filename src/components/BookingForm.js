import React, { useState } from "react";

const BookingForm = () => {
  // State to track the selected pick-up and drop-off locations
  const [pickup, setPickup] = useState(""); // State to track pick-up location (if needed)
  const [dropoff, setDropoff] = useState(""); // State to track drop-off location (if needed)

  // State to track pick-up date and time
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  // State to track availability
  const [isAvailable, setIsAvailable] = useState(null);

  // State to track number of passengers
  const [passengers, setPassengers] = useState(1);

  const handleTimeChange = (e) => {
    setPickupTime(e.target.value);
  };

  const checkAvailability = () => {
    // Simulate an API call to check availability
    // For demonstration, let's assume the service is available for any date and time
    const available = true; // Replace with actual logic if needed
    setIsAvailable(available);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      pickupDate: e.target.value,
      pickupTime: pickupTime,
    };

    console.log("Booking data:", bookingData); // Log the booking data for debugging
    checkAvailability(); // Check availability before submitting

    if (isAvailable) {
      alert(`Booking confirmed for ${pickupDate} at ${pickupTime}`);
    } else {
      alert("Sorry, the selected date and time is not available.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form">
      <h2>Book Your Ride</h2>

      {/* Pickup and Dropoff Locations */}
      <div>
        <label htmlFor="pickup">Pickup Location:</label>
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pickup">Dropoff Location:</label>
        <input
          type="text"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          required
        />
      </div>

      {/* Pickup Date and Time */}
      <div>
        <label htmlFor="pickupDate">Pick-up Date:</label>
        <input
          type="date"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="pickupTime">Pick-up Time:</label>
        <input
          type="time"
          id="pickupTime"
          value={pickupTime}
          onChange={handleTimeChange}
          required
        />
      </div>

      {/* Number of Passengers */}

      <div>
        <label htmlFor="passengers">Number of Passengers:</label>
        <select
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          required>
          {[1, 2, 3, 4, 5].map((num) => (
            <option
              key={num}
              value={num}>
              {num}
            </option>
          ))}{" "}
        </select>
      </div>

      <button type="submit">Check Availability</button>

      {isAvailable !== null && (
        <div className="availability-message">
          {isAvailable ? (
            <p>Great! Your selected date and time is available.</p>
          ) : (
            <p>Sorry, the selected date and time is not available.</p>
          )}
        </div>
      )}
    </form>
  );
};

export default BookingForm;
// This BookingForm component allows users to select a pick-up date and time.
