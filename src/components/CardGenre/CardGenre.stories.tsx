import type { StoryObj } from '@storybook/react';

import CardGenre from './CardGenre';

export default {
  title: 'Card/CardGenre',
  component: CardGenre,
};

type Story = StoryObj<typeof CardGenre>;

export const Default: Story = {
  args: {
    selected: false,
    children: 'Genre name',
  },
};
