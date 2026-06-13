import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const heading = screen.getAllByText(/ge[šs]talto terapija/i);
  expect(heading.length).toBeGreaterThan(0);
});
