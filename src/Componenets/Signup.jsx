import React from "react";
import "./Login.css";
import {useAuth} from "../Contexts/AuthContext"

function Signup(){
  const emailRef = useRef();
  const passRef = useRef();
  const passwordRef = useRef();
  const {signup} = useAuth();
  const [error,setError] = useState('')
  function handleSubit(e){
    e.preventDefault();

 signup(emailRef.current.value, passwordRef.curent.value)

  }
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
          autoComplete="off"
          ref={emailRef}
          required
        />
        <label htmlFor="log_pass" className="label_pass">
          <span className="">New Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" ref={passwordRef}required/>
    
      <label htmlFor="log_pass" className="label_pass">
          <span className="">Retype Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" ref={passRef} required />
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
