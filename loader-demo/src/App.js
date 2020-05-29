import React from "react";
import { Switch, Route } from "react-router-dom";

import Lists from "./component/List/Lists";
import Main from "./component/Main/Main";
import Home from "./component/Main/Home";
import Portal from "./component/modal/modal";
function App() {
  return (
    <div>
      <Main />
      <Portal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lists/" component={Lists} />
      </Switch>
    </div>
  );
}

export default App;
