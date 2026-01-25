import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of alert determining color and icon',
    },
    title: {
      control: 'text',
      description: 'Optional alert title',
    },
    message: {
      control: 'text',
      description: 'Alert message content',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be closed',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: 'info',
    message: 'This is an informational message.',
    closable: false,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational alert with a title.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please review this warning message.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'An error occurred. Please try again.',
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    title: 'Closable Alert',
    message: 'This alert can be closed by clicking the × button.',
    closable: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    type: 'success',
    message: 'This is a simple alert without a title.',
  },
};
