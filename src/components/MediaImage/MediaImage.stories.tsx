import type { StoryObj } from '@storybook/react';
import MediaImage from './index';

export default {
  title: 'MediaDetails/MediaImage',
  component: MediaImage,
};

type Story = StoryObj<typeof MediaImage>;

export const Default:Story = {
  args: {
    path: null,
    alt: 'alt',
  },
};
