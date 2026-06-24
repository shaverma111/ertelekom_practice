'use client';

import { useState } from 'react';
import { Button, message } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';

interface CopyButtonProps {
  text: string;
  className?: string;
  /** Label shown before copy */
  label?: string;
}

export default function CopyButton({ text, className = '', label = 'Копировать' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      message.success('Скопировано!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      message.error('Не удалось скопировать');
    }
  };

  return (
    <Button
      size="small"
      icon={copied ? <CheckOutlined /> : <CopyOutlined />}
      onClick={handleCopy}
      className={`!text-xs !h-7 ${className}`}
    >
      {copied ? 'Готово' : label}
    </Button>
  );
}
