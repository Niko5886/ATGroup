import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function digitalMarketingPage() {
  return renderServiceDetailPage({
    icon: "chartUp",
    title: t("services.digitalMarketing.title"),
    description: t("services.digitalMarketing.description"),
    ctaTitle: t("services.digitalMarketing.ctaTitle"),
    ctaText: t("services.digitalMarketing.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.digitalMarketing.ctaLabel"),
    backHref: "/home#growth",
    backLabel: t("services.digitalMarketing.backLabel"),
    heroClass: "digital-marketing-hero",
    bodyClass: "digital-marketing-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.digitalMarketing.benefitsTitle"),
    benefits: t("services.digitalMarketing.benefits"),
    processTitle: t("services.digitalMarketing.processTitle"),
    steps: t("services.digitalMarketing.steps")
  });
}
