import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function microsoft365Page() {
  return renderServiceDetailPage({
    icon: "cloud",
    title: t("services.microsoft365.title"),
    description: t("services.microsoft365.description"),
    ctaTitle: t("services.microsoft365.ctaTitle"),
    ctaText: t("services.microsoft365.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.microsoft365.ctaLabel"),
    backHref: "/home#future",
    backLabel: t("services.microsoft365.backLabel"),
    heroClass: "microsoft-365-hero",
    bodyClass: "microsoft-365-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.microsoft365.benefitsTitle"),
    benefits: t("services.microsoft365.benefits"),
    processTitle: t("services.microsoft365.processTitle"),
    steps: t("services.microsoft365.steps")
  });
}
