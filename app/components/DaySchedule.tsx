'use client';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const schedule = [
  { time: '09:00', emoji: '\u2615', title: 'Утро и планирование', text: 'Кофе, проверка метрик вчерашних экспериментов, stand-up со командой: что сделали, что планируем, какие блокеры.' },
  { time: '10:00', emoji: '\uD83D\uDCBE', title: 'Подготовка данных', text: 'Пишу скрипты для обработки нового датасета. Чистка, нормализация, feature engineering — без качественных данных не бывает качественных моделей.' },
  { time: '12:00', emoji: '\uD83D\uDCA1', title: 'Проектирование модели', text: 'Думаю над архитектурой новой модели. Читаю свежие статьи, сравниваю подходы, рисую схемы на доске.' },
  { time: '13:00', emoji: '\uD83C\uDF5D', title: 'Обед', text: 'Перерыв. Общаюсь с коллегами, иногда обсуждаю идеи за обедом — лучшие мысли приходят не за рабочим столом.' },
  { time: '14:00', emoji: '\u2699\uFE0F', title: 'Обучение и эксперименты', text: 'Запускаю обучение модели, слежу за логами, настраиваю гиперпараметры. Пока модель учится — пишу код для деплоя предыдущей.' },
  { time: '17:00', emoji: '\uD83D\uDCCA', title: 'Результаты и код-ревью', text: 'Анализирую результаты экспериментов, оформляю отчёт. Проверяю пул-реквесты коллег, даю обратную связь.' },
  { time: '18:30', emoji: '\uD83D\uDCD6', title: 'Саморазвитие', text: 'Читаю статью, прохожу курс или просто экспериментирую с новой библиотекой. В ML важно не стоять на месте.' },
];

export default function DaySchedule() {
  return (
    <div className="max-w-2xl mx-auto">
      {schedule.map((item) => (
        <div key={item.time} className="grid grid-cols-[70px_1fr] gap-5 mb-5 items-start">
          <div className="text-sm font-bold text-[var(--color-accent)] pt-5 text-right">
            {item.time}
          </div>
          <div className="bg-white border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-accent)] rounded-xl p-5 hover:shadow-md hover:translate-x-1 transition-all">
            <Title level={5} className="!mb-2">{item.emoji} {item.title}</Title>
            <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed !mb-0">
              {item.text}
            </Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
}
