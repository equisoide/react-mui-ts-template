import { render, screen } from '@testing-library/react';
import App from '.';

test('Render App Component', () => {
  render(<App />);
  const element = screen.getByText(/Copyright/i);
  expect(element).toBeInTheDocument();
});
