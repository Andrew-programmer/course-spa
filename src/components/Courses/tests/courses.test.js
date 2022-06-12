import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

import {mockedStore} from "../../mockedData";

import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import {withRouter} from "react-router-dom";
import {Courses} from "../Courses";
import {Link, Route, Routes, Switch} from "react-router-dom";
import {CourseForm} from "../../CourseForm/CourseForm";
import {Registration} from "../../Registration/Registration";
import {Login} from "../../Login/Login";
import {CourseInfo} from "../../CourseInfo/CourseInfo";
import {App} from "../../../App";


describe('Courses tests', () => {

    test('testing count of course cards', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const courseCardCount = screen.getAllByText(/authors/i).length;
        expect(courseCardCount).toEqual(1);
    });

    test('testing empty container', () => {
        const mockedState = {
            user: {
                isAuth: true,
                name: 'Test Name',
            },
            courses: [],
            authors: [],
        };
        const mockedStore = {
            getState: () => mockedState,
            subscribe: jest.fn(),
            dispatch: jest.fn(),
        };

        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const courseCardCount = screen.queryByText(/description/i);
        expect(courseCardCount).toBeNull();
    });

    test('testing "add new course" button', () => {

        render(
            <MemoryRouter initialEntries={['/courses', '/courses/add']} initialIndex={0}>
                <Provider store={mockedStore}>
                    <Routes>
                        <Route path={'/courses/add'} element={<CourseForm/>}/>
                        <Route path={'/courses'} element={<Courses/>}/>
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const btn = screen.getByText(/add new course/i);
        expect(btn).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByText(/Create course/i)).toBeInTheDocument();
    });
});