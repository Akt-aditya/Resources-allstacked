import React from "react";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./style.css"
import Login from "./Componenets/Login";
import Signup from "./Componenets/Signup";
import Home from "./Home";
import Cpp from "./Cpp/Cpp";
import Profile from "./Componenets/Profile"
import Header from "./Header/Header";
import PrivateRoutes from "./PrivateRoutes"
import AuthProvider from "./Contexts/AuthContext";
function App() {
  return (
    <div className="app">
      
        <Router>
          <AuthProvider>
         <Header />
            <Switch>
             <PrivateRoutes exact path="/" component={Home}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={Login}/>
             <Route path="/cpp" component={Cpp}/>
             <Route path="/profile" component={Profile}/>
        
            </Switch>
          </AuthProvider>
        </Router>
      
    </div>
  );
}

export default App;
