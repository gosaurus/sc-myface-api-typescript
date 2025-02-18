import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders myFace text', () => {
  const { getByText } = render(<App />);
  const textElement= getByText(/myFace/i);
  expect(textElement).toBeVisible();
});
