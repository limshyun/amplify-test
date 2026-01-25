import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle text',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
    footer: {
      control: 'text',
      description: 'Optional footer content',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style variant of the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Optional subtitle',
    children: 'This is the card content. It can contain any React nodes.',
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    subtitle: 'With blue border',
    children: 'This card has a prominent outlined border style.',
    variant: 'outlined',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    subtitle: 'With shadow',
    children: 'This card appears elevated with a shadow effect.',
    variant: 'elevated',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card includes a footer section.',
    footer: 'Footer content goes here',
  },
};

export const Simple: Story = {
  args: {
    title: 'Simple Card',
    children: 'A minimal card with just title and content.',
  },
};
