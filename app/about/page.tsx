'use client';

import { Typography } from 'antd';
import AboutCard from '../components/AboutCard';
import DaySchedule from '../components/DaySchedule';

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <section className="py-20 px-5 pt-24">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-center !mb-4">
          Кто это <span className="text-[var(--color-accent)]">простыми словами</span>
        </Title>
        <Paragraph className="text-center !text-[var(--color-muted)] !text-lg !mb-12 max-w-2xl mx-auto">
          ML Инженер — программист, который создаёт системы, способные учиться на данных
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <AboutCard main icon="&#129302;" title="ML Инженер">
              Это программист, который создаёт системы, способные учиться на данных. Вместо того чтобы писать правила вручную, он даёт компьютеру примеры — и компьютер сам находит закономерности. ML инженер работает на стыке математики, программирования и данных, создавая модели, которые предсказывают, классифицируют и генерируют.
            </AboutCard>
          </div>
          <AboutCard icon="&#128200;" title="Предсказания">
            Прогнозирует спрос, выявляет мошенничество, определяет болезни по снимкам — всё это модели машинного обучения.
          </AboutCard>
          <AboutCard icon="&#128161;" title="Автоматизация">
            Заменяет рутинные решения человека на быстрые алгоритмы: рекомендации, чат-боты, распознавание речи и картинок.
          </AboutCard>
          <AboutCard icon="&#128190;" title="Данные">
            Работает с огромными массивами информации: собирает, чистит, структурирует данные и превращает их в ценность.
          </AboutCard>
        </div>

        {/* Full tasks list */}
        <Title level={2} className="text-center !mt-20 !mb-4">
          Рабочие <span className="text-[var(--color-accent)]">задачи</span>
        </Title>
        <Paragraph className="text-center !text-[var(--color-muted)] !text-lg !mb-12">
          Чем конкретно занимается ML инженер день за днём
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: 1, t: 'Сбор и подготовка данных', d: 'Находит нужные данные, чистит их от мусора, заполняет пропуски и превращает в формат, понятный модели.' },
            { n: 2, t: 'Проектирование моделей', d: 'Выбирает архитектуру нейросети или алгоритма под конкретную задачу: классификация, регрессия, генерация.' },
            { n: 3, t: 'Обучение моделей', d: 'Запускает процесс обучения, настраивает гиперпараметры, следит за метриками и борется с переобучением.' },
            { n: 4, t: 'Тестирование и валидация', d: 'Проверяет модель на реальных данных, сравнивает результаты с эталоном, убеждается в надёжности.' },
            { n: 5, t: 'Деплой в продакшен', d: 'Разворачивает модель в реальном продукте: API-сервис, мобильное приложение или бэкенд системы.' },
            { n: 6, t: 'Мониторинг и улучшение', d: 'Следит за качеством модели в бою, собирает фидбек и переобучает систему на новых данных.' },
            { n: 7, t: 'Документация и коммуникация', d: 'Описывает эксперименты, объясняет результаты бизнесу и работает в команде с аналитиками и разработчиками.' },
          ].map((item) => (
            <div key={item.n} className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-lg hover:border-[var(--color-accent-light)] transition-all">
              <div className="text-4xl font-extrabold text-[var(--color-accent-light)] mb-3 leading-none">{String(item.n).padStart(2, '0')}</div>
              <Title level={4} className="!mb-2">{item.t}</Title>
              <Paragraph className="!text-[var(--color-muted)] !text-sm !leading-relaxed">{item.d}</Paragraph>
            </div>
          ))}
        </div>

        {/* Day in Life */}
        <Title level={2} className="text-center !mt-20 !mb-4">
          Один день <span className="text-[var(--color-accent)]">из жизни</span>
        </Title>
        <Paragraph className="text-center !text-[var(--color-muted)] !text-lg !mb-12">
          Как выглядит обычный рабочий день ML инженера
        </Paragraph>
        <DaySchedule />
      </div>
    </section>
  );
}
