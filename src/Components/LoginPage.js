import React, { Component } from 'react';
// import router
import MainApp from './MainApp.js';
import MyList from './MyList.js';
import { BrowserRouter as Router, Route, Redirect, Link } 
from 'react-router-dom';
import firebase from './../firebase.js';

//  const provider = new firebase.auth.GoogleAuthProvider();
//     const auth = firebase.auth();

class LoginPage extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    
    


    render(){

        return(
        <div className="mainLogin">
            <form className='loginForm'>
                <label htmlFor="listName">Who do you want to take out for dinner? </label>
                <input type="text" id="listName" placeholder="enter your guest's name"/>
                    <Link onClick={this.props.createNewFirebaseList} to="/MainApp">Find the perfect spot to dine</Link>

                
                </form>
        </div>

           
        )
    }
}

export default LoginPage

// {
//                 this.state.loggedIn === false ?

//                     (<header>
//                         {
//                             this.state.isHidden === false ? (
//                                 <button onClick={this.onClick}>Guest</button>
//                             ) : null

//                         }



//                         {this.state.user ? (<button onClick={this.logout}>Log Out</button>) : (<button onClick={this.login}>Login</button>)}
//                         <Route path="/MainApp" component={MainApp} />
//                     </header>)
//                     :

//                     (<Route to="/MainApp" component={MainApp} />)


//             }
//           {
//             this.state.loggedIn === true ?


//             this.state.redirect && (
//                 <button onClick={this.onClick}>Guest</button>
//             ) : null



//         }
//         <Route path="/MyList" exact component={MyList} />
//         {
//             this.state.redirect &&
//                 <Redirect to="/MainApp" />

//         }

 // constructor(){

    //     super();

    //     this.state = {
    //         user: null,
    //         loggedIn: false,
    //         redirect: false,
    //         isHidden: false
    //     }
    // }

    // componentDidMount() {

    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({
    //                 user: user,
    //                 loggedIn: false,

    //             });
    //         }
    //     });
    // }

    // toggleHidden = (e) => {
    //     this.setState({
    //         isHidden: !this.state.isHidden
    //     })
    // }


    // onClick = () => {
    //     this.setState({
    //         user: "guest",
    //         redirect: true
    //     })
    // }
    // login = () => {

    //     auth.signInWithPopup(provider)
    //         .then((result) => {
    //             const user = result.user;
    //             this.setState({
    //                 user: user,
    //                 redirect: true,
    //                 isHidden: true
    //             });
    //         });

    // }

    // logout = () => {

    //     auth.signOut()
    //         .then(() => {
    //             this.setState({
    //                 user: null,
    //                 isHidden: false,
    //                 redirect: null
    //             });


    //         });
    // }