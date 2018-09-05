import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import All from './screens/all';
import Started from './screens/started';
import Completed from './screens/completed';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => All,
  },
  {
    path: "/completed",
    main: () => Completed,
  },
];

const Routes = () => (
  <Router>
    <div style={{
        marginLeft: 150,
        marginRight: 150,
        display: "flex",
      }}
    >
      <div
        style={{
          padding: "10px",
          width: "20%",
          background: "#e1e8ea"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main()}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default Routes;