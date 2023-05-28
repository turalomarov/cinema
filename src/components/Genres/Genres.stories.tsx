import type { StoryObj } from '@storybook/react';
import Genres from './index';

export default {
  title: 'Genres',
  component: Genres,
};

const genres = [{
  id: 1,
  name: 'Genre name',
}];

type Story = StoryObj<typeof Genres>;

export const Default: Story = {
  args: {
    genres,
    category: 'movie',
  },
};

export const Categories: Story = {
  args: {
    genres,
    category: 'movie',
  },
};
