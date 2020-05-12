import React from "react";
import "./style.css";

function LoginBtn(props) {
  return (
    <button className="btn login-btn" {...props}>
      Login
    </button>
  );
}

export default LoginBtn;
