import React from "react";

const TimeInput = ({ label, id, value, onChange }) => {
  return (
    <div className="col-md-6 text-md-end">
      <div className="form-fs-lg form-control-transparent">
        <label
          htmlFor={id}
          className="form-label small ms-3 ms-md-0 me-md-3">
          {label}
        </label>
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-control text-md-end"
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
