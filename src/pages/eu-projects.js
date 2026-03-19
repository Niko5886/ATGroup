import { renderServiceDetailPage } from "../components/service-detail-page.js";
import { t } from "../i18n/translations.js";

export function euProjectsPage() {
  return renderServiceDetailPage({
    icon: "briefcase",
    title: t("services.euProjects.title"),
    description: t("services.euProjects.description"),
    ctaTitle: t("services.euProjects.ctaTitle"),
    ctaText: t("services.euProjects.ctaText"),
    ctaHref: "/contacts",
    ctaLabel: t("services.euProjects.ctaLabel"),
    backHref: "/home#basics",
    backLabel: t("services.euProjects.backLabel"),
    heroClass: "eu-projects-hero",
    bodyClass: "eu-projects-body",
    showBenefitsImage: true,
    showProcessImage: true,
    benefitsTitle: t("services.euProjects.benefitsTitle"),
    benefits: t("services.euProjects.benefits"),
    processTitle: t("services.euProjects.processTitle"),
    steps: t("services.euProjects.steps")
  });
}
