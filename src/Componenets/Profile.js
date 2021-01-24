import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import "./profile.css";
import {useHistory} from "react-router-dom";
import { Card, Alert } from "react-bootstrap";

function Profile() {
  const [error, setError] = useState();
  const {currentUser,logout} = useAuth();
  const history=useHistory();
  async function handlelogout() {
    seterror('')
    try{
    await logout();
    history.push("/login")
    }
    catch{
      seterror("Failer to logout!");
    }
  }
  return (
    <Card className="container">
      <h1>Profile</h1>
      {error && <Alert variant="danger"></Alert>}
      <Card.Body>
        <h3>Hello, {currentUser.email}</h3> <br />
        <button className="btn btn-primary">Update profile</button>
        </Card.Body>
        <Card.Body>
        <button onClick={handlelogout} className="logout btn" variant="link" >Logout</button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
