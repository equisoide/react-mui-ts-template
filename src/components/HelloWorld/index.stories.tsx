import { ComponentMeta, ComponentStory } from '@storybook/react';
import HelloWorld from '.';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

export const Green = Template.bind({});
Green.args = {
};

export const Red = Template.bind({});
Red.args = {
  alert: { severity: 'error' },
};
