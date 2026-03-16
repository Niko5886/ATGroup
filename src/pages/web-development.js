import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function webDevelopmentPage() {
  return renderServiceDetailPage({
    icon: "code",
    title: "Модерна Уеб Разработка",
    description:
      "Изработка на бързи, сигурни и отзивчиви уебсайтове, използващи най-новите технологии (React, Next.js).",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#growth",
    backLabel: "Назад към начало",
    heroClass: "web-development-hero",
    bodyClass: "web-development-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Висока производителност и скорост",
      "SEO оптимизирана структура",
      "Мобилна съвместимост",
      "Лесно управление на съдържанието"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Планиране",
        description: "Структура на сайта и потребителски пътеки."
      },
      {
        title: "Дизайн",
        description: "UI/UX прототипиране."
      },
      {
        title: "Разработка",
        description: "Кодиране на функционалностите."
      },
      {
        title: "Пускане",
        description: "Тестване и качване на сървър."
      }
    ]
  });
}
