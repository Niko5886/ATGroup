import { renderServiceIcon } from "../components/icons.js";

export function growthPage() {
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">РАСТЕЖ</h1>
      <p class="section-subtitle">Дигитални и Дизайн Иновации</p>
    </section>

    <section class="service-grid service-grid-4 growth-grid">
      <article class="service-card growth-card growth-card-brand">
        ${renderServiceIcon("palette")}
        <h3>Създаване на Бранд Идентичност</h3>
        <p>Изграждане на уникална и запомняща се идентичност на марката, която резонира с вашата целева аудитория и се отличава на пазара.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card growth-card growth-card-logo">
        ${renderServiceIcon("sparkles")}
        <h3>Лого Дизайн</h3>
        <p>Дизайн на отличителни лога, които улавят същността на вашия бранд и създават трайни впечатления във всички платформи.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card growth-card growth-card-web">
        ${renderServiceIcon("code")}
        <h3>Модерна Уеб Разработка</h3>
        <p>Изграждане на отзивчиви, бързи и удобни за потребителя уебсайтове с най-съвременни технологии и най-добри практики.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>

      <article class="service-card growth-card growth-card-marketing">
        ${renderServiceIcon("chartUp")}
        <h3>Стратегии за Дигитален Маркетинг</h3>
        <p>Разработване на маркетингови кампании, базирани на данни, които засилват онлайн присъствието ви и водят до измерим бизнес растеж.</p>
        <a href="/contacts" data-link>НАУЧЕТЕ ПОВЕЧЕ</a>
      </article>
    </section>
  `;
}
