import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'whatwg-fetch'; // Import the fetch polyfill
import 'firebase/auth';
import { render, fireEvent } from '@testing-library/react-native';
import LoginPage from '/Users/yukiangmacpro/Desktop/grass/screens/LoginPage.js';

describe('LoginPage', () => {
  it('should handle login when login button is pressed', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <LoginPage />
      </NavigationContainer>
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    // Add your assertions or expectations here
  });

  it('should handle sign up when sign-up button is pressed', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <LoginPage />
      </NavigationContainer>
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const signUpButton = getByTestId('signup-button');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(signUpButton);

    // Add your assertions or expectations here
  });
});
