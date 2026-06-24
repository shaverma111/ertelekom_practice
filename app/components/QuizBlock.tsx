'use client';

import { useState } from 'react';
import { Button, Progress, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface Question {
  q: string;
  answers: string[];
  points: number[];
}

const questions: Question[] = [
  {
    q: 'Тебе нравится решать математические задачки и головоломки?',
    answers: ['Да, обожаю!', 'Нормально, но без фанатизма', 'Не очень, но готов попробовать', 'Нет, это не моё'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Как ты относишься к работе с огромными объёмами данных?',
    answers: ['Интересно — это как копаться в сокровищах', 'Нормально, если понимаю зачем', 'Лучше пусть кто-то другой делает', 'Данные — это скучно'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Готов ли ты учиться новым языкам программирования и библиотекам?',
    answers: ['Да, я постоянно изучаю что-то новое', 'Да, если это нужно для дела', 'Может быть, если будет время', 'Нет, хочу работать с тем, что уже знаю'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Тебе интересно, как работают нейросети «под капотом»?',
    answers: ['Да, хочу разобраться в математике', 'Интересно, но пока не углублялся', 'Чуть-чуть, но не сильно', 'Нет, мне хватает API'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Как ты относишься к экспериментам, которые не всегда заканчиваются успехом?',
    answers: ['Это часть процесса — каждая ошибка учит', 'Нормально, если в итоге получится результат', 'Не люблю, когда время тратится впустую', 'Предпочитаю гарантированный результат'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Готов ли ты объяснять сложные вещи простым языком?',
    answers: ['Да, люблю делиться знаниями', 'Смогу, если постараюсь', 'Лучше покажу код', 'Нет, мне проще написать документацию'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Как ты относишься к работе в команде с аналитиками и разработчиками?',
    answers: ['Обожаю — совместная работа вдохновляет', 'Нормально, если каждый делает своё', 'Предпочитаю работать один', 'Мне важнее техническая часть'],
    points: [3, 2, 1, 0],
  },
  {
    q: 'Готов ли ты следить за свежими исследованиями и статьями в ML?',
    answers: ['Да, читаю регулярно', 'Иногда, если тема интересная', 'Редко, но знаю что это важно', 'Нет, предпочитаю готовые решения'],
    points: [3, 2, 1, 0],
  },
];

export default function QuizBlock() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];
  const progress = Math.round(((current + 1) / questions.length) * 100);

  const selectAnswer = (idx: number) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const goNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const reset = () => {
    setCurrent(0);
    setAnswers(new Array(questions.length).fill(-1));
    setShowResult(false);
  };

  if (showResult) {
    let total = 0;
    answers.forEach((a, i) => { total += questions[i].points[a]; });
    const max = questions.length * 3;
    const pct = Math.round((total / max) * 100);

    let emoji: string;
    let label: string;
    let text: string;
    if (pct >= 80) {
      emoji = '\uD83C\uDF89'; label = 'Отлично! Ты создан для ML!';
      text = 'У тебя всё получится. У тебя есть склонность к аналитике, желание учиться и интерес к технологиям. Начинай с Python и математики — и ты на правильном пути!';
    } else if (pct >= 50) {
      emoji = '\uD83D\uDCAA'; label = 'Хороший старт!';
      text = 'У тебя есть задатки для ML инженера. Некоторые области стоит подтянуть — возможно, больше практики с данными или углубление в математику.';
    } else if (pct >= 25) {
      emoji = '\uD83D\uDCA1'; label = 'Есть потенциал!';
      text = 'ML может тебе подойти, но стоит начать с основ. Попробуй курсы по Python и базам данных.';
    } else {
      emoji = '\uD83D\uDD0D'; label = 'Стоит попробовать!';
      text = 'ML — это не только программирование. Начни с малого: решай задачи на Kaggle, изучай Python.';
    }

    return (
      <div className="bg-white border border-[var(--color-border)] rounded-2xl p-10 shadow-sm text-center max-w-xl mx-auto">
        <Progress type="circle" percent={pct} size={140} strokeColor="#2563eb" />
        <div className="text-5xl mt-5">{emoji}</div>
        <Title level={3} className="!mt-4 !mb-3">{label}</Title>
        <Paragraph className="!text-[var(--color-muted)] !mb-8 max-w-md mx-auto">{text}</Paragraph>
        <Button type="primary" size="large" onClick={reset}>Пройти заново</Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-sm max-w-xl mx-auto">
      <Progress percent={progress} strokeColor="#2563eb" className="!mb-8" showInfo={false} />

      <Paragraph className="!text-[var(--color-muted)] !text-sm !font-semibold !mb-2">
        Вопрос {current + 1} из {questions.length}
      </Paragraph>
      <Title level={4} className="!mb-6">{q.q}</Title>

      <div className="flex flex-col gap-2.5">
        {q.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => selectAnswer(idx)}
            className={`w-full text-left px-4 py-3.5 rounded-lg border-2 transition-all text-sm cursor-pointer ${
              answers[current] === idx
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] font-semibold'
                : 'border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-bg)]'
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={goPrev} disabled={current === 0}>Назад</Button>
        <Button type="primary" onClick={goNext} disabled={answers[current] === -1}>
          {current === questions.length - 1 ? 'Узнать результат' : 'Далее'}
        </Button>
      </div>
    </div>
  );
}
