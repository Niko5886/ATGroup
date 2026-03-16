import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function companyRegistrationPage() {
  return renderServiceDetailPage({
    icon: "building",
    title: "Регистрация на фирми",
    description:
      "Ние предоставяме пълно съдействие при регистрацията на всички видове търговски дружества в България. Нашият екип от експерти ще ви преведе през целия процес, гарантирайки спазването на всички законови изисквания.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#basics",
    backLabel: "Назад",
    heroClass: "company-registration-hero",
    bodyClass: "company-registration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Експертна консултация за избор на правна форма",
      "Подготовка на целия пакет документи",
      "Представителство пред Търговския регистър",
      "Бърз и ефективен процес"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Консултация",
        description: "Обсъждаме вашите бизнес цели и избираме подходящата правна форма."
      },
      {
        title: "Подготовка на документи",
        description: "Нашите юристи изготвят всички необходими документи."
      },
      {
        title: "Подписване и нотариус",
        description: "Организираме посещение при нотариус и откриване на набирателна сметка."
      },
      {
        title: "Вписване",
        description: "Подаваме документите в Търговския регистър."
      }
    ]
  });
}
