import React from "react";

const TimeInput = ({ label, id, value, onChange }) => {
  const handleChange = (e) => {
    console.log("Received Event:", e);
    onChange(e); // Call the passed down handler
  };

  return (
    <div className="col-md-6 text-md-end">
      <div className="form-fs-lg form-control-transparent">
        <label
          htmlFor={id}
          className="form-label small ms-3 ms-md-0 me-md-3">
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="form-control flatpickr flatpickr-input text-md-end"
          data-enable-time="true"
          data-no-calendar="true"
          placeholder="Select time"
          id={id}
          readOnly="readonly"
        />
      </div>
    </div>
  );
};

export default TimeInput;
