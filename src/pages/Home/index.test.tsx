// External imports
import { render, screen } from '@testing-library/react';

// Local imports
import Home from '.';

test('Render Home Page', () => {
  render(<Home />);
  const element = screen.getByText(/Hello World!/i);
  expect(element).toBeInTheDocument();
});
