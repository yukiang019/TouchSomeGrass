import React from 'react';
import { render, fireEvent, within } from '@testing-library/react-native';
import Journal from '/Users/yukiangmacpro/grass/screens/Journal.js';

describe('Journal', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Journal />);
    expect(getByText('save')).toBeTruthy();
  });

  it('updates journal title and content correctly', () => {
    const { getByPlaceholderText } = render(<Journal />);
    const titleInput = getByPlaceholderText('Enter your title');
    const entryInput = getByPlaceholderText('Enter your entry');

    fireEvent.changeText(titleInput, 'Test Title');
    fireEvent.changeText(entryInput, 'Test Entry');

    expect(titleInput.props.value).toBe('Test Title');
    expect(entryInput.props.value).toBe('Test Entry');
  });

  it('updates mood icon correctly', () => {
    const { getByTestId } = render(<Journal />);
    const moodModal = getByTestId('mood-modal');
    const moodIconBtn = within(moodModal).getByTestId('mood-modal');
    fireEvent.press(moodIconBtn);
  });

  it('submits the journal entry correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Journal />);
    const titleInput = getByPlaceholderText('Enter your title');
    const entryInput = getByPlaceholderText('Enter your entry');
    const saveButton = getByText('save');

    fireEvent.changeText(titleInput, 'Test Title');
    fireEvent.changeText(entryInput, 'Test Entry');
    fireEvent.press(saveButton);

    expect(titleInput.props.value).toBe('');
    expect(entryInput.props.value).toBe('');
  });
});
