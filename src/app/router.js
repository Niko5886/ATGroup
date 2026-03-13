import { renderPageLayout } from "../components/page-layout.js";
import { homePage } from "../pages/home.js";
import { basicsPage } from "../pages/basics.js";
import { growthPage } from "../pages/growth.js";
import { futurePage } from "../pages/future.js";
import { contactsPage } from "../pages/contacts.js";
import { companyRegistrationPage } from "../pages/company-registration.js";
import { vatRegistrationPage } from "../pages/vat-registration.js";
import { payrollHrPage } from "../pages/payroll-hr.js";
import { accountingPage } from "../pages/accounting.js";
import { euProjectsPage } from "../pages/eu-projects.js";

const routes = {
  "/": homePage,
  "/home": homePage,
  "/basics": basicsPage,
  "/growth": growthPage,
  "/future": futurePage,
  "/contacts": contactsPage,
  "/company-registration": companyRegistrationPage,
  "/vat-registration": vatRegistrationPage,
  "/payroll-hr": payrollHrPage,
  "/accounting": accountingPage,
  "/eu-projects": euProjectsPage
};

function resolvePathname(pathname) {
  return routes[pathname] ? pathname : "/home";
}

function scrollToHash(hash, smooth = true) {
  if (!hash) {
    return;
  }

  const target = document.querySelector(hash);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start"
  });
}

export function renderRoute(pathname) {
  const app = document.getElementById("app");
  const resolvedPath = resolvePathname(pathname);
  const pageRenderer = routes[resolvedPath];

  if (window.location.pathname !== resolvedPath) {
    window.history.replaceState({}, "", resolvedPath);
  }

  app.innerHTML = renderPageLayout(pageRenderer(), resolvedPath);
}

export function navigateTo(targetHref) {
  const url = new URL(targetHref, window.location.origin);
  const targetPath = resolvePathname(url.pathname);
  const targetUrl = `${targetPath}${url.search}${url.hash}`;

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== targetUrl) {
    window.history.pushState({}, "", targetUrl);
  }

  renderRoute(targetPath);

  if (url.hash) {
    requestAnimationFrame(() => {
      scrollToHash(url.hash);
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function scrollToCurrentHash() {
  if (!window.location.hash) {
    return;
  }

  requestAnimationFrame(() => {
    scrollToHash(window.location.hash, false);
  });
}
