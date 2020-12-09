import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useState } from "react";
import Post from "./components/Post";
import Filter from "./components/Filter";
import LinkSection from "./components/linkSection";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Careers from "./views/Careers";
import TOS from "./views/TOS";
import DataBrowser from "./views/DataBrowser"
import DataUploader from "./views/DataUploader"
import ErrorPage from "./views/ErrorPage"

function App() {

  return (
    <div className="App">


      <Router>

        <Header />

        {/* Route */}
        <Switch>

          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/tos">
            <TOS />
          </Route>
          <Route path="/data-browser">
            <DataBrowser />
          </Route>
          <Route path="/data-uploader">
            <DataUploader />
          </Route>
          <Route path="/404">
            <ErrorPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
        
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
