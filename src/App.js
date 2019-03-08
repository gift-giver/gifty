// import components
import React, { Component } from 'react';
import MainApp from './Components/MainApp.js';
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
      user: null,
      loggedIn: false
    }
  }

  componentDidMount(){

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          user: user
        });
      }
    });
  }

  login = () => {

    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user,
          loggedIn: true
        });
      });
  }

  logout = () => {

    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  
  
  render() {
    return (
      <Router>
        <div>
          <header>

            <Link to="MainApp">Guest</Link>

            {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Login</button>}
          </header>
          <Route path="/MainApp" exact render={() => { return (<MainApp name={this.state.user} />) }} />
          <Route exact path="/MainApp" render={() => (this.state.loggedIn ? (<Redirect to="/MainApp" />) : (<App />))} />
          
        </div>
      </Router>
    )
  }
}
export default App;