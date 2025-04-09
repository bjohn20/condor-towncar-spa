import LocationInput from "./LocationInput";
import DateInput from "./DateInput";
import TOSOptionInput from "./TOSOptionInput";
import TimeInput from "./TimeInput";

import { checkAvailability } from "../utils/bookingUtils";
import { handleTimeChange } from "../utils/bookingUtils";
import { handleServiceTypeChange } from "../utils/bookingUtils";
import { handleSubmit } from "../utils/bookingUtils";

import { useBookingForm } from "../hooks/useBookingForm";

const BookingForm = () => {
  const {
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
  } = useBookingForm();

  // Function to handle time change
  handleTimeChange(setPickupTime);

  // Function to handle service type change
  handleServiceTypeChange(setServiceType);

  // Function to handle form submission
  checkAvailability({ setIsAvailable });

  // Function to check availability when the form is submitted
  handleSubmit(
    pickup,
    dropoff,
    pickupDate,
    pickupTime,
    serviceType,
    passengers,
    isAvailable
  );

  return (
    // Card component for the booking form starts here
    <form
      onSubmit={handleSubmit}
      className="card-body form-control-border p-3 p-sm-4">
      {/* Tabs Start */}
      <div
        className="nav nav-pills mb-3"
        id="pills-tab"
        role="tablist">
        <div
          className="form-check form-check-inline active"
          id="cab2-one-way-tab"
          data-bs-toggle="pill"
          data-bs-target="#cab2-one-way"
          role="tab"
          aria-controls="cab2-one-way"
          aria-selected="true">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="cabRadio1"
            value="option1"
          />
          <label
            className="form-check-label"
            htmlFor="cabRadio1">
            One Way
          </label>
        </div>
        <div
          className="form-check form-check-inline"
          id="cab2-round-way-tab"
          data-bs-toggle="pill"
          data-bs-target="#cab2-round-way"
          role="tab"
          aria-controls="cab2-round-way"
          aria-selected="false"
          tabIndex="-1">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="cabRadio2"
            value="option2"
          />
          <label
            className="form-check-label"
            htmlFor="cabRadio2">
            Round Trip
          </label>
        </div>
      </div>
      {/* Tabs End */}
      {/* Tabs Content Start */}
      <div
        className="tab-content my-4"
        id="pills-tabContent">
        {/* <!-- One way START --> */}
        <div
          className="tab-pane fade active show"
          id="cab2-one-way"
          role="tabpanel"
          aria-labelledby="cab2-one-way-tab">
          <div className="row g-2 g-md-4">
            {/* Type of Service */}
            <TOSOptionInput
              value={serviceType}
              onChange={(e) => handleServiceTypeChange(e, setServiceType)}
            />
            {/* <!-- Pickup --> */}
            <div className="col-md-6 position-relative">
              <div className="form-fs-lg form-control-transparent">
                <LocationInput
                  label={"Pickup"}
                  id={"pickupLocation"}
                  value={pickup}
                  onChange={(value) => setPickup(value)}
                />
              </div>
            </div>
            {/* <!-- Dropoff --> */}
            <div className="col-md-6 text-md-end">
              <div className="form-fs-lg form-control-transparent">
                <LocationInput
                  label={"Dropoff"}
                  id={"dropoffLocation"}
                  value={dropoff}
                  onChange={(value) => setDropoff(value)}
                />
              </div>
            </div>
            {/* Date & Time */}
            <DateInput
              label={"Pickup Date"}
              id={"pickupDate"}
              value={pickupDate}
              onChange={(value) => setPickupDate(value)}
            />

            <TimeInput
              label={"Pickup Time"}
              id={"pickupTime"}
              value={pickupTime}
              onChange={(e) => handleTimeChange(e, setPickupTime)}
            />
          </div>
        </div>
        {/* <!-- One way END --> */}

        {/* <!-- Round trip START --> */}

        {/* <!-- Round trip END --> */}
      </div>

      {/* Number of Passengers */}

      <div>
        <label
          htmlFor="passengers"
          className="form-label small">
          Number of Passengers:
        </label>
        <select
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
          required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-secondary btn-lg w-100 mt-3">
        Check Availability
      </button>

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
