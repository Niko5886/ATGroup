import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/main.css";
import { navigateTo, renderRoute, scrollToCurrentHash } from "./app/router.js";
import { hydrateHomeSection } from "./pages/home.js";

let revealObserver;
let triggerObserver;
let sectionSpyObserver;
let homeLazyObserver;
let lastSyncedHomeSection;
let backToTopTicking = false;
const HOME_RETURN_SCROLL_KEY = "at:home-return-scroll-y";

function isHomeRoute() {
  const pathname = window.location.pathname;
  // If we are on any of these strictly, or if we have home lazy sections in the DOM, it's home.
  return pathname === "/home" || pathname === "/" || document.querySelector(".home-lazy-section") !== null;
}

function syncBackToTopState() {
  const backToTopButton = document.querySelector("[data-scroll-top]");
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 360);
}

function storeHomeReturnScroll(targetHref, triggerElement) {
  if (!isHomeRoute() || !targetHref || !triggerElement) {
    return;
  }

  const fromServiceCard = Boolean(
    triggerElement.closest(".service-card") || triggerElement.closest("[data-card-link]")
  );
  if (!fromServiceCard) {
    return;
  }

  let targetPath = "";
  try {
    targetPath = new URL(targetHref, window.location.origin).pathname;
  } catch {
    return;
  }

  if (targetPath === "/" || targetPath === "/home") {
    return;
  }

  sessionStorage.setItem(HOME_RETURN_SCROLL_KEY, String(window.scrollY));
}

function restoreHomeReturnScroll() {
  if (!isHomeRoute()) {
    return false;
  }

  const storedScroll = sessionStorage.getItem(HOME_RETURN_SCROLL_KEY);
  if (!storedScroll) {
    return false;
  }

  sessionStorage.removeItem(HOME_RETURN_SCROLL_KEY);

  const scrollY = Number.parseFloat(storedScroll);
  if (!Number.isFinite(scrollY) || scrollY < 0) {
    return false;
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: scrollY, behavior: "auto" });
    syncBackToTopState();
  });

  return true;
}

function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (!modal) {
    return;
  }

  modal.classList.add("is-open");
  modal.removeAttribute("inert");
  document.body.classList.add("modal-open");
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("inert", "");
  document.body.classList.remove("modal-open");
}

function syncActivityGroups(form, selectedActivity) {
  const groups = Array.from(form.querySelectorAll(".contact-modal__options[data-activity-group]"));
  if (!groups.length) {
    return;
  }

  groups.forEach((group) => {
    const isActive = selectedActivity && group.dataset.activityGroup === selectedActivity;
    const isInactive = !isActive;

    group.classList.toggle("is-inactive", isInactive);
    group.setAttribute("aria-disabled", String(isInactive));

    group.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.disabled = isInactive;
      if (isInactive) {
        checkbox.checked = false;
      }
    });
  });
}

function syncContactModalActivityState() {
  const form = document.querySelector(".contact-modal__form");
  if (!form) {
    return;
  }

  const activitySelect = form.querySelector("select[name='activity']");
  if (!activitySelect) {
    return;
  }

  syncActivityGroups(form, activitySelect.value);
}

function sanitizePhoneValue(rawValue) {
  if (!rawValue) {
    return "";
  }

  const startsWithPlus = rawValue.trim().startsWith("+");
  let sanitized = rawValue.replace(/[^\d+\s()-]/g, "");

  // Keep at most one plus sign and only at the beginning.
  sanitized = sanitized.replace(/\+/g, "");
  if (startsWithPlus) {
    sanitized = `+${sanitized}`;
  }

  return sanitized;
}

function clearServicesValidity(form) {
  const serviceCheckboxes = form.querySelectorAll(".contact-modal__options input[type='checkbox']");
  serviceCheckboxes.forEach((checkbox) => checkbox.setCustomValidity(""));
}

