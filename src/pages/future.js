import { renderServiceIcon } from "../components/icons.js";

export function futurePage() {
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">ГОТОВИ ЗА БЪДЕЩЕТО</h1>
      <p class="section-subtitle">Интеграция на AI и Технологии</p>
    </section>

    <section class="service-grid service-grid-4">
      <article class="service-card service-card-violet service-card-clickable" data-card-link="/microsoft-365" tabindex="0" role="link" aria-label="Настройка на Microsoft 365 и Одити на Сигурността">
        ${renderServiceIcon("cloud", "card-icon-soft")}
        <h3>Настройка на Microsoft 365 и Одити на Сигурността</h3>
        <p>Пълно внедряване на M365 и комплексни оценки на сигурността за защита на вашата бизнес инфраструктура.</p>
        <a href="/microsoft-365" class="btn-pill" data-link>РАЗБЕРИ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-violet">
        ${renderServiceIcon("shield", "card-icon-soft")}
        <h3>Сигурност на Имейли</h3>
        <p>Разширени решения за защита на имейли, включително анти-фишинг, филтриране на спам и системи за откриване на заплахи.</p>
        <a href="/contacts" class="btn-pill" data-link>РАЗБЕРИ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-violet">
        ${renderServiceIcon("brain", "card-icon-soft")}
        <h3>Консултации за Интеграция на AI</h3>
        <p>Стратегически насоки за внедряване на изкуствен интелект за автоматизация на процеси, подобряване на вземането на решения и стимулиране на иновациите.</p>
        <a href="/contacts" class="btn-pill" data-link>РАЗБЕРИ ПОВЕЧЕ</a>
      </article>

      <article class="service-card service-card-violet">
        ${renderServiceIcon("bolt", "card-icon-soft")}
        <h3>Автоматизация на Процеси</h3>
        <p>Оптимизиране на операциите с интелигентни решения за автоматизация, които повишават ефективността и намаляват ръчния труд.</p>
        <a href="/contacts" class="btn-pill" data-link>РАЗБЕРИ ПОВЕЧЕ</a>
      </article>
    </section>
  `;
}
