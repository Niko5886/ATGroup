import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function licensesPage() {
  return renderServiceDetailPage({
    icon: "rocket",
    title: t("services.licenses.title"),
    description: t("services.licenses.description"),
    ctaTitle: t("services.licenses.ctaTitle"),
    ctaText: t("services.licenses.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.licenses.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.licenses.backLabel"),
    heroClass: "licenses-hero",
    bodyClass: "licenses-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.licenses.benefitsTitle"),
    benefits: t("services.licenses.benefits"),
    processTitle: t("services.licenses.processTitle"),
    steps: t("services.licenses.steps")
  });
}
