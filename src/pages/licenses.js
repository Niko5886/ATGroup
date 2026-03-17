import { renderServiceDetailPage } from "../components/service-detail-page.js";

export function licensesPage() {
  return renderServiceDetailPage({
    icon: "rocket",
    title: "Лицензи",
    description:
      "Подготовка на техническа документация, разрешителни и лицензи с професионално съдействие във всеки етап.",
    ctaTitle: "Готови ли сте да започнете?",
    ctaText: "Свържете се с нас за безплатна консултация и персонализирана оферта.",
    ctaHref: "/contacts",
    ctaLabel: "Заявете Услуга",
    backHref: "/home#basics",
    backLabel: "Назад",
    heroClass: "licenses-hero",
    bodyClass: "licenses-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: "Ключови Предимства",
    benefits: [
      "Подготовка и проверка на документация",
      "Съобразяване с регулаторните изисквания",
      "Проследяване на срокове и процедури",
      "Координация с компетентните институции"
    ],
    processTitle: "Нашият Процес",
    steps: [
      {
        title: "Анализ",
        description: "Преглеждаме вида дейност и приложимия лицензен режим."
      },
      {
        title: "Документи",
        description: "Изготвяме и структурираме необходимия пакет документи."
      },
      {
        title: "Подаване",
        description: "Подаваме документацията към съответните органи."
      },
      {
        title: "Проследяване",
        description: "Следим статуса до финално издаване на разрешението."
      }
    ]
  });
}
