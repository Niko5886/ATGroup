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

      <article class="service-card service-card-blue">
        ${renderServiceIcon("receipt")}
        <h3>ДДС Регистрация</h3>
        <p>Безпроблемна ДДС регистрация и управление на съответствието, за да гарантирате, че вашият бизнес отговаря на всички регулаторни изисквания.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-blue">
        ${renderServiceIcon("people")}
        <h3>ТРЗ и Личен състав</h3>
        <p>Цялостна обработка на заплати, изчисляване на възнаграждения и администриране на персонала с прецизност.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>
    </section>
  `;
}
