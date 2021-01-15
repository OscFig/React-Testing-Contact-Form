import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm  from './ContactForm'

test('Renders without errors', async () => {
    //Arrange:
    render(<ContactForm />);

    //Act:
    //1. Get access to the Name, Email, and Message 
    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByLabelText(/last Name/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.getByLabelText(/message/i);

    //2. Type values for the input fields.
    userEvent.type(firstName, 'Oscar');
    userEvent.type(lastName, 'Figueroa');
    userEvent.type(email, 'something@gmail.com');
    userEvent.type(message,'Did this work?');

    //3. Push the submit button.
    const button = screen.getByRole('button');
    userEvent.click(button);

    //Assert:
    //Check if results match
    const newUser = await screen.findByText(/Oscar/i);
    expect(newUser).toBeInTheDocument();
})