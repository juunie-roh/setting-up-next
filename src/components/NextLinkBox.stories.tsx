import type { Meta, StoryObj } from '@storybook/react';

import { NextLinkBox } from './NextLinkBox';

const meta = {
  title: 'Example/NextLinkBox',
  component: NextLinkBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof NextLinkBox>;

export default meta;
type Story = StoryObj<typeof NextLinkBox>;

export const NextLinkBoxWithProps = {
  args: {
    href: '#',
    title: 'Example Title',
    description: 'Example Description',
  },
} satisfies Story;
