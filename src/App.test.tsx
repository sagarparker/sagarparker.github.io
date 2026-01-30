import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const nameElement = screen.getByText(/Sagar Parker/i);
  expect(nameElement).toBeInTheDocument();
});
