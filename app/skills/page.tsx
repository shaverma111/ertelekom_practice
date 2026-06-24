import SkillTags from '../components/SkillTags';

export const metadata = {
  title: 'Скиллы ML Инженера | ЭРТХ',
};

export default function SkillsPage() {
  return (
    <section className="py-20 px-5 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Hard &amp; Soft <span className="text-[var(--color-accent)]">скиллы</span>
        </h2>
        <p className="text-center text-[var(--color-muted)] text-lg mb-4">
          Что нужно знать и уметть ML инженеру
        </p>
        <SkillTags />
      </div>
    </section>
  );
}
