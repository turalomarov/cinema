import type { StoryObj } from '@storybook/react';
import MediaGenres from './index';

export default {
  title: 'MediaDetails/Media',
  component: MediaGenres,
};

type Story = StoryObj<typeof MediaGenres>;

const genres = {
  name: 'Genre name',
  id: 1,
};

export const Default: Story = {
  args: {
    genres: [genres],
  },
};
