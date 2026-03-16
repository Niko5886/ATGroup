import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function emailSecurityPage() {
  return renderServiceDetailPage({
    icon: "shield",
    title: "Сигурност на Имейли",
    description:
      "Защита на вашата бизнес комуникация от фишинг, спам и зловреден софтуер чрез модерни решения за сигурност.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#future",
    backLabel: "Назад",
    heroClass: "email-security-hero",
    bodyClass: "email-security-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Блокиране на спам и вируси",
      "Защита от BEC (Business Email Compromise)",
      "Криптиране на чувствителни данни",
      "24/7 мониторинг"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Аудит",
        description: "Проверка на текущите настройки (SPF, DKIM, DMARC)."
      },
      {
        title: "Внедряване",
        description: "Инсталиране на филтриращи решения."
      },
      {
        title: "Конфигурация",
        description: "Настройка на правила за сигурност."
      },
      {
        title: "Мониторинг",
        description: "Постоянно следене на заплахите."
      }
    ]
  });
}
