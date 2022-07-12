/**
 * Storybook file for the HelloWorld component.
 */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HelloWorld from '.';

// Story placement in the story list
export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

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
