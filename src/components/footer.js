import { t } from "../i18n/translations.js";

export function renderFooter() {
  return `
    <footer class="site-footer mt-5">
      <div class="footer-grid">
        <div class="footer-col">
          <h3 class="footer-brand">AT GROUP</h3>
          <p class="footer-text">
            ${t("footer.brandDesc")}
          </p>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">${t("footer.quickLinks")}</h4>
          <ul class="footer-links">
            <li><a href="/basics" data-link>${t("footer.servicesOverview")}</a></li>
            <li><a href="/growth" data-link>${t("footer.growthServices")}</a></li>
            <li><a href="/future" data-link>${t("footer.techServices")}</a></li>
            <li><a href="/growth" data-link>${t("footer.whoWeServe")}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">${t("footer.contacts")}</h4>
          <ul class="footer-contact">
            <li>nymerix.ltd@gmail.com</li>
            <li>+359 988 855 911</li>
            <li>${t("footer.address")}</li>
          </ul>
        </div>
      </div>

      <div class="footer-legal">${t("footer.rights")}</div>
    </footer>
  `;
}
