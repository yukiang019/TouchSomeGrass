import React from 'react';
import { render } from '@testing-library/react-native';
import Welcome from './Welcome';

describe('Welcome Component', () => {
  // Displaying Tree Image
  it('should display the correct tree image based on the points', () => {
    // Set the points for the test case
    const points = 300;

    // Render the Welcome component
    const { getByTestId } = render(<Welcome />);

    // Update the points in the component state
    const welcomeInstance = getByTestId('welcome-instance');
    welcomeInstance.updateProps({ points });

    // Perform assertions
    // Verify that the correct tree image is displayed based on the points
    const treeImage = getByTestId('tree-image');
    expect(treeImage.props.source.uri).toBe('tree-image-6.png'); // Adjust the expected image URI as per your actual implementation
  });

});
