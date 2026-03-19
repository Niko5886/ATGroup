import { renderServiceIcon } from "../components/icons.js";
import { t } from "../i18n/translations.js";

export function growthPage() {
  const learnMore = t("basics.learnMore"); // Reusing learnMore from basics key or add common key
  
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">${t("growth.title")}</h1>
      <p class="section-subtitle">${t("growth.subtitle")}</p>
    </section>

    <section class="service-grid service-grid-4 growth-grid">
      <article class="service-card service-card-blue service-card-brand-identity service-card-clickable" data-card-link="/brand-identity" tabindex="0" role="link" aria-label="${t("growth.brandIdentity")}">
        ${renderServiceIcon("palette")}
        <h3>${t("growth.brandIdentity")}</h3>
        <p>${t("growth.brandIdentityDesc")}</p>
        <a href="/brand-identity" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-logo-design service-card-clickable" data-card-link="/logo-design" tabindex="0" role="link" aria-label="${t("growth.logoDesign")}">
        ${renderServiceIcon("sparkles")}
        <h3>${t("growth.logoDesign")}</h3>
        <p>${t("growth.logoDesignDesc")}</p>
        <a href="/logo-design" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-web-development service-card-clickable" data-card-link="/web-development" tabindex="0" role="link" aria-label="${t("growth.webDev")}">
        ${renderServiceIcon("code")}
        <h3>${t("growth.webDev")}</h3>
        <p>${t("growth.webDevDesc")}</p>
        <a href="/web-development" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-digital-marketing service-card-clickable" data-card-link="/digital-marketing" tabindex="0" role="link" aria-label="${t("growth.digitalMarketing")}">
        ${renderServiceIcon("chartUp")}
        <h3>${t("growth.digitalMarketing")}</h3>
        <p>${t("growth.digitalMarketingDesc")}</p>
        <a href="/digital-marketing" class="btn-pill" data-link>${learnMore}</a>
      </article>
    </section>
  `;
}
