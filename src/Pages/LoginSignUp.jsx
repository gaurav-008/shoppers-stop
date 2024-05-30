import React from "react";
import './CSS/LoginSignup.css'
export const LoginSignUp = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Create an Account</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
        <p className="loginSignup-login">Already have an account? <span>Login</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};
