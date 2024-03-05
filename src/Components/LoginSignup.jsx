import React from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="login">Login</div>
        <div className="text">Username</div>
        <input type="text" placeholder="Typer your username" />
        <div className="text">Email</div>
        <input type="email" placeholder="Type your email" />
        <div className="text">Password</div>
        <input type="password" placeholder="Type your password" />
        <div className="section">
          <button>Login</button>
          <div className="signup">Or Sign Up</div>
        </div>
      </div>
    </div>
  );
}
