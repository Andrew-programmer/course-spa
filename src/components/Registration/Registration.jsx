import React, {Fragment} from 'react';
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";
import {handleRegisterClick} from "../../services";

export const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const user = {
        name: name,
        email: email,
        password: password
    }


    return (
        <Fragment>
            <form className={'registration-form main-form'}>
                <h1>Registration</h1>
                <Input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className={'search-bar name-input'}
                    onKeyPress={null}
                    labelText={'Name'}
                    placeholdetText={'Enter name'}
                    type={'text'}
                />
                <Input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    className={'search-bar email-input'}
                    onKeyPress={null}
                    labelText={'Email'}
                    placeholdetText={'Enter email'}
                    type={'email'}
                />
                <Input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    className={'search-bar password-input'}
                    onKeyPress={null}
                    labelText={'Password'}
                    placeholdetText={'Enter password'}
                    type={'text'}
                />
                <Button
                    secondClass={'log-button register-button'}
                    onClick={() => handleRegisterClick(user, navigate)}
                    innerText={'Register'}
                />
                <span className={'login-link-block'}>If you have an account you can <Link to="/login"
                                                                                          className={'login-link'}>Login</Link></span>
            </form>
        </Fragment>

    );
};