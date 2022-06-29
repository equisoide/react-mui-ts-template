// External imports
import { render, screen } from '@testing-library/react';

// Local imports
import HelloWorld from '.';

test('Render HelloWorld Component', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello World!/i);
  expect(element).toBeInTheDocument();
});
