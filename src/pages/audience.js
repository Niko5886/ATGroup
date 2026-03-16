import { renderAudienceIcon } from "../components/icons.js";

export function audiencePage() {
  return `
    <section class="section-intro text-center mb-5">
      <h1 class="section-title">Кого Обслужваме</h1>
      <p class="section-subtitle">Индивидуални решения за бизнеси на всеки етап от растежа</p>
    </section>

    <section class="audience-grid">
      <article class="audience-card">
        <span class="audience-accent" aria-hidden="true"></span>
        ${renderAudienceIcon("rocket")}
        <h3>Стартъпи и Предприемачи</h3>
        <p>
          Стартирайте бизнеса си с увереност. Ние предоставяме цялостна подкрепа от регистрацията на фирмата до дигиталното присъствие,
          помагайки ви да навигирате през българските регулации, докато изграждате силна основа за растеж.
        </p>
        <h4>КЛЮЧОВИ ПРЕДИМСТВА:</h4>
        <ul>
          <li>Всичко-в-едно стартъп пакети</li>
          <li>Ефективни решения</li>
          <li>Бърза регистрация</li>
          <li>Модерно дигитално присъствие</li>
        </ul>
        <a class="btn audience-btn" href="/basics" data-link>Разгледайте стартъп пакети</a>
      </article>

      <article class="audience-card">
        <span class="audience-accent" aria-hidden="true"></span>
        ${renderAudienceIcon("building")}
        <h3>Установени МСП в България</h3>
        <p>
          Мащабирайте операциите си с най-новите технологии. От интеграция на AI до автоматизация на процесите,
          ние помагаме на утвърдени бизнеси да модернизират операциите си и да останат конкурентоспособни в дигиталната ера.
        </p>
        <h4>КЛЮЧОВИ ПРЕДИМСТВА:</h4>
        <ul>
          <li>Дигитална трансформация</li>
          <li>Консултации за AI и автоматизация</li>
          <li>Сигурност и съответствие</li>
          <li>Постоянна поддръжка и оптимизация</li>
        </ul>
        <a class="btn audience-btn" href="/future" data-link>Заявете дигитален одит</a>
      </article>
    </section>
  `;
}
