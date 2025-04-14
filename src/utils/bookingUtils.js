export const checkAvailability = ({ setIsAvailable, bookingData }) => {
  // Simulate an API call to check availability
  console.log("Checking availability with data:", bookingData); // Log the booking data for debugging
  const isTimeAvailable = true; // Simulate availability check (replace with actual API call)
  setIsAvailable(isTimeAvailable);
};

export const handleServiceTypeChange = (setServiceType) => (e) => {
  setServiceType(e.target.value);
};

// export const handleTimeChange = (e, setPickupTime) => {
//   // Check if e is an event object
//   if (e && e.preventDefault && e.target) {
//     console.log("Event:", e); // This will log the event object to console for debugging
//     setPickupTime(e.target.value);
//   } else {
//     console.error("Event object is not correctly passed:", e);
//   }
// };

export const handleSubmit = (bookingData, setIsAvailable) => {
  console.log("Form Submitted");
  console.log("Booking data:", bookingData); // Log the booking data for debugging
  console.log("setIsAvailable type:", typeof setIsAvailable);

  checkAvailability({ setIsAvailable, bookingData }); // Check availability before submitting
};
