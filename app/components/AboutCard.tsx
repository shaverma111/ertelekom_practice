'use client';

import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface AboutCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  main?: boolean;
}

export default function AboutCard({ icon, title, children, main = false }: AboutCardProps) {
  return (
    <Card
      className={main ? 'col-span-full !bg-[var(--color-accent-bg)] !border-[var(--color-accent-light)] text-center' : ''}
      hoverable
    >
      <div className="text-4xl mb-4">{icon}</div>
      <Title level={4} className="!mb-2.5">{title}</Title>
      <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed">
        {children}
      </Paragraph>
    </Card>
  );
}
