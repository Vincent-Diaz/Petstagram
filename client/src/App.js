import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
    <div>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />

    </div>
    
  </Router>
  );
}

export default App;