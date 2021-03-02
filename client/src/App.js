import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./assets/js/theme.js";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import CountryPage from "./components/countries/CountryPage";
import TopicPage from "./components/topics/TopicPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route exact path="/home" component={Dashboard} />
      <Route path="/countries/:code" component={CountryPage} />
      <Route path="/topics/:topic" component={TopicPage} />
      <Footer />
    </Router>
  );
}
