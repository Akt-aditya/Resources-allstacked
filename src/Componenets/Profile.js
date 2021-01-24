import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import "./profile.css";
import { Card, Alert } from "react-bootstrap";

function Profile() {
  const [error, setError] = useState();
  const currentUser = useAuth();
  function handlelogout() {}
  return (
    <Card className="container">
      <h1>Profile</h1>
      <Card.Body>
        <h3>Hello, {currentUser.email}</h3> <br />
        <button className="btn btn-primary">Update profile</button>
        </Card.Body>
        <Card.Body>
        <button onClick={handlelogout} className="logout" variant="link" clasName="btn">Logout</button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
