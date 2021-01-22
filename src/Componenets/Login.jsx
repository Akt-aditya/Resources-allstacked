import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <form>
      <div className="container">
        <input
          type="email"
          name="log_email"
          id="log_email"
          autocomplete="off"
          required
        />
        <label htmlFor="log_email" className="label_email">
          <span className="">Email</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" />
        <label htmlFor="log_pass" className="label_pass">
          <span className="" />
        </label>
        <button className="log" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
