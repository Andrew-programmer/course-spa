import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

import {Header} from "../Header";

import {mockedStore} from "../../mockedData";

import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";

describe('Header tests', () => {

    test('testing logo', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Header/>
                </Provider>
            </MemoryRouter>
        );
        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();
    });

    test('testing users name', () => {
        render(
            <MemoryRouter>
                <Provider store={mockedStore}>
                    <Header/>
                </Provider>
            </MemoryRouter>
        );
        const name = screen.getByText(/Test Name/i);
        expect(name).toBeInTheDocument();
    });
});