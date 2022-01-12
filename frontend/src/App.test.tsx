import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

window.AudioContext = jest.fn().mockImplementation(() => {
  return {}
});

test('renders Hello There text', () => {
  render(<App />);
  const helloText = screen.getByText('Hello There');
  expect(helloText).toBeInTheDocument();
});
