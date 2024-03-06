import React from "react";
import "./LoginSignup.css";
import user_icon from "./Assets/person.png";

export default function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="login">Login</div>
        <div className="text">Username</div>
        <div className="inputs"></div>
        <input type="text" placeholder="Typer your username" id="userIcon" />
        <div className="text">Email</div>
        <input type="email" placeholder="Type your email" id="emailIcon" />
        <div className="text">Password</div>

        <input
          type="password"
          placeholder="Type your password"
          id="passwordIcon"
        />
        <div className="section">
          <button>Login</button>
          <div className="signup">Or Sign Up</div>
        </div>
      </div>
    </div>
  );
}
