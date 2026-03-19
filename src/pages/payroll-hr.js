import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function payrollHrPage() {
  return renderServiceDetailPage({
    icon: "people",
    title: t("services.payrollHr.title"),
    description: t("services.payrollHr.description"),
    ctaTitle: t("services.payrollHr.ctaTitle"),
    ctaText: t("services.payrollHr.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.payrollHr.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.payrollHr.backLabel"),
    heroClass: "payroll-hr-hero",
    bodyClass: "payroll-hr-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.payrollHr.benefitsTitle"),
    benefits: t("services.payrollHr.benefits"),
    processTitle: t("services.payrollHr.processTitle"),
    steps: t("services.payrollHr.steps")
  });
}