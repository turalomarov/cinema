import type { StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  decorators: [withRouter],
  component: Navigation,
};

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
