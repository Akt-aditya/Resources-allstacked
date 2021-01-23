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
          autocomplete="off"
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
      <a href="/signup"><button classNmae="change">Signup</button></a>
    </form>
    </div>
  );
}
function Signup(){
  return(
    <div>
    <form>
    <h1>Login</h1>
      <div className="container">
      <label htmlFor="log_name"><span>Name</span></label>
      <input type="text" class="sign_name log_email"/>
        <label htmlFor="log_email" className="label_email">
          <span className="">Email</span>
           </label>
        <input
          type="email"
          name="log_email"
          id="log_email"
          autocomplete="off"

        />
        <label htmlFor="log_pass" className="label_pass">
          <span className="">New Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" />
      
        
        <label htmlFor="log_pass" className="label_pass">
          <span className="">Retype Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" />
        <button className="log" type="submit">
          Signup
        </button>
      </div>
      <a href="/login"><button className="change">Login</button></a>
    </form>
    </div>
  );
}
export {Signup};
