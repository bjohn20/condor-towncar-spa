import React from "react";

const LocationInput = ({ label, id, value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label
        htmlFor={id}
        className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        placeholder={`Enter ${label.toLowerCase()}`}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default LocationInput;
