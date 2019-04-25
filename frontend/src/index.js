import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);