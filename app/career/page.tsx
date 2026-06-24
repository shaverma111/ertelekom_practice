import PageSection from '../components/PageSection';
import CareerTimeline from '../components/CareerTimeline';

export const metadata = {
  title: 'Карьера ML Инженера | ЭРТХ',
};

export default function CareerPage() {
  return (
    <PageSection
      title="Как начать карьеру студенту"
      subtitle="Пошаговый план для тех, кто хочет стать ML инженером"
      accent="карьеру студенту"
    >
      <CareerTimeline />
    </PageSection>
  );
}
