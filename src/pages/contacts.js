import { t } from "../i18n/translations.js";

export function contactsPage() {
  return `
    <section class="section-intro text-center mb-4">
      <h1 class="section-title">${t("contacts.title")}</h1>
      <p class="section-subtitle">${t("contacts.subtitle")}</p>
    </section>

    <section class="contact-panel">
      <p>${t("contacts.email")}</p>
      <p>${t("contacts.phone")}</p>
      <p>${t("contacts.address")}</p>
    </section>
  `;
}
