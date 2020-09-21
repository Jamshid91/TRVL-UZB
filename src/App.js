import React from "react";
import "./App.css";
import "./components_CSS/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components_JS/Navbar";
import { Services } from "./pages/Services";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Products } from "./pages/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
