import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {mockedStore} from "../../../../mockedData";

import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import {Courses} from "../../../Courses";


describe('Course card tests', () => {

    test('testing title', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const title = screen.getByText(/testTitle/i);
        expect(title).toBeInTheDocument();
    });

    test('testing description', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const description = screen.getByText(/description/i);
        expect(description).toBeInTheDocument();
    });

    test('testing duration', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const duration = screen.getByText(/02:00 hours/i);
        expect(duration).toBeInTheDocument();
    });

    test('testing authors', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const authors = screen.getByText(/test_author/i);
        expect(authors).toBeInTheDocument();
    });

    test('testing creationDate', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Courses/>
                </Provider>
            </MemoryRouter>
        );
        const creationDate = screen.getByText(/27.05.2022/i);
        expect(creationDate).toBeInTheDocument();
    });
});