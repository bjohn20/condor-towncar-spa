import React from "react";

const TOSOptionInput = ({ label, id, value, onChange }) => {
  return (
    <div className="">
      <label
        htmlFor="serviceType"
        className="form-label">
        Type of Service:
      </label>
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={onChange}
        aria-label="Type of Service"
        required>
        <option
          value=""
          disabled>
          Select type of service
        </option>
        <option value="Standard">Standard</option>
        <option value="Airport Transfer">Airport Transfer</option>
        <option value="Hourly">Hourly</option>
        <option value="Limousine">Limousine</option>
      </select>
    </div>
  );
};

export default TOSOptionInput;
