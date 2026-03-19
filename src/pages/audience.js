import { renderAudienceIcon } from "../components/icons.js";
import { t } from "../i18n/translations.js";

export function audiencePage() {
  const startupsList = t("audience.startupsList");
  const smeList = t("audience.smeList");

  const renderList = (items) => {
    return items.map(item => `<li>${item}</li>`).join("");
  };

  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">${t("audience.title")}</h1>
      <p class="section-subtitle">${t("audience.subtitle")}</p>
    </section>

    <section class="audience-grid">
      <article class="audience-card">
        <span class="audience-accent" aria-hidden="true"></span>
        ${renderAudienceIcon("rocket")}
        <h3>${t("audience.startupsTitle")}</h3>
        <p>
          ${t("audience.startupsDesc")}
        </p>
        <h4>${t("audience.keyBenefits")}</h4>
        <ul>
          ${renderList(startupsList)}
        </ul>
        <a class="btn audience-btn" data-open-contact-modal>${t("audience.startupsBtn")}</a>
      </article>

      <article class="audience-card">
        <span class="audience-accent" aria-hidden="true"></span>
        ${renderAudienceIcon("building")}
        <h3>${t("audience.smeTitle")}</h3>
        <p>
          ${t("audience.smeDesc")}
        </p>
        <h4>${t("audience.keyBenefits")}</h4>
        <ul>
          ${renderList(smeList)}
        </ul>
        <a class="btn audience-btn" data-open-contact-modal>${t("audience.smeBtn")}</a>
      </article>
    </section>
  `;
}
