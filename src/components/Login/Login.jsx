import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {useNavigate} from "react-router";
import {handleLoginClick} from "../../services";
import {useDispatch} from "react-redux";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const user = {
        email: email,
        password: password,
        role: 'user'
    }

    return (
        <Fragment>
            <form className={'login-form main-form'}>
                <h1>Login</h1>
                <Input
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    className={'search-bar email-input'}
                    onKeyPress={null}
                    labelText={'Email'}
                    placeholdetText={'Enter email'}
                    type={'email'}
                />
                <Input
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    className={'search-bar password-input'}
                    onKeyPress={null}
                    labelText={'Password'}
                    placeholdetText={'Enter password'}
                    type={'text'}
                />
                <Button
                    secondClass={'log-button login-button'}
                    onClick={() => handleLoginClick(user, navigate, dispatch)}
                    innerText={'Login'}
                />
                <span className={'registration-link-block'}>If you not have an account you can <Link to="/registration"
                                                                                                     className={'registration-link'}>Registration</Link></span>
            </form>
        </Fragment>

    );
};