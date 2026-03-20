import atGroupLogo from "../assets/images/AtGroupLogo.png";
import { getLang, setLang, t } from "../i18n/translations.js";

const navItems = [
  { label: "home", href: "/home", homeHref: "/home#home-top" },
  { label: "basics", href: "/basics", homeHref: "/home#basics" },
  { label: "growth", href: "/growth", homeHref: "/home#growth" },
  { label: "future", href: "/future", homeHref: "/home#future" },
  { label: "whyUs", href: "/home#why-us", homeHref: "/home#why-us" }
];

export function renderNavbar(activePath) {
  const normalizedPath = activePath === "/" ? "/home" : activePath;
  const navActivePath = ["/company-registration", "/vat-registration", "/payroll-hr", "/accounting", "/eu-projects", "/licenses"].includes(normalizedPath)
    ? "/basics"
    : normalizedPath;

  const currentLang = getLang();

  const links = navItems
    .map(({ label, href, homeHref }) => {
      const isActive = navActivePath === href;
      const targetHref = normalizedPath === "/home" ? homeHref : href;
      const homeSection = homeHref.split("#")[1] || "home-top";
      return `
        <li class="nav-item">
          <a
            class="nav-link at-nav-link ${isActive ? "is-active" : ""}"
            href="${targetHref}"
            data-home-section="${homeSection}"
            data-link
          >
            ${t(`nav.${label}`)}
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <header class="site-header mb-4">
      <nav class="navbar navbar-expand-lg at-navbar">
        <div class="container-fluid px-0">
          <a class="navbar-brand at-brand" href="/home" data-link>
            <img src="${atGroupLogo}" alt="AT Group" class="at-brand-logo" />
          </a>

          <!-- Mobile Nav Controls (d-lg-none) -->
          <div class="d-flex align-items-center gap-3 d-lg-none">
            <div class="lang-switcher">
              <button type="button" class="lang-btn ${currentLang === 'bg' ? 'active' : ''}" data-lang="bg">BG</button>
              <span class="lang-divider">|</span>
              <button type="button" class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Превключи навигацията"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2 at-nav-list">
              <span class="nav-indicator" aria-hidden="true"></span>
              ${links}
              <li class="nav-item ms-lg-2 mt-4 mt-lg-0 d-flex align-items-center gap-3">
                <a class="btn at-cta" href="/contacts" data-open-contact-modal data-home-section="contacts">${t("nav.contact")}</a>
                <div class="lang-switcher d-none d-lg-flex">
                  <button type="button" class="lang-btn ${currentLang === 'bg' ? 'active' : ''}" data-lang="bg">BG</button>
                  <span class="lang-divider">|</span>
                  <button type="button" class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                </div>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}
