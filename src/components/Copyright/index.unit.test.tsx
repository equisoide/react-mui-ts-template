import { render, screen } from '@testing-library/react';
import Copyright from '.';

test('Render Copyright Component', () => {
  render(<Copyright />);
  const element = screen.getByText(/Copyright/i);
  expect(element).toBeInTheDocument();
});
