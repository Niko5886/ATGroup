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
import { brandIdentityPage } from "../pages/brand-identity.js";
import { logoDesignPage } from "../pages/logo-design.js";
import { webDevelopmentPage } from "../pages/web-development.js";
import { digitalMarketingPage } from "../pages/digital-marketing.js";
import { microsoft365Page } from "../pages/microsoft-365.js";
import { emailSecurityPage } from "../pages/email-security.js";
import { aiIntegrationPage } from "../pages/ai-integration.js";
import { processAutomationPage } from "../pages/process-automation.js";

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
  "/eu-projects": euProjectsPage,
  "/brand-identity": brandIdentityPage,
  "/logo-design": logoDesignPage,
  "/web-development": webDevelopmentPage,
  "/digital-marketing": digitalMarketingPage,
  "/microsoft-365": microsoft365Page,
  "/email-security": emailSecurityPage,
  "/ai-integration": aiIntegrationPage,
  "/process-automation": processAutomationPage
};

function resolvePathname(pathname) {
  return routes[pathname] ? pathname : "/home";
}

function assertSafeTemplate(html) {
  const htmlString = typeof html === "string" ? html : String(html ?? "");
  const blockedPattern = /<\s*script\b|\bon\w+\s*=|javascript\s*:/i;

  if (blockedPattern.test(htmlString)) {
    throw new Error("Blocked potentially unsafe HTML content.");
  }

  return htmlString;
}

function getHashTarget(hash) {
  if (!hash || !hash.startsWith("#")) {
    return null;
  }

  let targetId;
  try {
    targetId = decodeURIComponent(hash.slice(1));
  } catch {
    return null;
  }

  const hasControlCharacters = Array.from(targetId).some((char) => {
    const charCode = char.charCodeAt(0);
    return charCode < 32 || charCode === 127;
  });

  if (!targetId || hasControlCharacters) {
    return null;
  }

  return document.getElementById(targetId);
}

function scrollToHash(hash, smooth = true) {
  if (!hash) {
    return;
  }

  const target = getHashTarget(hash);
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

  const layoutMarkup = renderPageLayout(pageRenderer(), resolvedPath);
  app.innerHTML = assertSafeTemplate(layoutMarkup);
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
