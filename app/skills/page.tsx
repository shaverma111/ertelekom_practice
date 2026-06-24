import PageSection from '../components/PageSection';
import SkillTags from '../components/SkillTags';

export const metadata = {
  title: 'Скиллы ML Инженера | ЭРТХ',
};

export default function SkillsPage() {
  return (
    <PageSection
      title="Hard & Soft скиллы"
      subtitle="Что нужно знать и уметть ML инженеру"
    >
      <SkillTags />
    </PageSection>
  );
}
