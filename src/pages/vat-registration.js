import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function vatRegistrationPage() {
  return renderServiceDetailPage({
    icon: "receipt",
    title: t("services.vatRegistration.title"),
    description: t("services.vatRegistration.description"),
    ctaTitle: t("services.vatRegistration.ctaTitle"),
    ctaText: t("services.vatRegistration.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.vatRegistration.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.vatRegistration.backLabel"),
    heroClass: "vat-registration-hero",
    bodyClass: "vat-registration-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.vatRegistration.benefitsTitle"),
    benefits: t("services.vatRegistration.benefits"),
    processTitle: t("services.vatRegistration.processTitle"),
    steps: t("services.vatRegistration.steps")
  });
}