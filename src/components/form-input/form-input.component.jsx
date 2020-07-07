import React from "react";


import "./form-input.styles.scss";




const FormInput = ({ handleChange, label, value,errors ,...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} value={value} {...otherProps} />
    {label ? (
      <label className={`${value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
   
    {errors ? (
      <div className="alert alert-danger " role="alert">
        {errors}
      </div>
    ) : null}
   
  </div>
);

export default FormInput;
