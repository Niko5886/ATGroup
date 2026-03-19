import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function webDevelopmentPage() {
  return renderServiceDetailPage({
    icon: "code",
    title: t("services.webDevelopment.title"),
    description: t("services.webDevelopment.description"),
    ctaTitle: t("services.webDevelopment.ctaTitle"),
    ctaText: t("services.webDevelopment.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.webDevelopment.ctaLabel"),
    backHref: "/home#growth",
    backLabel: t("services.webDevelopment.backLabel"),
    heroClass: "web-development-hero",
    bodyClass: "web-development-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.webDevelopment.benefitsTitle"),
    benefits: t("services.webDevelopment.benefits"),
    processTitle: t("services.webDevelopment.processTitle"),
    steps: t("services.webDevelopment.steps")
  });
}
