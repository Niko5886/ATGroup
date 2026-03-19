import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function logoDesignPage() {
  return renderServiceDetailPage({
    icon: "sparkles",
    title: t("services.logoDesign.title"),
    description: t("services.logoDesign.description"),
    ctaTitle: t("services.logoDesign.ctaTitle"),
    ctaText: t("services.logoDesign.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.logoDesign.ctaLabel"),
    backHref: "/home#growth",
    backLabel: t("services.logoDesign.backLabel"),
    heroClass: "logo-design-hero",
    bodyClass: "logo-design-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.logoDesign.benefitsTitle"),
    benefits: t("services.logoDesign.benefits"),
    processTitle: t("services.logoDesign.processTitle"),
    steps: t("services.logoDesign.steps")
  });
}
