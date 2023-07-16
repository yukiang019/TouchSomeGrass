import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Meditate from '/Users/yukiangmacpro/Desktop/grass/screens/Meditate.js';

describe('Meditate component', () => {
  it('renders the timer correctly', () => {
    const { getByTestId } = render(<Meditate />);
    const timerText = getByTestId('timer-text');
    expect(timerText).toBeTruthy();
  });

  it('starts the timer when the start button is pressed', () => {
    const { getByTestId } = render(<Meditate />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
  });

  it('does not render the pause button initially', () => {
    const { queryByTestId } = render(<Meditate />);
    const pauseButton = queryByTestId('pause-button');
    expect(pauseButton).toBeNull();
  });

  it('renders the pause button when the start button is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Meditate />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
    const pauseButton = queryByTestId('pause-button');
    expect(pauseButton).toBeTruthy();
  });

  it('pauses the timer when the pause button is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Meditate />);
    const startButton = getByTestId('start-button');
    fireEvent.press(startButton);
    const pauseButton = queryByTestId('pause-button');
    fireEvent.press(pauseButton);
    // Add assertions to check if the timer pauses correctly
  });

  it('resets the timer when the reset button is pressed', () => {
    const { getByTestId } = render(<Meditate />);
    const resetButton = getByTestId('reset-button');
    fireEvent.press(resetButton);
    // Add your assertions here to check if the timer resets correctly
  });

});
