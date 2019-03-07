// import components
import React, { Component } from 'react';
import MainApp from './Components/MainApp.js';
// import LoginPage from './Components/LoginPage.js';
// import router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from './firebase.js';
// import styles
import './App.css'; 


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      user: "WeAreTheUser.. NotThem..Us"
    }
  }

  componentDidMount(){

  }
  
  
  render() {
    return (
      <Router>
        <div>
          <header>

            <Link to="MainApp">Login</Link>
          <Link to="MainApp">Guest</Link>

          </header>

          <Route path="/MainApp" exact render = { () => {return (<MainApp name={this.state.user}/>)} } />
        </div>
      </Router>
    )
  }
}
export default App;