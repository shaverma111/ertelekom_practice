'use client';

import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  /** Emoji or icon displayed above title */
  icon?: string;
  /** Large number prefix like "01", "02" */
  number?: number;
  /** Use accent background style */
  highlight?: boolean;
  /** Enable hover animation (default true) */
  hoverable?: boolean;
  className?: string;
}

export default function ContentCard({
  title,
  children,
  icon,
  number,
  highlight = false,
  hoverable = true,
  className = '',
}: ContentCardProps) {
  return (
    <Card
      hoverable={hoverable}
      className={`${highlight ? 'col-span-full !bg-[var(--color-accent-bg)] !border-[var(--color-accent-light)] text-center' : '!bg-[var(--color-background)]'} ${className}`}
    >
      {number !== undefined && (
        <div className="text-4xl font-extrabold text-[var(--color-accent-light)] mb-3 leading-none">
          {String(number).padStart(2, '0')}
        </div>
      )}
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <Title level={4} className="!mb-2.5">{title}</Title>
      <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed">
        {children}
      </Paragraph>
    </Card>
  );
}
