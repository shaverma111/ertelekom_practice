import Link from 'next/link';
import HeroSection from './components/HeroSection';
import ContentCard from './components/ContentCard';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Preview: About */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Кто это <span className="text-[var(--color-accent)]">простыми словами</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="md:col-span-3">
              <ContentCard icon="&#129302;" title="ML Инженер" highlight>
                Это программист, который создаёт системы, способные учиться на данных. Вместо того чтобы писать правила вручную, он даёт компьютеру примеры — и компьютер сам находит закономерности.
              </ContentCard>
            </div>
            <ContentCard icon="&#128200;" title="Предсказания">
              Прогнозирует спрос, выявляет мошенничество, определяет болезни по снимкам.
            </ContentCard>
            <ContentCard icon="&#128161;" title="Автоматизация">
              Заменяет рутинные решения человека на быстрые алгоритмы.
            </ContentCard>
            <ContentCard icon="&#128190;" title="Данные">
              Работает с огромными массивами информации и превращает их в ценность.
            </ContentCard>
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm hover:bg-[var(--color-accent-dark)] transition-colors">
              Подробнее
            </Link>
          </div>
        </div>
      </section>

      {/* Preview: Tasks */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Рабочие <span className="text-[var(--color-accent)]">задачи</span>
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-12">
            Чем конкретно занимается ML инженер день за днём
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContentCard number={1} title="Сбор и подготовка данных">
              Находит нужные данные, чистит их от мусора, заполняет пропуски и превращает в формат, понятный модели.
            </ContentCard>
            <ContentCard number={2} title="Проектирование моделей">
              Выбирает архитектуру нейросети или алгоритма под конкретную задачу.
            </ContentCard>
            <ContentCard number={3} title="Обучение моделей">
              Запускает процесс обучения, настраивает гиперпараметры, следит за метриками.
            </ContentCard>
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center justify-center h-10 px-5 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold text-sm hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-bg)] transition-colors">
              Все 7 задач
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-5 bg-[var(--color-accent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Хочешь узнать больше?</h2>
          <p className="text-white/80 text-lg mb-8">
            Изучи профессию ML инженера от и до — от основ до стажировки в ЭРТХ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-white text-[var(--color-accent)] font-semibold text-sm hover:bg-gray-100 transition-colors">
              О профессии
            </Link>
            <Link href="/skills" className="inline-flex items-center justify-center h-10 px-5 rounded-lg border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              Скиллы
            </Link>
            <Link href="/quiz" className="inline-flex items-center justify-center h-10 px-5 rounded-lg border border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              Пройти тест
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
