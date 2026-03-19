import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function emailSecurityPage() {
  return renderServiceDetailPage({
    icon: "shield",
    title: t("services.emailSecurity.title"),
    description: t("services.emailSecurity.description"),
    ctaTitle: t("services.emailSecurity.ctaTitle"),
    ctaText: t("services.emailSecurity.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.emailSecurity.ctaLabel"),
    backHref: "/home#future",
    backLabel: t("services.emailSecurity.backLabel"),
    heroClass: "email-security-hero",
    bodyClass: "email-security-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.emailSecurity.benefitsTitle"),
    benefits: t("services.emailSecurity.benefits"),
    processTitle: t("services.emailSecurity.processTitle"),
    steps: t("services.emailSecurity.steps")
  });
}
