import React from 'react';

export interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  variant = 'default',
}) => {
  const variantStyles = {
    default: { border: '1px solid #e0e0e0', boxShadow: 'none' },
    outlined: { border: '2px solid #007bff', boxShadow: 'none' },
    elevated: { border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        ...variantStyles[variant],
      }}
    >
      <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
        <h3 style={{ margin: 0, fontSize: '18px' }}>{title}</h3>
        {subtitle && (
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>
            {subtitle}
          </p>
        )}
      </div>
      <div style={{ padding: '16px' }}>{children}</div>
      {footer && (
        <div style={{ padding: '12px 16px', backgroundColor: '#f5f5f5' }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
