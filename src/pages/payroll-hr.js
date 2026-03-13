import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function payrollHrPage() {
  return renderServiceDetailPage({
    icon: "people",
    title: "ТРЗ и Личен състав",
    description:
      "Комплексно обслужване на работните заплати и персонала, гарантиращо точност и конфиденциалност. Ние поемаме грижата за вашите служители.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home",
    backLabel: "Назад",
    heroClass: "payroll-hr-hero",
    bodyClass: "payroll-hr-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Точно изчисляване на заплати и осигуровки",
      "Изготвяне на трудови договори и длъжностни характеристики",
      "Подаване на декларации към НАП",
      "Консултации по трудово-правни въпроси"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Назначаване",
        description: "Оформяне на документи при постъпване на служител."
      },
      {
        title: "Месечна обработка",
        description: "Изготвяне на ведомости и фишове."
      },
      {
        title: "Плащания",
        description: "Подготовка на платежни нареждания за данъци и осигуровки."
      },
      {
        title: "Отчетност",
        description: "Подаване на информация към държавните институции."
      }
    ]
  });
}