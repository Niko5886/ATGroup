import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function logoDesignPage() {
  return renderServiceDetailPage({
    icon: "sparkles",
    title: "Лого Дизайн",
    description:
      "Професионален дизайн на лого, което капсулира същността на вашия бизнес в един запомнящ се символ.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#growth",
    backLabel: "Назад към начало",
    heroClass: "logo-design-hero",
    bodyClass: "logo-design-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Векторни файлове с високо качество",
      "Различни варианти за всички медии",
      "Пълни авторски права",
      "Модерен и вечен дизайн"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Бриф",
        description: "Изясняване на изискванията и стила."
      },
      {
        title: "Концепции",
        description: "Разработка на начални скици и идеи."
      },
      {
        title: "Рафиниране",
        description: "Усъвършенстване на избраната концепция."
      },
      {
        title: "Предаване",
        description: "Подготовка на финалните файлове."
      }
    ]
  });
}
