import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function aiIntegrationPage() {
  return renderServiceDetailPage({
    icon: "brain",
    title: t("services.aiIntegration.title"),
    description: t("services.aiIntegration.description"),
    ctaTitle: t("services.aiIntegration.ctaTitle"),
    ctaText: t("services.aiIntegration.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.aiIntegration.ctaLabel"),
    backHref: "/home#future",
    backLabel: t("services.aiIntegration.backLabel"),
    heroClass: "ai-integration-hero",
    bodyClass: "ai-integration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.aiIntegration.benefitsTitle"),
    benefits: t("services.aiIntegration.benefits"),
    processTitle: t("services.aiIntegration.processTitle"),
    steps: t("services.aiIntegration.steps")
  });
}
