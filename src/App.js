import React from "react";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  browserHistory
} from "react-router-dom";
import Login from "./Componenets/Login"
import Home from "./Home";
import Cpp from "./Cpp/Cpp";
import Header from "./Header/Header";
function App() {
  return (
    <>
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
                {Home}
              </Route>
              <Route path="/login" component={Login} />
            </Switch>
          </article>
        
        <aside>Ads</aside>
      </div>
    </>
  );
}

export default App;
