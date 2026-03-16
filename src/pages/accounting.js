import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function accountingPage() {
  return renderServiceDetailPage({
    icon: "book",
    title: "Счетоводство",
    description:
      "Пълно счетоводно обслужване, съобразено с националните и международните стандарти. Ние осигуряваме спокойствие и прозрачност за вашите финанси.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#basics",
    backLabel: "Назад",
    heroClass: "accounting-hero",
    bodyClass: "accounting-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Текущо осчетоводяване на документи",
      "Изготвяне на междинни отчети",
      "Годишно счетоводно приключване",
      "Данъчно планиране и консултации"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Прием на документи",
        description: "Обработка на първични счетоводни документи."
      },
      {
        title: "Осчетоводяване",
        description: "Въвеждане в счетоводен софтуер."
      },
      {
        title: "Отчети",
        description: "Генериране на справки за управлението."
      },
      {
        title: "Деклариране",
        description: "Подаване на ДДС и други декларации."
      }
    ]
  });
}