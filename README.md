# ML Инженер — Профессия будущего | ЭРТХ

Интерактивный лендинг о профессии Machine Learning Engineer. Рассказывает студентам, кто такой ML-инженер, какие навыки нужны и как начать карьеру.

## Стек

| Технология | Версия | Назначение |
|---|---|---|
| Next.js | 16 | App Router, SSR, статическая генерация |
| React | 19 | UI-компоненты |
| TypeScript | 6 | Строгая типизация |
| Ant Design | 6 | UI-библиотека (Button, Card, Menu, Timeline, Typography) |
| Tailwind CSS | 4 | Утилитарные стили, отступы, типографика |

## Структура проекта

```
app/
├── layout.tsx              # Root layout (Providers, Header, Footer)
├── page.tsx                # Главная страница
├── globals.css             # Глобальные стили + CSS-переменные
├── about/page.tsx          # О профессии (задачи, день из жизни)
├── skills/page.tsx         # Hard & Soft скиллы
├── career/page.tsx         # Пошаговый план карьеры
├── erth/page.tsx           # Почему роль важна для ЭРТХ
├── quiz/page.tsx           # Тест "Подходит ли тебе ML?"
└── components/
    ├── Providers.tsx       # Ant Design ConfigProvider (locale ru_RU)
    ├── Header.tsx          # Навигация (Menu + мобильный Drawer)
    ├── Footer.tsx          # Подвал
    ├── HeroSection.tsx     # Hero-баннер на главной
    ├── AboutCard.tsx       # Карточка "О профессии"
    ├── TaskCard.tsx        # Карточка задачи (номер + заголовок)
    ├── ContentCard.tsx     # Универсальная карточка контента
    ├── PageSection.tsx     # Обёртка секции страницы
    ├── CopyButton.tsx      # Кнопка копирования в буфер
    ├── SkillTags.tsx       # Теги скиллов
    ├── CareerTimeline.tsx  # Таймлайн карьерного пути
    ├── DaySchedule.tsx     # Распорядок дня ML-инженера
    └── QuizBlock.tsx       # Блок теста с прогрессом
```

## Страницы

| Путь | Описание |
|---|---|
| `/` | Главная — Hero, превью о профессии, задачи, CTA |
| `/about` | Подробно о профессии, 7 задач, день из жизни |
| `/skills` | Hard Skills и Soft Skills с тегами |
| `/career` | 6 шагов карьерного пути (таймлайн) |
| `/erth` | Важность роли для ЭРТХ (4 карточки) |
| `/quiz` | Тест из 8 вопросов с результатом |

## Переиспользуемые UI-компоненты

### `<PageSection>`
Обёртка для секций страницы с заголовком, подзаголовком и подсветкой акцента.

```tsx
<PageSection
  title="Заголовок страницы"
  subtitle="Описание"
  accent="слово"        // подсветит синим
  paddingTop="pt-24"    // отступ от фиксированного хедера
  className="bg-white"  // доп. классы
>
  {children}
</PageSection>
```

### `<ContentCard>`
Универсальная карточка с иконкой, номером и анимацией ховера.

```tsx
<ContentCard
  title="Заголовок"
  icon="&#128200;"       // эмодзи
  number={1}            // номер "01"
  highlight             // акцентный фон на всю ширину
  hoverable             // анимация (default: true)
>
  Описание карточки
</ContentCard>
```

### `<CopyButton>`
Кнопка копирования текста в буфер обмена с feedback.

```tsx
<CopyButton text="Текст для копирования" label="Копировать" />
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Разработка
npm run dev

# Сборка
npm run build

# Запуск продакшена
npm start

# Линтинг
npm run lint
```

## Деплой на Vercel

Проект полностью готов к деплою. Vercel подхватит репозиторий автоматически.

```bash
git push origin main
```

Все страницы генерируются статически (SSG) — максимальная скорость загрузки.

## Конфигурация

- `next.config.mjs` — `output: 'standalone'`, транспиляция antd
- `tsconfig.json` — strict mode, path alias `@/*`
- `postcss.config.mjs` — Tailwind CSS v4
- `eslint.config.mjs` — eslint-config-next/core-web-vitals
