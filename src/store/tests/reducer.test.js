import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


import {Provider} from "react-redux";

import {rootReducer} from "../index";
import {createStore} from "redux";
import {TestRedux} from "./TestRedux";


const renderWithRedux = (
    component,
    // {initialState, store = createStore(rootReducer, initialState)}
    store = createStore(rootReducer)
) => {
    return{
        ...render(
            <Provider store={store}>{component}</Provider>
        ), store
    }
}

describe('Reducer tests', () => {
    test('reducer return the initial state', () => {
        const defaultAuthors = JSON.stringify([]);
        const defaultCourses = JSON.stringify([]);
        const defaultUser = JSON.stringify({
            isAuth: false,
            name: '',
            email: '',
            token: '',
            role: ''
        });

        renderWithRedux(<TestRedux/>);

        const authorsHeading = screen.getByTestId('authors-test');
        expect(authorsHeading).toHaveTextContent(defaultAuthors);

        const coursesHeading = screen.getByTestId('courses-test');
        expect(coursesHeading).toHaveTextContent(defaultCourses);

        const userHeading = screen.getByTestId('user-test');
        expect(userHeading).toHaveTextContent(defaultUser);
    });

    test('testing course adding', () => {
        renderWithRedux(<TestRedux/>);

        const addButton = screen.getByTestId('add-course-button')
        expect(addButton).toBeInTheDocument();
        fireEvent.click(addButton);
        expect(screen.getByTestId('courses-test')).toHaveTextContent(/titleTestCourse/i);
    });

    test('testing get courses', () => {
        renderWithRedux(<TestRedux/>);

        const getCoursesButton = screen.getByTestId('get-course-button');
        fireEvent.click(getCoursesButton);

    });
});