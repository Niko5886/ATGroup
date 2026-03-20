import { renderNavbar } from "./navbar.js";
import { renderFooter } from "./footer.js";
import { renderContactModal } from "./contact-modal.js";

export function renderPageLayout(content, pathname) {
  return `
    <div class="container py-4 py-lg-5">
      <main class="site-shell p-3 py-4 p-lg-5">
        ${renderNavbar(pathname)}
        <section class="site-content">${content}</section>
        ${renderFooter()}
      </main>
      <button class="back-to-top" type="button" data-scroll-top aria-label="Връщане в началото" title="Към началото">
        <span class="back-to-top-arrow" aria-hidden="true">↑</span>
      </button>
      ${renderContactModal()}
    </div>
  `;
}