function validateContactModalForm(form) {
  clearServicesValidity(form);

  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  const activitySelect = form.querySelector("select[name='activity']");
  const selectedActivity = activitySelect?.value;
  if (!selectedActivity) {
    form.reportValidity();
    return false;
  }

  const activeGroup = form.querySelector(`.contact-modal__options[data-activity-group='${selectedActivity}']`);
  const activeCheckboxes = Array.from(activeGroup?.querySelectorAll("input[type='checkbox']") ?? []);
  const hasSelectedService = activeCheckboxes.some((checkbox) => checkbox.checked);

  if (!hasSelectedService && activeCheckboxes.length > 0) {
    const firstActiveCheckbox = activeCheckboxes[0];
    firstActiveCheckbox.setCustomValidity("Моля, изберете поне една услуга.");
    firstActiveCheckbox.reportValidity();
    firstActiveCheckbox.focus();
    return false;
  }

  return true;
}

function updateNavIndicator() {
  const navList = document.querySelector(".at-nav-list");
  const indicator = navList?.querySelector(".nav-indicator");

  if (!navList || !indicator) {
    return;
  }

  const activeLink = navList.querySelector(".at-nav-link.is-active");

  if (!activeLink) {
    indicator.style.width = "0px";
    return;
  }

  const navRect = navList.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  const left = linkRect.left - navRect.left;

  indicator.style.width = `${linkRect.width}px`;
  indicator.style.transform = `translateX(${left}px)`;
}

function syncHomeHash(sectionId) {
  if (!isHomeRoute() || !sectionId) {
    return;
  }

  if (lastSyncedHomeSection === sectionId) {
    return;
  }

  const nextHash = `#${sectionId}`;
  const currentHash = window.location.hash || "";

  if (currentHash !== nextHash) {
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    window.history.replaceState({}, "", nextUrl);
  }

  lastSyncedHomeSection = sectionId;
}

function setHomeNavActiveSection(sectionId) {
  if (!isHomeRoute()) {
    return;
  }

  syncHomeHash(sectionId);

  document.querySelectorAll(".at-nav-link[data-home-section]").forEach((link) => {
    const targetSection = link.getAttribute("data-home-section");
    link.classList.toggle("is-active", targetSection === sectionId);
  });

  const ctaLink = document.querySelector(".at-cta[data-home-section]");
  if (ctaLink) {
    ctaLink.classList.toggle("is-active", sectionId === "contacts");
  }

  updateNavIndicator();
}

function initHomeSectionSpy() {
  if (sectionSpyObserver) {
    sectionSpyObserver.disconnect();
  }

  if (!isHomeRoute()) {
    return;
  }

  const sections = Array.from(document.querySelectorAll(".story-section[id]"));
  if (!sections.length) {
    return;
  }

  const initialSection = window.location.hash ? window.location.hash.slice(1) : "home-top";
  setHomeNavActiveSection(initialSection);

  if (!window.IntersectionObserver) {
    return;
  }

  const visibilityBySection = new Map(sections.map((section) => [section.id, 0]));

  sectionSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityBySection.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      let activeSection = "home-top";
      let maxRatio = 0;

      visibilityBySection.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeSection = id;
        }
      });

      if (maxRatio > 0) {
        setHomeNavActiveSection(activeSection);
      }
    },
    {
      threshold: [0.01, 0.15, 0.35, 0.55],
      rootMargin: "-10% 0px -50% 0px"
    }
  );

  sections.forEach((section) => {
    sectionSpyObserver.observe(section);
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const triggerElements = document.querySelectorAll(".trigger-on-view");

  if (revealObserver) {
    revealObserver.disconnect();
  }

  if (triggerObserver) {
    triggerObserver.disconnect();
  }

  if (!revealElements.length && !triggerElements.length) {
    return;
  }

  if (!window.IntersectionObserver) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    triggerElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (revealElements.length) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        // Reveal slightly before the section reaches viewport center.
        rootMargin: "0px 0px 16% 0px",
        threshold: 0.01
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  if (triggerElements.length) {
    triggerObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        // Trigger early to avoid perceived lag while scrolling.
        rootMargin: "0px 0px 14% 0px",
        threshold: 0.01
      }
    );

    triggerElements.forEach((element) => triggerObserver.observe(element));
  }
}

