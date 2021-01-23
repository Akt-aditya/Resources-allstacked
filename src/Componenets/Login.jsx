import React from "react";
import "./Login.css";


export default function Login() {
  return (
    <div>
    <form>
    <h1>Login</h1>
      <div className="container">
        <label htmlFor="log_email" className="label_email">
          <span className="">Email</span>
           </label>
        <input
          type="email"
          name="log_email"
          id="log_email"
          autoComplete="off"
          required
        />
        <label htmlFor="log_pass" className="label_pass">
          <span className="">Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" />
        <button className="log" type="submit">
          Login
        </button>
      </div>
      <a href="/signup"><button className="change">Signup</button></a>
    </form>
    </div>
  );
}

