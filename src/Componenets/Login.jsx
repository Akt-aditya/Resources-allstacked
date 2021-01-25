import React,{useRef,useState} from "react";
import "./Login.css";
import {Alert} from "react-bootstrap"
import {useAuth} from "../Contexts/AuthContext"
import {Link, BrowserRouter, useHistory} from "react-router-dom"

function Login(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login,currentUser} = useAuth();
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
  if(passwordRef.current.value!==passRef.current.value){
    return setError('Passwords do not match!')
  }
  try{
    setLoading(true)
  await login(emailRef.current.value, passwordRef.current.value)
  history.push("/")
  }
  catch{
    setError("Failed to signin!")
  }
  setLoading(false)
  }
  function handlechange(){
    history.push("/signup")
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    {error && <Alert variant="danger">{error}</Alert>}
      <div className="container">
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
          <span className="">Password</span>
        </label>
        <input type="password" name="log_pass" id="log_pass" ref={passwordRef}required/>
    
        <button className="log" type="submit" disabled={loading}>
          Login
        </button>
      </div>
      <BrowserRouter>
      <div id="change">
      {/*<a href="/signup"><button className="change" onClick={handlechange} >Signup</button></a>*/}
      <Link to="/signup"><button className="change" onClick={handlechange} >Signup</button></Link>
      </div>
      </BrowserRouter>
    </form>
    </div>
  );
}
export default Login;
