'use client';

import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const cards = [
  { icon: '\uD83D\uDE80', title: 'Автоматизация процессов', text: 'ML позволяет автоматизировать рутинные бизнес-процессы: обработка заявок, маршрутизация, прогнозирование нагрузки — всё это экономит часы работы людей.' },
  { icon: '\uD83D\uDCC8', title: 'Прогнозирование', text: 'Модели предсказывают спрос, выручку, риски и инциденты. Компания принимает решения на основе данных, а не интуиции.' },
  { icon: '\uD83D\uDD77\uFE0F', title: 'Безопасность', text: 'ML-модели выявляют аномалии в системах, обнаруживают вторжения, фильтруют спам и мошенничество в реальном времени.' },
  { icon: '\uD83E\uDD1D', title: 'Конкурентное преимущество', text: 'Компании, внедряющие ML, работают быстрее, точнее и дешевле. ML инженер — ключевой сотрудник в создании этого преимущества.' },
];

export default function ErthPage() {
  return (
    <section className="py-20 px-5 pt-24 bg-[var(--color-accent)]">
      <div className="max-w-6xl mx-auto">
        <Title level={2} className="text-center !mb-4 !text-white">
          Почему роль важна <span className="!text-white">для ЭРТХ</span>
        </Title>
        <Paragraph className="text-center !text-white/70 !text-lg !mb-12">
          ML инженер — ключевая роль в современной telecom-компании
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="!bg-white/10 !border-white/20 hover:!bg-white/20"
              hoverable
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <Title level={4} className="!text-white !mb-2">{card.title}</Title>
              <Paragraph className="!text-white/80 !text-sm !leading-relaxed !mb-0">{card.text}</Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
