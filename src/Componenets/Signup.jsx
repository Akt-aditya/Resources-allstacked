import React,{useRef,useState} from "react";
import "./Login.css";
import {Alert} from "react-bootstrap"
import {useAuth} from "../Contexts/AuthContext"
import {Link, BrowserRouter,useHistory} from "react-router-dom"

function Signup(){
  const emailRef = useRef();
  const passRef = useRef();
  const passwordRef = useRef();
  const {signup} = useAuth();
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history=useHistory();

  async function handleSubmit(e){
    e.preventDefault();
  if(passwordRef.current.value!==passRef.current.value){
    return setError('Passwords do not match!')
  }
  try{
    setLoading(true)
  await signup(emailRef.current.value, passwordRef.current.value)
  history.push('/')
  }
  catch{
    setError("Failed to create an account!")
  }
  setLoading(false)
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
    <h1>Signup</h1>
  
    {error && <Alert variant="danger">{error}</Alert>}
      <div className="container">
      <label htmlFor="log_name"><span>Name</span></label>
      <input type="text" className="sign_name log_email"/>
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
    
      <label htmlFor="log_password" className="label_pass">
          <span className="">Retype Password</span>
        </label>
        <input type="password" name="log_pass" id="log_password" ref={passRef} required />
        <button className="log" type="submit" disabled={loading}>
          Signup
        </button>
      </div>
      <BrowserRouter>
      <div id="change">
      <a href="/login"><button className="change">Login</button></a>
      <Link to="/login"><button className="change">Login</button></Link>
      </div>
      </BrowserRouter>
    </form>
    </div>
  );
}
export default Signup;
