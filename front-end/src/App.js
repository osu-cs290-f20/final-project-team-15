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
import { Component } from "react";
import Post from "./components/Post";
import Filter from "./components/Filter";
import UserReview from "./components/userReview";
import LinkSection from "./components/linkSection";
import Forms from "./components/Forms";
import AboutUs from "./views/AboutUs"
import Footer from "./components/Footer"
import Header from "./components/Header"



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
          {/* <Route path="/">
            <App />
          </Route> */}

        </Switch>

        <Forms />
        <div style={alignStyle}>
          {/* Form filtering */}
          <Filter />
          <Post />
        </div>
        
        <UserReview />

        

        <Footer />
        
      </Router>
    </div>
  );
}

const pageSytle = {
  backgroundColor: "#18191A"
};

const alignStyle = {
  display: "flex",
  flexDirection: "row"
};
export default App;
