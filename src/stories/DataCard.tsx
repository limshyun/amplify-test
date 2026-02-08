import React, { useState } from 'react';

export interface DataCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Status of the data */
  status: 'active' | 'pending' | 'error' | 'disabled';
  /** Progress percentage (0-100) */
  progress?: number;
  /** Icon to display */
  icon?: 'chart' | 'user' | 'folder' | 'settings';
  /** Whether the card is selected */
  isSelected?: boolean;
  /** Callback when card is clicked */
  onClick?: () => void;
  /** Card size variant */
  size?: 'small' | 'medium' | 'large';
  /** Show action buttons */
  showActions?: boolean;
  /** Metadata items to display */
  metadata?: { label: string; value: string }[];
  /** Card visual variant */
  variant?: 'outlined' | 'filled' | 'elevated';
}

const statusColors = {
  active: { bg: '#d4edda', text: '#155724', dot: '#28a745' },
  pending: { bg: '#fff3cd', text: '#856404', dot: '#ffc107' },
  error: { bg: '#f8d7da', text: '#721c24', dot: '#dc3545' },
  disabled: { bg: '#e2e3e5', text: '#383d41', dot: '#6c757d' },
};

const icons = {
  chart: '📊',
  user: '👤',
  folder: '📁',
  settings: '⚙️',
};

export const DataCard: React.FC<DataCardProps> = ({
  title,
  description,
  status,
  progress,
  icon = 'folder',
  isSelected = false,
  onClick,
  size = 'medium',
  showActions = true,
  metadata = [],
  variant = 'outlined',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles = {
    small: { padding: '12px', fontSize: '14px', iconSize: '24px' },
    medium: { padding: '16px', fontSize: '16px', iconSize: '32px' },
    large: { padding: '24px', fontSize: '18px', iconSize: '48px' },
  };

  const currentSize = sizeStyles[size];
  const statusColor = statusColors[status];

  const variantStyles = {
    outlined: {
      border: isSelected ? '2px solid #007bff' : '1px solid #dee2e6',
      backgroundColor: isHovered ? '#f8f9fa' : '#ffffff',
      boxShadow: 'none',
    },
    filled: {
      border: isSelected ? '2px solid #007bff' : '1px solid transparent',
      backgroundColor: isHovered ? '#e9ecef' : '#f8f9fa',
      boxShadow: 'none',
    },
    elevated: {
      border: isSelected ? '2px solid #007bff' : '1px solid transparent',
      backgroundColor: isHovered ? '#f8f9fa' : '#ffffff',
      boxShadow: isHovered ? '0 8px 24px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.1)',
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: currentSize.padding,
        borderRadius: '12px',
        border: currentVariant.border,
        backgroundColor: currentVariant.backgroundColor,
        boxShadow: currentVariant.boxShadow,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        maxWidth: '360px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div
          style={{
            fontSize: currentSize.iconSize,
            lineHeight: 1,
          }}
        >
          {icons[icon]}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: currentSize.fontSize, fontWeight: 600 }}>
              {title}
            </h3>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '12px',
                backgroundColor: statusColor.bg,
                color: statusColor.text,
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: statusColor.dot,
                }}
              />
              {status}
            </span>
          </div>
          {description && (
            <p style={{ margin: '8px 0 0', color: '#6c757d', fontSize: '14px' }}>
              {description}
            </p>
          )}
        </div>
      </div>

      {progress !== undefined && (
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '12px', color: '#6c757d' }}>Progress</span>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>{progress}%</span>
          </div>
          <div
            style={{
              height: '8px',
              backgroundColor: '#e9ecef',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: progress >= 100 ? '#28a745' : '#007bff',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      )}

      {metadata.length > 0 && (
        <div
          style={{
            marginTop: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
          }}
        >
          {metadata.map((item, index) => (
            <div key={index}>
              <div style={{ fontSize: '11px', color: '#6c757d', textTransform: 'uppercase' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      )}

      {showActions && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          <button
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            View
          </button>
          <button
            style={{
              flex: 1,
              padding: '8px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default DataCard;
