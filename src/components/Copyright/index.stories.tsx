import { ComponentMeta, ComponentStory } from '@storybook/react';
import Copyright from '.';

export default {
  title: 'Example/Copyright',
  component: Copyright
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = (args) => <Copyright {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
