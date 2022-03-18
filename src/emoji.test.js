import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";

import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from "./App";

test("Is header on screen?", () => {

    render(<App />)

    const head = screen.getByText(/Emoji Search/i);
    expect(head).toBeInTheDocument();
});

test("Are 20 items of emojis on list?", () => {
    render(<App />)

    const itemDom = screen.getByText(/100/i);
    expect(itemDom).toBeInTheDocument();
})