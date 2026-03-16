import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function aiIntegrationPage() {
  return renderServiceDetailPage({
    icon: "brain",
    title: "Интеграция на AI",
    description:
      "Консултации и внедряване на решения с изкуствен интелект за оптимизиране на бизнес процесите и вземане на решения.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#future",
    backLabel: "Назад",
    heroClass: "ai-integration-hero",
    bodyClass: "ai-integration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Автоматизация на рутинни задачи",
      "Подобряване на обслужването на клиенти",
      "Анализ на големи масиви данни",
      "Конкурентно предимство"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Идентификация",
        description: "Намиране на подходящи процеси за AI."
      },
      {
        title: "Избор",
        description: "Подбор на правилните AI инструменти."
      },
      {
        title: "Интеграция",
        description: "Внедряване в съществуващите системи."
      },
      {
        title: "Обучение",
        description: "Адаптиране на екипа към новите технологии."
      }
    ]
  });
}
