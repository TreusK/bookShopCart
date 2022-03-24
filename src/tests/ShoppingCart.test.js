import React from 'react';
import {getAllByRole, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingCart from '../components/ShoppingCart';

let tempProp = [{title: 'Book1', img: '#', soloPrice: '100', amount: 3}, 
                    {title: 'Book2', img: '#', soloPrice: '200', amount: 1},
                    {title: 'Book3', img: '#', soloPrice: '500', amount: 1}];


test('it shows the header', () => {
    render(<ShoppingCart booksInCart={tempProp}/>);
    let textContent = screen.getByRole('heading', {name: 'Your Shopping Cart'});
    expect(textContent).toBeInTheDocument;
});

test('it shows 3 elements when passed an arr with 3 objects', () => {
    render(<ShoppingCart booksInCart={tempProp}/>);
    let element = screen.getAllByText(/total price/i);
    expect(element.length).toBe(3);
})

test('it shows empty cart string when the prop is empty', () => {
    render(<ShoppingCart booksInCart={[]}/>);
    let emptyCartStr = screen.getByText('Your Cart Is Empty');
    expect(emptyCartStr).toBeInTheDocument;
})

test('it calls the remove function correctly (question mark?)', () => {
    const onClickMock = jest.fn();
    render(<ShoppingCart booksInCart={tempProp} handleRemove={onClickMock}/>);
    let buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(onClickMock).toBeCalledTimes(1);
})