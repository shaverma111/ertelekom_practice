'use client';

import { Typography } from 'antd';
import QuizBlock from '../components/QuizBlock';

const { Title, Paragraph } = Typography;

export default function QuizPage() {
  return (
    <section className="py-20 px-5 pt-24">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-center !mb-4">
          Тест: <span className="text-[var(--color-accent)]">Подходит ли тебе ML?</span>
        </Title>
        <Paragraph className="text-center !text-[var(--color-muted)] !text-lg !mb-12">
          Ответь на 8 вопросов и узнай, готов ли ты к профессии
        </Paragraph>
        <QuizBlock />
      </div>
    </section>
  );
}
