import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function companyRegistrationPage() {
  return renderServiceDetailPage({
    icon: "building",
    title: t("services.companyRegistration.title"),
    description: t("services.companyRegistration.description"),
    ctaTitle: t("services.companyRegistration.ctaTitle"),
    ctaText: t("services.companyRegistration.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.companyRegistration.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.companyRegistration.backLabel"),
    heroClass: "company-registration-hero",
    bodyClass: "company-registration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.companyRegistration.benefitsTitle"),
    benefits: t("services.companyRegistration.benefits"),
    processTitle: t("services.companyRegistration.processTitle"),
    steps: t("services.companyRegistration.steps")
  });
}
