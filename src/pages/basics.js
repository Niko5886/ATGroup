import { renderServiceIcon } from "../components/icons.js";
import { t } from "../i18n/translations.js";

export function basicsPage() {
  const learnMore = t("basics.learnMore");
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">${t("basics.title")}</h1>
      <p class="section-subtitle">${t("basics.subtitle")}</p>
    </section>

    <section class="service-grid service-grid-3">
      <article class="service-card service-card-blue service-card-clickable service-card-company-registration" data-card-link="/company-registration" tabindex="0" role="link" aria-label="${t("basics.companyReg")}">
        ${renderServiceIcon("briefcase")}
        <h3>${t("basics.companyReg")}</h3>
        <p>${t("basics.companyRegDesc")}</p>
        <a href="/company-registration" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-vat-registration" data-card-link="/vat-registration" tabindex="0" role="link" aria-label="${t("basics.vatReg")}">
        ${renderServiceIcon("receipt")}
        <h3>${t("basics.vatReg")}</h3>
        <p>${t("basics.vatRegDesc")}</p>
        <a href="/vat-registration" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-payroll-hr" data-card-link="/payroll-hr" tabindex="0" role="link" aria-label="${t("basics.payroll")}">
        ${renderServiceIcon("people")}
        <h3>${t("basics.payroll")}</h3>
        <p>${t("basics.payrollDesc")}</p>
        <a href="/payroll-hr" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-accounting" data-card-link="/accounting" tabindex="0" role="link" aria-label="${t("basics.accounting")}">
        ${renderServiceIcon("book")}
        <h3>${t("basics.accounting")}</h3>
        <p>${t("basics.accountingDesc")}</p>
        <a href="/accounting" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-eu-projects" data-card-link="/eu-projects" tabindex="0" role="link" aria-label="${t("basics.euProjects")}">
        ${renderServiceIcon("briefcase")}
        <h3>${t("basics.euProjects")}</h3>
        <p>${t("basics.euProjectsDesc")}</p>
        <a href="/eu-projects" class="btn-pill" data-link>${learnMore}</a>
      </article>

      <article class="service-card service-card-blue service-card-coming-soon service-card-clickable" data-card-link="/licenses" tabindex="0" role="link" aria-label="${t("basics.licenses")}">
        ${renderServiceIcon("rocket")}
        <h3>${t("basics.licenses")}</h3>
        <p>${t("basics.licensesDesc")}</p>
        <a href="/licenses" class="btn-pill" data-link>${learnMore}</a>
      </article>
    </section>
  `;
}
