import React from 'react';

export interface StatusBadgeProps {
  /** Display label */
  label: string;
  /** Badge status type */
  type: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Show pulsing dot indicator */
  pulse?: boolean;
  /** Make the badge rounded pill shape */
  pill?: boolean;
  /** Optional icon character to display before label */
  icon?: string;
  /** Click handler */
  onClick?: () => void;
}

const typeStyles = {
  success: { bg: '#d4edda', color: '#155724', dot: '#28a745' },
  warning: { bg: '#fff3cd', color: '#856404', dot: '#ffc107' },
  error: { bg: '#f8d7da', color: '#721c24', dot: '#dc3545' },
  info: { bg: '#d1ecf1', color: '#0c5460', dot: '#17a2b8' },
  neutral: { bg: '#e2e3e5', color: '#383d41', dot: '#6c757d' },
};

const sizeConfig = {
  small: { fontSize: '11px', padding: '2px 8px', dotSize: '6px' },
  medium: { fontSize: '13px', padding: '4px 12px', dotSize: '8px' },
  large: { fontSize: '15px', padding: '6px 16px', dotSize: '10px' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  type,
  size = 'medium',
  pulse = false,
  pill = true,
  icon,
  onClick,
}) => {
  const style = typeStyles[type];
  const sizeStyle = sizeConfig[size];

  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: sizeStyle.padding,
        borderRadius: pill ? '999px' : '6px',
        backgroundColor: style.bg,
        color: style.color,
        fontSize: sizeStyle.fontSize,
        fontWeight: 500,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'opacity 0.2s ease',
        lineHeight: 1.4,
      }}
    >
      <span
        style={{
          width: sizeStyle.dotSize,
          height: sizeStyle.dotSize,
          borderRadius: '50%',
          backgroundColor: style.dot,
          animation: pulse ? 'statusPulse 1.5s ease-in-out infinite' : 'none',
          flexShrink: 0,
        }}
      />
      {icon && <span>{icon}</span>}
      {label}
      {pulse && (
        <style>{`
          @keyframes statusPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      )}
    </span>
  );
};

export default StatusBadge;
