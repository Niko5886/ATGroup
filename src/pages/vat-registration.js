import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function vatRegistrationPage() {
  return renderServiceDetailPage({
    icon: "receipt",
    title: "ДДС Регистрация",
    description:
      "Професионално съдействие при задължителна или доброволна регистрация по ДДС. Ние се грижим за комуникацията с НАП и подготовката на необходимата документация.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home",
    backLabel: "Назад",
    heroClass: "vat-registration-hero",
    bodyClass: "vat-registration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Анализ на необходимостта от регистрация",
      "Подготовка и подаване на заявление",
      "Представителство пред органите по приходите",
      "Консултации относно ДДС ефекти"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Анализ на оборота",
        description: "Проверка на предпоставките за регистрация."
      },
      {
        title: "Подготовка",
        description: "Събиране и попълване на необходимите документи."
      },
      {
        title: "Подаване",
        description: "Внасяне на заявлението в НАП."
      },
      {
        title: "Получаване на акт",
        description: "Получаване на удостоверение за регистрация."
      }
    ]
  });
}