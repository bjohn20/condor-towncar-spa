import React from "react";

const DateInput = ({ label, id, value, onChange }) => {
  return (
    <div className="col-md-6">
      <div className="form-fs-lg form-control-transparent">
        <label
          htmlFor={id}
          className="form-label small">
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-control flatpickr flatpickr-input"
          placeholder="Select date"
          id={id}
          readOnly="readonly"
        />
      </div>
    </div>
  );
};

export default DateInput;
