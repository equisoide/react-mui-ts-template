// External imports
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Local imports
import HelloWorld from '.';

// Story placement in the story list
export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

// Template of how args map to rendering
const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

// Story #1
export const Green = Template.bind({});
Green.args = {
};

// Story #2
export const Red = Template.bind({});
Red.args = {
  alert: { severity: 'error' },
};
