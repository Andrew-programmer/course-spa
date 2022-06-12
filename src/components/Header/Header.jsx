import React, {Fragment} from 'react';
// import { useNavigate } from 'react-router';

import {Logo} from './components/Logo/Logo';
import {Button} from '../common/Button/Button';
import {useDispatch, useSelector} from "react-redux";
import {fetchLogout} from "../../store/user/thunk";
import {Link} from "react-router-dom";
import {getUser} from "../functions";

export const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => getUser(state));

    const handleClick = () => {
        dispatch(fetchLogout());
    }

    return (<header className='header-container'>
        <Logo/>
        <div className='log-block'>
            {
                    localStorage.getItem('token') || user.isAuth ?
                    <Fragment>
                        <span className='log-name'>{user.name}</span>
                        <Link to={'/login'}>
                            <Button onClick={handleClick} innerText={'Logout'}/>
                        </Link>
                    </Fragment> : ''
            }
        </div>
    </header>)
};