// External imports
import { render, screen } from '@testing-library/react';

// Local imports
import HomePage from '.';

test('Render HomePage', () => {
  render(<HomePage />);
  const element = screen.getByText(/Hello World!/i);
  expect(element).toBeInTheDocument();
});
