import type { StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Layout from './index';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withRouter],
};

type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
