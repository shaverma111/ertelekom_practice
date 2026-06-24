'use client';

import type { ReactNode } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface PageSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  /** Highlighted word inside title */
  accent?: string;
  className?: string;
  /** Top padding to account for fixed header, default 'pt-24' */
  paddingTop?: string;
}

export default function PageSection({
  children,
  title,
  subtitle,
  accent,
  className = '',
  paddingTop = 'pt-24',
}: PageSectionProps) {
  const renderTitle = () => {
    if (!title) return null;
    if (accent) {
      const parts = title.split(accent);
      return (
        <>
          {parts[0]}
          <span className="text-[var(--color-accent)]">{accent}</span>
          {parts[1] || ''}
        </>
      );
    }
    return title;
  };

  return (
    <section className={`py-20 px-5 ${paddingTop} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <>
            <Title level={2} className="text-center !mb-4">
              {renderTitle()}
            </Title>
            {subtitle && (
              <Paragraph className="text-center !text-[var(--color-muted)] !text-lg !mb-12 max-w-2xl mx-auto">
                {subtitle}
              </Paragraph>
            )}
          </>
        )}
        {children}
      </div>
    </section>
  );
}
