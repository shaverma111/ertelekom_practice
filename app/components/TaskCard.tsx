'use client';

import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface TaskCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function TaskCard({ number, title, children }: TaskCardProps) {
  return (
    <Card hoverable className="!bg-[var(--color-background)]">
      <div className="text-4xl font-extrabold text-[var(--color-accent-light)] mb-3 leading-none">
        {String(number).padStart(2, '0')}
      </div>
      <Title level={4} className="!mb-2.5">{title}</Title>
      <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed">
        {children}
      </Paragraph>
    </Card>
  );
}
