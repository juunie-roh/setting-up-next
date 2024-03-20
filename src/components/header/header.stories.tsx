import type { Meta, StoryObj } from '@storybook/react';

import Header from './header';

const meta = {
  title: 'Example/components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderWithProps = {
  args: {},
} satisfies Story;
