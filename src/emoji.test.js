import React from "react";
import "@testing-library/jest-dom";


import {  render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from "./App";

test("Is header on screen?", () => {

    render(<App />)

    const head = screen.getByText(/Emoji Search/i);
    expect(head).toBeInTheDocument();
});

test("Are 20 items of emojis on list?", () => {
    render(<App />)

    const itemDom = screen.getAllByText('Click to copy emoji');
    expect(itemDom.length).toEqual(20);
})

test("is filter funciton success?", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search an emoji!");
    const letter = "Smile";
    const smileEmoji = screen.getByText("Smile")
    userEvent.type(input, letter);
    expect(smileEmoji).toBeInTheDocument();
})

test("is copied?", () => {
    render(<App />);

    const smileEmoji = screen.getByText("Smile");
    userEvent.click(smileEmoji);
    const input = screen.getByPlaceholderText("Search an emoji!");
    userEvent.paste(input, window.ClipboardItem);
    expect(input).toHaveValue();
    
})