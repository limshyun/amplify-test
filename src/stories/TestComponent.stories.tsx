import TestComponent from './TestComponent';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof TestComponent> = {
  title: 'Components/TestComponent',
  component: TestComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**TestComponent** is a simple component that displays a title.

## Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`title\` | \`string\` | Yes | The text to display |
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The text to display',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Default: Story = {
  name: 'Basic',
  args: {
    title: 'Hello, Storybook!',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'This is a custom title',
  },
};
