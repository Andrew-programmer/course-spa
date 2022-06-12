import {checkParamsFields} from "./components/functions";
import {fetchLogin} from "./store/user/thunk";

export const loadCourses = async (dispatch, act, type) => {
    const response = await fetch('http://localhost:4000/courses/all');
    const data = await response.json();
    dispatch(act(type, data.result));
};

export const loadAuthors = async (dispatch, act, type) => {
    const response = await fetch('http://localhost:4000/authors/all');
    const data = await response.json();
    dispatch(act(type, data.result));
};

export const getAuthors = async () => {
    const response = await fetch('http://localhost:4000/authors/all');
    const data = await response.json();
    return data;
};

export const clearAll = async (dispatch, act, type) => {
    dispatch(act.userAct(type.clearCourse));
    dispatch(act.authorAct(type.clearAuthor));
};

export const handleRegisterClick = async (user, navigate) => {
    const params = Object.values(user);
    if (checkParamsFields(params, '')) {
        alert('Заполните все поля');
    } else {
        debugger
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const data = await response.json();
        if (!data.successful) {
            const errors = data.errors.join('\n');
            alert(errors);
            return;
        }
        navigate('/login');
    }
};

export const handleLoginClick = async (user, navigate, dispatch) => {
    const params = Object.values(user);
    if (checkParamsFields(params, '')) {
        alert('Заполните все поля');
    } else {
        dispatch(fetchLogin(user, navigate));
    }
};

export const deleteCourse = async (courseId) => {
    const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
            // 'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    });
};

export const addCourse = async (course) => {
    const result = await fetch('http://localhost:4000/courses/add', {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    })
    const data = await result.json();
    return data.result;
};

export const updateCourse = async (course) => {
    const result = await fetch(`http://localhost:4000/courses/${course.id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    })
    const data = await result.json();
    return data.result;
};

export const addAuthor = async (author) => {
    const result = await fetch('http://localhost:4000/authors/add', {
        method: 'POST',
        body: JSON.stringify(author),
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    })
    debugger
    const data = await result.json();
    const answer = data.result;
    return answer;
};

export const getUser = async () => {
    const result = await fetch('http://localhost:4000/users/me', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    })
    const data = await result.json();
    return data;
};