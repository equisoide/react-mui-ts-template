// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import Home from '.';

// Story placement in the story list
export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

// Default export
export const Default = () => <Home />;
