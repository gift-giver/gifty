import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';

//  const provider = new firebase.auth.GoogleAuthProvider();

// TODO: firebase auth method to check everytime what login you would like to use for users with more then one login
// provider.setCustomParameters({
//     prompt: "select_account"    // force google to ask which account to use
// })

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
                <form className="loginForm clearfix">
                    <label className="listNameLabel"htmlFor="listName">Name Your Guest? </label>
                    <input type="text" id="listName" placeholder="guest's name"
                    onChange={this.props.onChangeEvent}
                    value={this.props.userName}
                    name='userName'    
                    />
                    
                    <Link className="linkToMainApp" to="/MainApp"
                        onClick={(event) => this.props.createNewFirebaseList(event)}
                        className="linkToMainApp">Lettuce Eat!
                    </Link>
                    
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