/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="title">{action}</div>

        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <div className="text">Username</div>
              <input
                type="text"
                placeholder="Type your username"
                id="userIcon"
              />
            </>
          )}
          <div className="text">Email</div>
          <input type="email" placeholder="Type your email" id="emailIcon" />
          <div className="text">Password</div>

          <input
            type="password"
            placeholder="Type your password"
            id="passwordIcon"
          />
        </div>
        <div className="section">
          <button
            className={action === "Login" ? "submit" : "subimit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Login
          </button>
          <div
            className={action === "Sign Up" ? "signup" : "signup"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Or Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}
