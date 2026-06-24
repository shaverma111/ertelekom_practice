'use client';

import { Tag, Typography } from 'antd';

const { Title } = Typography;

const hardSkills = [
  'Python', 'PyTorch / TensorFlow', 'NumPy / Pandas / Scikit-learn',
  'Математика: линейная алгебра, статистика, теория вероятностей',
  'SQL и работа с базами данных', 'Git, Docker, CI/CD',
  'MLOps и деплой моделей', 'Анализ данных и визуализация',
  'NLP / Computer Vision / Рекомендательные системы',
];

const softSkills = [
  'Аналитическое мышление', 'Умение объяснять сложное простым языком',
  'Работа в команде', 'Любопытство и стремление к экспериментам',
  'Внимание к деталям', 'Управление временем и приоритетами',
  'Самообучение', 'Критическое мышление',
];

export default function SkillTags() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div>
        <Title level={3} className="!text-[var(--color-accent)] !border-b-3 !border-[var(--color-accent)] !pb-3 !mb-6">
          Hard Skills
        </Title>
        <div className="flex flex-col gap-2.5">
          {hardSkills.map((skill) => (
            <Tag key={skill} color="blue" className="!text-sm !py-1.5 !px-4 !rounded-full cursor-default w-fit">
              {skill}
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <Title level={3} className="!text-green-600 !border-b-3 !border-green-600 !pb-3 !mb-6">
          Soft Skills
        </Title>
        <div className="flex flex-col gap-2.5">
          {softSkills.map((skill) => (
            <Tag key={skill} color="green" className="!text-sm !py-1.5 !px-4 !rounded-full cursor-default w-fit">
              {skill}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
