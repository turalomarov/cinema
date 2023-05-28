import type { StoryObj } from '@storybook/react';
import MediaCasts from './index';

export default {
  title: 'MediaDetails/MediaCasts',
  component: MediaCasts,
};

type Story = StoryObj<typeof MediaCasts>;

const casts = {
  name: 'Cast name',
  credit_id: 'ID',
};

export const Default: Story = {
  args: {
    casts: [casts],
  },
};
