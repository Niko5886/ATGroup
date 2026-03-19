import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function processAutomationPage() {
  return renderServiceDetailPage({
    icon: "bolt",
    title: t("services.processAutomation.title"),
    description: t("services.processAutomation.description"),
    ctaTitle: t("services.processAutomation.ctaTitle"),
    ctaText: t("services.processAutomation.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.processAutomation.ctaLabel"),
    backHref: "/home#future",
    backLabel: t("services.processAutomation.backLabel"),
    heroClass: "process-automation-hero",
    bodyClass: "process-automation-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.processAutomation.benefitsTitle"),
    benefits: t("services.processAutomation.benefits"),
    processTitle: t("services.processAutomation.processTitle"),
    steps: t("services.processAutomation.steps")
  });
}
