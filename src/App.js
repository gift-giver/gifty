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
      loggedIn: false,
      redirect: false,
      isHidden:false
    }
  }

  componentDidMount(){

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          user: user,
          loggedIn: false,
         
        });
      }
    });
  }

  toggleHidden= (e) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  onClick = () => {
    this.setState({
      user: "guest",
      redirect: true
    })
  }
   login = () => {

    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user,
          redirect: true,
          isHidden: true
        });
      });
  }

  logout = () => {

    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          isHidden: false
        });
      });
  }
  
  
  render() {
    return (
      <Router>
        <div>
          
        {this.state.loggedIn === false ? 
          
          (<header>
              {
                this.state.isHidden === false ? (
                <button onClick={this.onClick}>Guest</button>
                ) : null
                
              }
             
            
            {/* <Link to="/MainApp"></Link> */}

            {this.state.user ? (<button onClick={this.logout}>Log Out</button>) : (<button onClick={this.login}>Login</button>)}
              <Route path="/MainApp" component={MainApp} /> 
          </header>) 
          : 
      
          (<Route to="/MainApp" component={MainApp} />)
               
      
      }
      {
        this.state.redirect && 
          <Redirect to="/MainApp"/>

      }
    
       </div>
      </Router>
    )
  }
}
export default App;