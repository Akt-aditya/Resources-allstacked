import React from "react";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Componenets/Login";
import Signup from "./Componenets/Signup";
import Home from "./Home";
import Cpp from "./Cpp/Cpp";
import Header from "./Header/Header";
import AuthProvider from "./Contexts/AuthContext";
function App() {
  return (
    <div>
      <article>
        <Router>
          <AuthProvider>
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={Login}/>
             
            </Switch>
          </AuthProvider>
        </Router>
      </article>
    </div>
  );
}

export default App;
