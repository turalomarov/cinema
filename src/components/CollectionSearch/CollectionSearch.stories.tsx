import type { StoryObj } from '@storybook/react';
import Card from '@app/components/Card';
import CollectionSearch from './index';

export default {
  title: 'Collection/Search',
  component: CollectionSearch,
};

const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Story = StoryObj<typeof CollectionSearch>;

export const Default: Story = {
  args: {
    children: arrayOfNum.map((num) => (
      <Card
        key={num}
        id={num}
        mediaType="movie"
        year="11-22-2023"
        path={null}
      >
        Movie title
      </Card>
    )),
  },
};
