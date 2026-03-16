import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function digitalMarketingPage() {
  return renderServiceDetailPage({
    icon: "chartUp",
    title: "Дигитален Маркетинг",
    description:
      "Комплексни стратегии за дигитален маркетинг, включващи SEO, социални мрежи и платена реклама за генериране на резултати.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#growth",
    backLabel: "Назад",
    heroClass: "digital-marketing-hero",
    bodyClass: "digital-marketing-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Увеличен трафик към сайта",
      "По-висока конверсия",
      "Измерими резултати и ROI",
      "Таргетирано достигане до клиенти"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Аудит",
        description: "Анализ на текущото присъствие."
      },
      {
        title: "Стратегия",
        description: "Избор на канали и тактики."
      },
      {
        title: "Изпълнение",
        description: "Стартиране на кампании и създаване на съдържание."
      },
      {
        title: "Оптимизация",
        description: "Мониторинг и подобряване на резултатите."
      }
    ]
  });
}
