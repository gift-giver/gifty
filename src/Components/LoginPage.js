import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className="mainLogin">
            <form className="loginForm clearfix">
                <label className="listNameLabel" htmlFor="listName">Name Your Guest?</label>
                <input type="text" id="listName" placeholder="guests name"
                    onChange={props.onChangeEvent}
                    value={props.userName}
                    name='userName'
                    required
                />


                <Link
                    className="linkToMainApp" to="/MainApp"
                    onClick={(event) => props.createNewFirebaseList(event)}>
                    Lettuce Eat!
                </Link>

            </form>
        </div>

    )
}

export default LoginPage;