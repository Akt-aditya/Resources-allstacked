import React from "react";
import { Link, Switch, Route, BrowserRouter as Router, browserHistory } from "react-router-dom";

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
     <Router>
      <article>
        <Switch>
          <Route path="/cpp">
           <Cpp />
          </Route>
          <Route exact path="/">
            Home 
          </Route>
        </Switch>
      </article>
    </Router>
     <aside>
      Ads     
     </aside>
    </div>
    </>
  );
}

export default App;