function initHomeLazySections() {
  if (homeLazyObserver) {
    homeLazyObserver.disconnect();
    homeLazyObserver = undefined;
  }

  if (!isHomeRoute()) {
    return;
  }

  const lazySections = Array.from(document.querySelectorAll(".home-lazy-section[data-loaded='false']"));
  if (!lazySections.length) {
    return;
  }

  const hashTarget = window.location.hash ? window.location.hash.slice(1) : "";
  const eagerSections = new Set(["basics"]);

  if (hashTarget) {
    eagerSections.add(hashTarget);
  }

  eagerSections.forEach((sectionId) => {
    hydrateHomeSection(sectionId);
  });

  if (!window.IntersectionObserver) {
    ["growth", "future", "audience"].forEach((sectionId) => hydrateHomeSection(sectionId));
    return;
  }

  homeLazyObserver = new IntersectionObserver(
    (entries, observer) => {
      let hasHydrated = false;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const sectionId = entry.target.getAttribute("data-home-lazy");
        if (!sectionId) {
          return;
        }

        const hydrated = hydrateHomeSection(sectionId);
        observer.unobserve(entry.target);

        if (hydrated) {
          hasHydrated = true;
        }
      });

      if (hasHydrated) {
        initScrollReveal();
        initHomeSectionSpy();
      }
    },
    {
      rootMargin: "100% 0px 100% 0px", // Aggressive root margin for preload
      threshold: 0
    }
  );

  lazySections.forEach((section) => {
    if (section.dataset.loaded !== "true") {
      homeLazyObserver.observe(section);
    }
  });

  // Bulletproof fallback: if they haven't loaded within a reasonable time, force them.
  setTimeout(() => {
    const unhydrated = Array.from(document.querySelectorAll(".home-lazy-section[data-loaded='false']"));
    if (unhydrated.length > 0) {
      unhydrated.forEach((section) => {
        hydrateHomeSection(section.getAttribute("data-home-lazy"));
      });
      initScrollReveal();
      initHomeSectionSpy();
    }
  }, 1000); // 1 second fallback to ensure nothing is ever stuck on "Зарежда се"
}

function renderCurrentPath() {
  renderRoute(window.location.pathname);
  lastSyncedHomeSection = undefined;
  initHomeLazySections();
  syncContactModalActivityState();
  initScrollReveal();
  initHomeSectionSpy();
  requestAnimationFrame(() => {
    updateNavIndicator();
    syncBackToTopState();
  });

  const restoredHomeScroll = restoreHomeReturnScroll();
  if (!restoredHomeScroll) {
    scrollToCurrentHash();
  }
}

renderCurrentPath();

window.addEventListener("popstate", () => {
  renderCurrentPath();
});

// Language Switcher Logic
document.addEventListener("click", (e) => {
  if (e.target.matches(".lang-btn")) {
    const lang = e.target.getAttribute("data-lang");
    import("./i18n/translations.js").then(({ setLang }) => {
      setLang(lang);
    });
  }
});

