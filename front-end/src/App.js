import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import DataBrowser from "./views/DataBrowser";
import DataUploader from "./views/DataUploader";
import DataAuctionhouse from "./views/DataAuctionhouse";
import ErrorPage from "./views/ErrorPage";
import PricingPage from "./views/Pricing";
import FAQ from "./views/Faq";
import Enterprise from "./views/Enterprise";
import Cart from "./views/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/cart" component={Cart} />
      <Route path="/about" component={AboutUs} />
      <Route path="/careers" component={Careers} />
      <Route path="/tos" component={TOS} />
      <Route path="/faq" component={FAQ} />
      <Route path="/data-browser" component={DataBrowser} />
      <Route path="/data-uploader" component={DataUploader} />
      <Route path="/data-auctionhouse" component={DataAuctionhouse} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/404" component={ErrorPage} />
      <Footer />
    </div>
  );
}

export default App;
