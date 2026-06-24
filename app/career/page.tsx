import CareerTimeline from '../components/CareerTimeline';

export const metadata = {
  title: 'Карьера ML Инженера | ЭРТХ',
};

export default function CareerPage() {
  return (
    <section className="py-20 px-5 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Как начать <span className="text-[var(--color-accent)]">карьеру студенту</span>
        </h2>
        <p className="text-center text-[var(--color-muted)] text-lg mb-12">
          Пошаговый план для тех, кто хочет стать ML инженером
        </p>
        <CareerTimeline />
      </div>
    </section>
  );
}
