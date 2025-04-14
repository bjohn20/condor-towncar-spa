import { useState } from "react";
import { handleSubmit } from "../utils/bookingUtils";

export const useBookingForm = () => {
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

  const [serviceType, setServiceType] = useState("Standard"); // State to track service type (if needed)

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const bookingData = {
      pickup: pickup,
      dropoff: dropoff,
      pickupDate: pickupDate,
      pickupTime: pickupTime,
      serviceType: serviceType,
      passengers: passengers,
    };

    handleSubmit(bookingData, setIsAvailable); // Call the handleSubmit function with the booking data
  };

  return {
    pickup,
    setPickup,
    dropoff,
    setDropoff,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    isAvailable,
    setIsAvailable,
    passengers,
    setPassengers,
    serviceType,
    setServiceType,
    handleFormSubmit,
  };
};
