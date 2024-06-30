// src/components/Input.js
import React from 'react';
import "./input.css"

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  errorMessage,
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`input-field ${errorMessage ? 'input-error' : ''}`}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Input;

