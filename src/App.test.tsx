import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    /Hi, I'm Sagar/i
  );
});

test('renders the main sections', () => {
  render(<App />);
  ['About', 'Work Experience', 'Skills', 'Certifications'].forEach((title) => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });
});
