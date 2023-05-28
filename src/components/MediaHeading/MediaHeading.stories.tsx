import type { StoryObj } from '@storybook/react';
import MediaHeading from './index';

export default {
  title: 'MediaDetails/MediaHeading',
  component: MediaHeading,
};

type Story = StoryObj<typeof MediaHeading>;

export const Default: Story = {
  args: {
    title: 'Media title',
    tagline: 'Media tagline',
  },
};
