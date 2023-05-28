import { withRouter } from 'storybook-addon-react-router-v6';
import type { StoryObj } from '@storybook/react';
import Heading from './index';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withRouter],
  argTypes: {
    category: {
      options: [undefined, 'movie', 'tv'],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    href: 'link',
    title: 'Heading',
  },
};
