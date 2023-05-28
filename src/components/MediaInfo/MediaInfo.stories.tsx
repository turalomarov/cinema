import type { StoryObj } from '@storybook/react';
import MediaInfo from './index';

export default {
  title: 'MediaDetails/MediaInfo',
  component: MediaInfo,
};

type Story = StoryObj<typeof MediaInfo>;

export const Movie: Story = {
  args: {
    language: 'English',
    length: 190,
    mediaType: 'movie',
    status: 'active',
    releaseDate: '10-23-2023',
  },
};

export const TV: Story = {
  args: {
    firstAir: 'November 23, 2020',
    lastAir: 'February 24, 2021',
    language: 'English',
    length: 190,
    mediaType: 'tv',
    status: 'active',
  },
};
