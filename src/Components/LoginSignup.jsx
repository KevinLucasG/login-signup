import React from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="login">Login</div>
        <div className="text">Name</div>
        <input type="text" />
        <div className="text">Email</div>
        <input type="email" />
        <div className="text">Password</div>
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}