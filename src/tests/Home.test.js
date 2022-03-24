import React from "react";
import { getByTestId, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Home from "../components/Home";

test("renders heading", () => {
    render(<Home />);
    let homeHeader = screen.getByRole('heading', {name: 'Hi Im HOME'});

    expect(homeHeader).toBeTruthy();
});