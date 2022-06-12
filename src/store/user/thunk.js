import {createLoginAction} from "./actionCreators";
import {LOGIN, LOGOUT} from "./actionTypes";
import {getUser} from "../../services";

export const fetchLogin = (user, navigate) => {
    const role = user.email === 'admin@email.com' && user.password === 'admin123' ? 'admin' : 'user';

    return async dispatch => {
        const result = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const data = await result.json();
        if (!data.successful) {
            alert('Неверные данные');
            return;
        }
        dispatch(createLoginAction(LOGIN, {
            isAuth: true,
            name: data.user.name,
            email: data.user.email,
            token: data.result,
            role: role,
        }))
        await localStorage.setItem('user', JSON.stringify(data.user));
        debugger
        await localStorage.setItem('token', data.result);
        await navigate('/courses');
    };
};

export const fetchLogout = () => {
    return async dispatch => {
        localStorage.removeItem('user');
        debugger
        const result = await fetch('http://localhost:4000/logout', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
        })
        dispatch(createLoginAction(LOGOUT));
        localStorage.removeItem('token');
    }
};


export const fetchUser = (navigate) => {
    return async dispatch => {
        const data = await getUser();
        if(!data.successful) {
            navigate('/login');
        } else {
            dispatch(createLoginAction(LOGIN, data.result));
        }
    }
};
