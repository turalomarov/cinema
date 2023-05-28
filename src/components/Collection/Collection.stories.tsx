import type { StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Card from '@app/components/Card';
import Collection from './index';

export default {
  title: 'Collection/Collection',
  decorators: [withRouter],
  component: Collection,
};

type Story = StoryObj<typeof Collection>;

const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Movies: Story = {
  args: {
    href: '/',
    title: 'Collection Movie Title',
    category: 'movie',
    children: arrayOfNum.map((num) => (
      <Card
        key={num}
        id={num}
        mediaType="movie"
        year="11-22-2023"
        trending
        path={null}
      >
        Movie title
      </Card>
    )),
  },
};

export const TVs: Story = {
  args: {
    href: '/',
    title: 'Collection TV Title',
    category: 'tv',
    children: arrayOfNum.map((num) => (
      <Card
        key={num}
        id={num}
        mediaType="tv"
        year="11-22-2023"
        trending
        path={null}
      >
        TV title
      </Card>
    )),
  },
};
