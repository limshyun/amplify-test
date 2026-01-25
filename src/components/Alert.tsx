import React from 'react';

export interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  closable = false,
  onClose,
}) => {
  const typeStyles = {
    info: { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0', icon: 'ℹ️' },
    success: { bg: '#e8f5e9', border: '#4caf50', text: '#2e7d32', icon: '✅' },
    warning: { bg: '#fff3e0', border: '#ff9800', text: '#e65100', icon: '⚠️' },
    error: { bg: '#ffebee', border: '#f44336', text: '#c62828', icon: '❌' },
  };

  const style = typeStyles[type];

  return (
    <div
      style={{
        padding: '12px 16px',
        backgroundColor: style.bg,
        borderLeft: `4px solid ${style.border}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <span style={{ fontSize: '20px' }}>{style.icon}</span>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontWeight: 600, color: style.text, marginBottom: '4px' }}>
            {title}
          </div>
        )}
        <div style={{ color: style.text }}>{message}</div>
      </div>
      {closable && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: style.text,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
