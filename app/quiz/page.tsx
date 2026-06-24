'use client';

import PageSection from '../components/PageSection';
import QuizBlock from '../components/QuizBlock';

export default function QuizPage() {
  return (
    <PageSection
      title="Тест: Подходит ли тебе ML?"
      subtitle="Ответь на 8 вопросов и узнай, готов ли ты к профессии"
      accent="Подходит ли тебе ML?"
    >
      <QuizBlock />
    </PageSection>
  );
}
