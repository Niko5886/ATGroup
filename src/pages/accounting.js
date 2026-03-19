import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function accountingPage() {
  return renderServiceDetailPage({
    icon: "book",
    title: t("services.accounting.title"),
    description: t("services.accounting.description"),
    ctaTitle: t("services.accounting.ctaTitle"),
    ctaText: t("services.accounting.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.accounting.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.accounting.backLabel"),
    heroClass: "accounting-hero",
    bodyClass: "accounting-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.accounting.benefitsTitle"),
    benefits: t("services.accounting.benefits"),
    processTitle: t("services.accounting.processTitle"),
    steps: t("services.accounting.steps")
  });
}