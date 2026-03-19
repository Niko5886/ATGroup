import { renderServiceIcon } from "../components/icons.js";
import { t } from "../i18n/translations.js";

export function futurePage() {
  const learnMore = t("basics.learnMore"); // Reuse

  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">${t("future.title")}</h1>
      <p class="section-subtitle">${t("future.subtitle")}</p>
    </section>

    <section class="service-grid service-grid-4">
      <article class="service-card service-card-violet service-card-microsoft-365 service-card-clickable" data-card-link="/microsoft-365" tabindex="0" role="link" aria-label="${t("future.m365")}">
        ${renderServiceIcon("cloud", "card-icon-soft")}
        <h3>${t("future.m365")}</h3>
        <p>${t("future.m365Desc")}</p>
        <a href="/microsoft-365" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-violet service-card-email-security service-card-clickable" data-card-link="/email-security" tabindex="0" role="link" aria-label="${t("future.emailSec")}">
        ${renderServiceIcon("shield", "card-icon-soft")}
        <h3>${t("future.emailSec")}</h3>
        <p>${t("future.emailSecDesc")}</p>
        <a href="/email-security" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-violet service-card-ai-integration service-card-clickable" data-card-link="/ai-integration" tabindex="0" role="link" aria-label="${t("future.aiConsult")}">
        ${renderServiceIcon("brain", "card-icon-soft")}
        <h3>${t("future.aiConsult")}</h3>
        <p>${t("future.aiConsultDesc")}</p>
        <a href="/ai-integration" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-violet service-card-process-automation service-card-clickable" data-card-link="/process-automation" tabindex="0" role="link" aria-label="${t("future.automation")}">
        ${renderServiceIcon("bolt", "card-icon-soft")}
        <h3>${t("future.automation")}</h3>
        <p>${t("future.automationDesc")}</p>
        <a href="/process-automation" class="btn-pill" data-link>${learnMore}</a>
      </article>
    </section>
  `;
}
