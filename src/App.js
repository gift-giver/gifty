// import components
import React, { Component } from 'react';
// import MainApp from './Components/MainApp.js';
// import LoginPage from './Components/LoginPage.js';
// import router
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import firebase from './firebase.js';
// import styles
import './App.css'; 
// firebase auth stuff
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    
    this.state = {

    }
  }
  
  
  render() {
    return (
      <Router>
        <div>
          <button>Log In</button>
          <button>Guest</button>
        </div>
      </Router>
    )
  }
}
export default App;