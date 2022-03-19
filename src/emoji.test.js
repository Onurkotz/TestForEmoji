import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Tests of App", () => {
  let input, head, itemDom, letter, smileEmoji;

  beforeEach(() => {
    render(<App />);

    input = screen.getByPlaceholderText("Search an emoji!");
    head = screen.getByText(/Emoji Search/i);
    itemDom = screen.getAllByText("Click to copy emoji");
    letter = "Smile";
    smileEmoji = screen.getByText("Smile");
  });

  test("Is header on screen?", () => {
    expect(head).toBeInTheDocument();
  });

  test("Are there 20 emojis on list?", () => {
    expect(itemDom.length).toEqual(20);
  });

  test("Is filter function success?", () => {
    userEvent.type(input, letter);
    expect(smileEmoji).toBeInTheDocument();
  });

  test("... is copied?", () => {
    userEvent.click(smileEmoji);
    userEvent.paste(input, window.ClipboardItem);
    expect(input).toHaveValue();
  });
});
