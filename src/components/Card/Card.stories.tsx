import type { StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Card from './index';

export default {
  title: 'Card/Card',
  decorators: [withRouter],
  component: Card,
};

type Story = StoryObj<typeof Card>;

export const Movie: Story = {
  args: {
    id: 1,
    path: '/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg',
    mediaType: 'movie',
    year: '2023',
    trending: false,
    children: 'Movie card',
  },
};

export const TV: Story = {
  args: {
    id: 1,
    mediaType: 'tv',
    path: '/qVNACrSwu8RCgf9loLKfTv0mDeq.jpg',
    year: '2023',
    trending: false,
    children: 'TV card',
  },
};

export const Trending: Story = {
  args: {
    id: 1,
    path: '/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg',
    mediaType: 'movie',
    year: '2023',
    trending: true,
    children: 'Movie card',
  },
};

export const NoPoster: Story = {
  args: {
    id: 1,
    mediaType: 'tv',
    path: null,
    year: '2023',
    trending: false,
    children: 'TV card',
  },
};
