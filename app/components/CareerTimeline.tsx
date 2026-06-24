'use client';

import { Timeline, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const steps = [
  { step: 'Шаг 1', title: 'Изучи основы Python', text: 'Начни с синтаксиса, ООП, работы с библиотеками. Python — основной язык ML. Проходи курсы на Stepik, Coursera или по книгам.' },
  { step: 'Шаг 2', title: 'Математика для ML', text: 'Линейная алгебра (матрицы, вектора), статистика, теория вероятностей, оптимизация. Без этого модели будут «чёрным ящиком».' },
  { step: 'Шаг 3', title: 'Машинное обучение — практика', text: 'Проходи курс Andrew Ng, решай задачи на Kaggle. Начни с линейной регрессии, деревьев решений, потом переходи к нейросетям.' },
  { step: 'Шаг 4', title: 'Портфолио и проекты', text: 'Сделай 3-5 проектов: классификация изображений, предсказание, NLP-анализ. Загрузи на GitHub — это твоё резюме.' },
  { step: 'Шаг 5', title: 'Стажировка', text: 'Подавайся на стажировки в компании (включая ЭРТХ!). Участвуй в хакатонах и ML-соревнованиях. Первый опыт — бесценен.' },
  { step: 'Шаг 6', title: 'Специализация', text: 'Выбери нишу: CV, NLP, рекомендательные системы, MLOps. Углубляйся, читай статьи, реализовывай.' },
];

export default function CareerTimeline() {
  return (
    <div className="max-w-2xl mx-auto">
      <Timeline
        mode="start"
        items={steps.map((s) => ({
          color: '#2563eb',
          title: <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-light)] px-3 py-1 rounded-full">{s.step}</span>,
          content: (
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-5 hover:shadow-md transition-shadow">
              <Title level={4} className="!mb-2">{s.title}</Title>
              <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed !mb-0">{s.text}</Paragraph>
            </div>
          ),
        }))}
      />
    </div>
  );
}
