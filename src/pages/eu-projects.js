import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function euProjectsPage() {
  return renderServiceDetailPage({
    icon: "briefcase",
    title: "Консултации по Европроекти",
    description:
      "Експертна помощ при кандидатстване и управление на проекти, финансирани от Европейския съюз. Превърнете идеите си в реалност с европейско финансиране.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#basics",
    backLabel: "Назад",
    heroClass: "eu-projects-hero",
    bodyClass: "eu-projects-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Идентифициране на подходящи програми",
      "Разписване на проектно предложение",
      "Управление и отчитане на проекта",
      "Минимизиране на риска от финансови корекции"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Проучване",
        description: "Анализ на възможностите за финансиране."
      },
      {
        title: "Кандидатстване",
        description: "Подготовка и подаване на проектната документация."
      },
      {
        title: "Изпълнение",
        description: "Мониторинг и управление на проектните дейности."
      },
      {
        title: "Отчитане",
        description: "Финансово и техническо отчитане пред управляващия орган."
      }
    ]
  });
}
