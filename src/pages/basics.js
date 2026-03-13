import { renderServiceIcon } from "../components/icons.js";

export function basicsPage() {
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">ОСНОВИ</h1>
      <p class="section-subtitle">Счетоводни и Правни Услуги</p>
    </section>

    <section class="service-grid service-grid-3">
      <article class="service-card service-card-blue service-card-clickable service-card-company-registration" data-card-link="/company-registration" tabindex="0" role="link" aria-label="Регистрация на фирми">
        ${renderServiceIcon("briefcase")}
        <h3>Регистрация на фирми</h3>
        <p>Пълни услуги по регистрация за всички видове правни субекти в България с експертно ръководство на всяка стъпка.</p>
        <a href="/company-registration" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-vat-registration" data-card-link="/vat-registration" tabindex="0" role="link" aria-label="ДДС Регистрация">
        ${renderServiceIcon("receipt")}
        <h3>ДДС Регистрация</h3>
        <p>Безпроблемна ДДС регистрация и управление на съответствието, за да гарантирате, че вашият бизнес отговаря на всички регулаторни изисквания.</p>
        <a href="/vat-registration" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-payroll-hr" data-card-link="/payroll-hr" tabindex="0" role="link" aria-label="ТРЗ и Личен състав">
        ${renderServiceIcon("people")}
        <h3>ТРЗ и Личен състав</h3>
        <p>Цялостна обработка на заплати, изчисляване на възнаграждения и администриране на персонала с прецизност.</p>
        <a href="/payroll-hr" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-accounting" data-card-link="/accounting" tabindex="0" role="link" aria-label="Счетоводство">
        ${renderServiceIcon("book")}
        <h3>Счетоводство</h3>
        <p>Професионални счетоводни услуги и водене на финансови регистри за поддържане на точни фирмени финанси.</p>
        <a href="/accounting" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue service-card-clickable service-card-eu-projects" data-card-link="/eu-projects" tabindex="0" role="link" aria-label="Консултации по Европроекти">
        ${renderServiceIcon("briefcase")}
        <h3>Консултации по Европроекти</h3>
        <p>Експертни насоки за осигуряване и управление на възможности за финансиране от Европейския съюз за растежа на вашия бизнес.</p>
        <a href="/eu-projects" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue service-card-coming-soon">
        ${renderServiceIcon("rocket")}
        <h3>Нова Услуга</h3>
        <span class="service-card-coming-soon-label">ОЧАКВАЙТЕ СКОРО</span>
      </article>
    </section>
  `;
}
