import { render, screen } from '@testing-library/react';
import Copyright from '.';

test('Render Copyright Component', () => {
  render(<Copyright />);
  const copyrightElement = screen.getByText(/Copyright/i);
  expect(copyrightElement).toBeInTheDocument();
});
