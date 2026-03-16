import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function processAutomationPage() {
  return renderServiceDetailPage({
    icon: "bolt",
    title: "Автоматизация на Процеси",
    description:
      "Изграждане на автоматизирани работни потоци (Workflows), които свързват вашите приложения и спестяват време.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#future",
    backLabel: "Назад към начало",
    heroClass: "process-automation-hero",
    bodyClass: "process-automation-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Намаляване на ръчните грешки",
      "Спестяване на време и ресурси",
      "Повишена ефикасност",
      "По-добра проследимост"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Картографиране",
        description: "Анализ на текущите бизнес процеси."
      },
      {
        title: "Дизайн",
        description: "Проектиране на автоматизиран поток."
      },
      {
        title: "Разработка",
        description: "Изграждане на автоматизацията (No-Code/Low-Code)."
      },
      {
        title: "Тест",
        description: "Валидиране и пускане в експлоатация."
      }
    ]
  });
}
