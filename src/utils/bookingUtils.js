export const checkAvailability = ({ setIsAvailable }) => {
  // Simulate an API call to check availability
  // For demonstration, let's assume the service is available for any date and time
  const available = true; // Replace with actual logic if needed
  setIsAvailable(available);
};

export const handleServiceTypeChange = (setServiceType) => (e) => {
  setServiceType(e.target.value);
};

export const handleTimeChange = (e, setPickupTime) => {
  // Check if e is an event object
  if (e && e.preventDefault && e.target) {
    console.log("Event:", e); // This will log the event object to console for debugging
    setPickupTime(e.target.value);
  } else {
    console.error("Event object is not correctly passed:", e);
  }
};

export const handleSubmit = (
  e,
  pickup,
  dropoff,
  pickupDate,
  pickupTime,
  serviceType,
  passengers,
  isAvailable
) => {
  e.preventDefault();

  const bookingData = {
    pickup: pickup,
    dropoff: dropoff,
    pickupDate: pickupDate,
    pickupTime: pickupTime,
    serviceType: serviceType,
    passengers: passengers,
  };

  console.log("Booking data:", bookingData); // Log the booking data for debugging
  checkAvailability(); // Check availability before submitting

  if (isAvailable) {
    alert(`Booking confirmed for ${pickupDate} at ${pickupTime}`);
  } else {
    alert("Sorry, the selected date and time is not available.");
  }
};
