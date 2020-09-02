import React from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Home from './pages/Home';
import Time from './pages/Time';
import Currency from './pages/Currency';

import Movie from "./pages/Movie";
import Weather from "./pages/Weather";


const App = () => {
  return (
    <Router>
      <div className="background">
    <div className = "border">
      <div className="nav-bar">
        <span className = "block">
          <Link to="/">Home</Link>
          </span>
          <span className = "block">
          <Link to="/time">Time</Link>
          </span>
          <span className = "block">
          <Link to="/Currency">Currency</Link>
          </span>
          <span className="block">
              <Link to="/movie">Popular Movie</Link>
            </span>

            <span className="block">
              <Link to="/Weather">Weather</Link>
            </span>
      </div>
      <Switch>
        <Route path="/movie" component={Movie} />
        <Route path="/time" component={Time} />
        <Route path="/currency" component={Currency} />
        <Route path="/Weather" component={Weather} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
    </div>
    </Router>
  );
};

export default App;

function Users() {
  return <h2>Users</h2>;
}
