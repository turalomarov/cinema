import type { StoryObj } from '@storybook/react';
import Title from './index';

export default {
  title: 'Title',
  component: Title,
};

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Title',
  },
};
