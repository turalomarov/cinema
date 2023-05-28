import type { StoryObj } from '@storybook/react';
import MediaSynopsis from './index';

export default {
  title: 'MediaDetails/MediaSynopsis',
  component: MediaSynopsis,
};

type Story = StoryObj<typeof MediaSynopsis>;

export const Default: Story = {
  args: {
    children: 'Text for synopsis',
  },
};
