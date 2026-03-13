import { renderNavbar } from "./navbar.js";
import { renderFooter } from "./footer.js";

export function renderPageLayout(content, pathname) {
  return `
    <div class="container py-4 py-lg-5">
      <main class="site-shell p-4 p-lg-5">
        ${renderNavbar(pathname)}
        <section class="site-content">${content}</section>
        ${renderFooter()}
      </main>
    </div>
  `;
}
