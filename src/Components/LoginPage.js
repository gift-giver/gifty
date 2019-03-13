import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className="mainLogin">
            <form className="loginForm clearfix">
                <label className="listNameLabel" htmlFor="listName">Come dine with me:</label>
                <input type="text" id="listName" placeholder="guest's name"
                    onChange={props.onChangeEvent}
                    value={props.userName}
                    name='userName'
                    required
                />

                <Link
                    className="linkToMainApp" to="/search"
                    onClick={(event) => props.createNewFirebaseList(event)}>
                    Lettuce Eat!
                </Link>

            </form>
        </div>

    )
}

export default LoginPage;