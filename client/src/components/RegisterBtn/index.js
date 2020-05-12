import React from "react";
import "./style.css";

function RegisterBtn(props) {
  return (
    <button className="btn register-btn" {...props}>
      Create Account
    </button>
  );
}

export default RegisterBtn;
