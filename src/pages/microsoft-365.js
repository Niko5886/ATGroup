import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function microsoft365Page() {
  return renderServiceDetailPage({
    icon: "cloud",
    title: "Microsoft 365 Настройка",
    description:
      "Професионална миграция, настройка и управление на Microsoft 365 среда за повишаване на продуктивността и сигурността.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#future",
    backLabel: "Назад",
    heroClass: "microsoft-365-hero",
    bodyClass: "microsoft-365-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Сигурна облачна среда",
      "Ефективна колаборация с Teams",
      "Защита на корпоративните данни",
      "Лицензионна оптимизация"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Оценка",
        description: "Анализ на текущата инфраструктура."
      },
      {
        title: "Миграция",
        description: "Прехвърляне на поща и данни."
      },
      {
        title: "Настройка",
        description: "Конфигуриране на политики за сигурност."
      },
      {
        title: "Обучение",
        description: "Въвеждане на потребителите в новата среда."
      }
    ]
  });
}
