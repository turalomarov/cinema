import type { StoryObj } from '@storybook/react';
import MediaRating from './index';

export default {
  title: 'MediaDetails/MediaRating',
  component: MediaRating,
};

type Story = StoryObj<typeof MediaRating>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};
