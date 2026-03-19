import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function brandIdentityPage() {
  return renderServiceDetailPage({
    icon: "palette",
    title: t("services.brandIdentity.title"),
    description: t("services.brandIdentity.description"),
    ctaTitle: t("services.brandIdentity.ctaTitle"),
    ctaText: t("services.brandIdentity.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.brandIdentity.ctaLabel"),
    backHref: "/home#growth",
    backLabel: t("services.brandIdentity.backLabel"),
    heroClass: "brand-identity-hero",
    bodyClass: "brand-identity-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.brandIdentity.benefitsTitle"),
    benefits: t("services.brandIdentity.benefits"),
    processTitle: t("services.brandIdentity.processTitle"),
    steps: t("services.brandIdentity.steps")
  });
}
