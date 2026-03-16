import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function brandIdentityPage() {
  return renderServiceDetailPage({
    icon: "palette",
    title: "Създаване на Бранд Идентичност",
    description:
      "Изграждаме цялостна визуална и комуникационна стратегия за вашия бранд. Създаваме уникален облик, който ви отличава от конкуренцията.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#growth",
    backLabel: "Назад",
    heroClass: "brand-identity-hero",
    bodyClass: "brand-identity-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Уникален визуален език",
      "Повишена разпознаваемост на марката",
      "Консистентно присъствие във всички канали",
      "Brand Book с насоки за използване"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Откриване",
        description: "Анализ на пазара и целевата аудитория."
      },
      {
        title: "Стратегия",
        description: "Дефиниране на ценности и послания."
      },
      {
        title: "Дизайн",
        description: "Разработване на визуални елементи."
      },
      {
        title: "Внедряване",
        description: "Приложение на идентичността в реална среда."
      }
    ]
  });
}
