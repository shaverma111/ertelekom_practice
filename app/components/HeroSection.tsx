'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-[var(--color-accent-bg)] to-[var(--color-accent-light)] pt-16">
      <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-[var(--color-accent-light)] text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            Профессия будущего
          </span>
          <Title level={1} className="!text-[clamp(2.5rem,5vw,4rem)] !mb-5 !leading-tight !font-extrabold">
            ML <span className="text-[var(--color-accent)]">Инженер</span>
          </Title>
          <Paragraph className="!text-[var(--color-muted)] !text-lg !mb-8 !max-w-lg mx-auto lg:mx-0">
            Machine Learning Engineer — человек, который учит компьютер думать, предсказывать и принимать решения на основе данных
          </Paragraph>
          <Link href="/about">
            <Button type="primary" size="large" className="!h-12 !px-8 !text-base !font-semibold">
              Узнать больше
            </Button>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/ai.png"
            alt="ML инженер — робот с компьютером вместо головы"
            width={520}
            height={520}
            className="max-w-full h-auto drop-shadow-2xl hover:scale-[1.03] hover:-rotate-1 transition-transform duration-400"
            priority
          />
        </div>
      </div>
    </section>
  );
}