document.addEventListener("click", (event) => {
  const scrollTopTrigger = event.target.closest("[data-scroll-top]");
  if (scrollTopTrigger) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const openContactModalTrigger = event.target.closest("[data-open-contact-modal]");
  if (openContactModalTrigger) {
    event.preventDefault();
    openContactModal();
    syncContactModalActivityState();

    const mainNav = document.getElementById("mainNav");
    if (mainNav?.classList.contains("show") && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(mainNav).hide();
    }
    return;
  }

  const closeContactModalTrigger = event.target.closest("[data-close-contact-modal]");
  if (closeContactModalTrigger) {
    event.preventDefault();
    closeContactModal();
    return;
  }

  const contactModalOverlay = event.target.closest("[data-contact-modal]");
  if (contactModalOverlay && event.target === contactModalOverlay) {
    closeContactModal();
    return;
  }

  const link = event.target.closest("a[data-link]");
  const card = event.target.closest("[data-card-link]");

  if (!link && card) {
    const cardTargetHref = card.getAttribute("data-card-link");
    storeHomeReturnScroll(cardTargetHref, card);
    navigateTo(cardTargetHref);
    initHomeLazySections();
    initScrollReveal();
    initHomeSectionSpy();
    restoreHomeReturnScroll();
    return;
  }

  if (!link) {
    return;
  }

  event.preventDefault();
  const linkTargetHref = link.getAttribute("href");
  storeHomeReturnScroll(linkTargetHref, link);
  navigateTo(linkTargetHref);
  initHomeLazySections();
  initScrollReveal();
  initHomeSectionSpy();
  restoreHomeReturnScroll();

  const mainNav = document.getElementById("mainNav");
  if (mainNav?.classList.contains("show") && window.bootstrap?.Collapse) {
    window.bootstrap.Collapse.getOrCreateInstance(mainNav).hide();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeContactModal();
    return;
  }

  const card = event.target.closest("[data-card-link]");

  if (!card || (event.key !== "Enter" && event.key !== " ")) {
    return;
  }

  event.preventDefault();
  const cardTargetHref = card.getAttribute("data-card-link");
  storeHomeReturnScroll(cardTargetHref, card);
  navigateTo(cardTargetHref);
  initHomeLazySections();
  initScrollReveal();
  initHomeSectionSpy();
  restoreHomeReturnScroll();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest(".contact-modal__form");
  if (!form) {
    return;
  }

  event.preventDefault();

  if (!validateContactModalForm(form)) {
    return;
  }

  const formData = new FormData(form);
  const activity = formData.get("activity");
  const name = formData.get("name");
  const company = formData.get("company");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const notes = formData.get("notes") || "-";

  let recipientEmail = "";
  let subject = "";
  let bodyServices = "";

  if (activity === "marketing") {
    recipientEmail = "nymerix.ltd@gmail.com";
    subject = `Запитване: Дигитален Маркетинг - ${company}`;
    const services = formData.getAll("digital-services");
    bodyServices = services.join(", ");
  } else if (activity === "technology") {
    recipientEmail = "nymerix.ltd@gmail.com";
    subject = `Запитване: Технологични Услуги - ${company}`;
    const services = formData.getAll("tech-services");
    bodyServices = services.join(", ");
  } else if (activity === "accounting") {
    // Empty placeholder email as requested for accounting
    recipientEmail = ""; 
    subject = `Запитване: Счетоводни Услуги - ${company}`;
    const services = formData.getAll("services");
    bodyServices = services.join(", ");
  }

  // Construct email body
  const body = `
Ново запитване от ${name} (${company})

Телефон: ${phone}
Имейл: ${email}
Категория: ${activity === "marketing" ? "Дигитален Маркетинг" : activity === "technology" ? "Технологични Услуги" : "Счетоводни Услуги"}

Избрани услуги:
${bodyServices}

Бележки:
${notes}
  `.trim();

  if (recipientEmail) {
    // Open default mail client with pre-filled check
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    console.log("Запитване за счетоводство (няма конфигуриран имейл):", { name, company, email, phone, services: bodyServices, notes });
    alert("Благодарим Ви! Вашето запитване за счетоводни услуги беше прието успешно.");
  }

  // UI-only modal form for now: keep user on page after submit click.
  closeContactModal();
});

document.addEventListener("change", (event) => {
  const serviceCheckbox = event.target.closest(".contact-modal__options input[type='checkbox']");
  if (serviceCheckbox) {
    serviceCheckbox.setCustomValidity("");
  }

  const activitySelect = event.target.closest(".contact-modal__form select[name='activity']");
  if (!activitySelect) {
    return;
  }

  const form = activitySelect.closest(".contact-modal__form");
  if (!form) {
    return;
  }

  syncActivityGroups(form, activitySelect.value);
});

document.addEventListener("input", (event) => {
  const phoneInput = event.target.closest(".contact-modal__form input[name='phone']");
  if (!phoneInput) {
    return;
  }

  const sanitizedValue = sanitizePhoneValue(phoneInput.value);
  if (sanitizedValue !== phoneInput.value) {
    phoneInput.value = sanitizedValue;
  }
});

window.addEventListener("resize", () => {
  updateNavIndicator();
});

window.addEventListener("scroll", () => {
  if (backToTopTicking) {
    return;
  }

  backToTopTicking = true;
  requestAnimationFrame(() => {
    syncBackToTopState();
    backToTopTicking = false;
  });
});
