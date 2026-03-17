const navItems = [
  { label: "Начало", href: "/home", homeHref: "/home#home-top" },
  { label: "Основи", href: "/basics", homeHref: "/home#basics" },
  { label: "Растеж", href: "/growth", homeHref: "/home#growth" },
  { label: "Бъдеще", href: "/future", homeHref: "/home#future" }
];

export function renderNavbar(activePath) {
  const normalizedPath = activePath === "/" ? "/home" : activePath;
  const navActivePath = ["/company-registration", "/vat-registration", "/payroll-hr", "/accounting", "/eu-projects", "/licenses"].includes(normalizedPath)
    ? "/basics"
    : normalizedPath;

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
            ${label}
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
            <span>AT Group</span>
          </a>
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
          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2 at-nav-list">
              <span class="nav-indicator" aria-hidden="true"></span>
              ${links}
              <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a class="btn at-cta" href="/contacts" data-open-contact-modal data-home-section="contacts">Контакт</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}
