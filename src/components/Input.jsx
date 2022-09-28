import React from "react";

import "./input.css";

const Input = ({ type, placeholder, accept }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        accept={accept && "image/*"}
      />
    </div>
  );
};

export default Input;
