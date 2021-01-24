import React from "react";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  browserHistory
} from "react-router-dom";
import Login from "./Componenets/Login"
import Signup from "./Componenets/Signup"
import Home from "./Home";
import Cpp from "./Cpp/Cpp";
import Header from "./Header/Header";
import AuthProvider from "./Contexts/AuthContext"
function App() {
  return (
    <AuthProvider>
      <header>
        <Header />
      </header>
      <div>
        
          <article>
            <Switch>
              <Route path="/cpp">
                <Cpp />
              </Route>
              <Route exact path="/">
                <Signup />
              </Route>
              <Route path="/login" component={Login} />
            
            </Switch>
          </article>
        
        <aside>Ads</aside>
      </div>
    </AuthProvider>
  );
}

export default App;
