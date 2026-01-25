import DataCard from './DataCard';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DataCard> = {
  title: 'Components/DataCard',
  component: DataCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**DataCard** is a custom card component for displaying data with status, progress, and metadata.

## Features
- Multiple status states (active, pending, error, disabled) with color-coded badges
- Optional progress bar with percentage display
- Configurable icons (chart, user, folder, settings)
- Size variants (small, medium, large)
- Metadata display in grid layout
- Action buttons (View, Edit)
- Interactive states (hover, selection)
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Card description',
      table: {
        type: { summary: 'string' },
      },
    },
    status: {
      control: 'select',
      options: ['active', 'pending', 'error', 'disabled'],
      description: 'Status of the data',
      table: {
        type: { summary: "'active' | 'pending' | 'error' | 'disabled'" },
      },
    },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
      table: {
        type: { summary: 'number' },
      },
    },
    icon: {
      control: 'select',
      options: ['chart', 'user', 'folder', 'settings'],
      description: 'Icon to display',
      table: {
        type: { summary: "'chart' | 'user' | 'folder' | 'settings'" },
        defaultValue: { summary: 'folder' },
      },
    },
    isSelected: {
      control: 'boolean',
      description: 'Whether the card is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Card size variant',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    metadata: {
      control: 'object',
      description: 'Metadata items to display',
      table: {
        type: { summary: '{ label: string; value: string }[]' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when card is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataCard>;

export const Default: Story = {
  name: 'Basic',
  args: {
    title: 'Project Analytics',
    description: 'Real-time analytics dashboard for project metrics',
    status: 'active',
    progress: 75,
    icon: 'chart',
    metadata: [
      { label: 'Created', value: '2 days ago' },
      { label: 'Owner', value: 'John Doe' },
    ],
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DataCard
        title="Active Project"
        description="Project is running smoothly"
        status="active"
        icon="folder"
      />
      <DataCard
        title="Pending Review"
        description="Waiting for approval"
        status="pending"
        icon="folder"
      />
      <DataCard
        title="Error Detected"
        description="Issues need attention"
        status="error"
        icon="folder"
      />
      <DataCard
        title="Disabled Project"
        description="Project is currently disabled"
        status="disabled"
        icon="folder"
      />
    </div>
  ),
};

export const WithProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DataCard
        title="Starting"
        status="pending"
        progress={15}
        icon="chart"
      />
      <DataCard
        title="In Progress"
        status="active"
        progress={65}
        icon="chart"
      />
      <DataCard
        title="Complete"
        status="active"
        progress={100}
        icon="chart"
      />
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DataCard
        title="Analytics Dashboard"
        status="active"
        icon="chart"
      />
      <DataCard
        title="User Profile"
        status="active"
        icon="user"
      />
      <DataCard
        title="Project Files"
        status="active"
        icon="folder"
      />
      <DataCard
        title="Settings"
        status="active"
        icon="settings"
      />
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DataCard
        title="Small Card"
        status="active"
        size="small"
      />
      <DataCard
        title="Medium Card"
        status="active"
        size="medium"
      />
      <DataCard
        title="Large Card"
        status="active"
        size="large"
      />
    </div>
  ),
};

export const WithMetadata: Story = {
  args: {
    title: 'Project Dashboard',
    description: 'Comprehensive project overview',
    status: 'active',
    icon: 'folder',
    metadata: [
      { label: 'Created', value: '2024-01-15' },
      { label: 'Owner', value: 'Jane Smith' },
      { label: 'Status', value: 'Active' },
      { label: 'Type', value: 'Analytics' },
    ],
  },
};

export const Selected: Story = {
  args: {
    title: 'Selected Card',
    description: 'This card is selected',
    status: 'active',
    isSelected: true,
    icon: 'folder',
  },
};

export const WithoutActions: Story = {
  args: {
    title: 'Read-only Card',
    description: 'Card without action buttons',
    status: 'active',
    showActions: false,
    icon: 'folder',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Clickable Card',
    description: 'Click this card to trigger an action',
    status: 'active',
    icon: 'folder',
    onClick: () => alert('Card clicked!'),
  },
};
