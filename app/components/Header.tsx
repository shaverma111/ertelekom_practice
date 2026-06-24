'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const navItems: MenuProps['items'] = [
  { key: '/', label: <Link href="/">Главная</Link> },
  { key: '/about', label: <Link href="/about">О профессии</Link> },
  { key: '/skills', label: <Link href="/skills">Скиллы</Link> },
  { key: '/career', label: <Link href="/career">Карьера</Link> },
  { key: '/erth', label: <Link href="/erth">ЭРТХ</Link> },
  { key: '/quiz', label: <Link href="/quiz">Тест</Link> },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[var(--color-foreground)] no-underline flex items-center gap-2">
          <span className="text-xl">&#9881;</span> ML Engineer
        </Link>

        {/* Desktop menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          items={navItems}
          className="hidden md:flex !border-0 !bg-transparent flex-1 justify-end"
        />

        {/* Mobile burger */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="md:!hidden"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Mobile drawer */}
      <Drawer
        title="ML Engineer"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        styles={{ wrapper: { width: 260 } }}
      >
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={navItems}
          onClick={() => setOpen(false)}
          className="!border-0"
        />
      </Drawer>
    </header>
  );
}
