import { renderSocialIcon } from "./icons.js";

export function renderFooter() {
  return `
    <footer class="site-footer mt-5">
      <div class="row g-4">
        <div class="col-12 col-lg-4">
          <h3 class="footer-brand">AT GROUP</h3>
          <p class="footer-subtitle">Стратегически алианс за бизнес растеж</p>
          <p class="footer-text">
            Комбиниране на счетоводно съвършенство с дигитални иновации за подпомагане на бизнеса в България и отвъд.
          </p>
        </div>

        <div class="col-12 col-md-4 col-lg-3">
          <h4 class="footer-title">Бързи Връзки</h4>
          <ul class="footer-links">
            <li><a href="/basics" data-link>Основни Услуги</a></li>
            <li><a href="/growth" data-link>Услуги за Растеж</a></li>
            <li><a href="/future" data-link>Технологични Услуги</a></li>
            <li><a href="/growth" data-link>Кого Обслужваме</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-4 col-lg-3">
          <h4 class="footer-title">Контакти</h4>
          <ul class="footer-contact">
            <li>info@intellectnymerix.bg</li>
            <li>+359 123 456 789</li>
            <li>Русе, България</li>
          </ul>
        </div>

        <div class="col-12 col-md-4 col-lg-2">
          <h4 class="footer-title">Последвайте ни</h4>
          <div class="social-row">
            ${renderSocialIcon("linkedin")}
            ${renderSocialIcon("facebook")}
            ${renderSocialIcon("instagram")}
          </div>
        </div>
      </div>

      <div class="footer-legal">© 2026 Nikolay Stoyanov & Nymerix. Всички права запазени.</div>
    </footer>
  `;
}
