import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/main.css";
import { navigateTo, renderRoute, scrollToCurrentHash } from "./app/router.js";

let revealObserver;
let triggerObserver;
let sectionSpyObserver;
let lastSyncedHomeSection;
let backToTopTicking = false;

function syncBackToTopState() {
  const backToTopButton = document.querySelector("[data-scroll-top]");
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 360);
}

function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (!modal) {
    return;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
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
  if (window.location.pathname !== "/home" || !sectionId) {
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
  if (window.location.pathname !== "/home") {
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

  if (window.location.pathname !== "/home") {
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
      threshold: [0.2, 0.35, 0.5, 0.7],
      rootMargin: "-20% 0px -45% 0px"
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

function renderCurrentPath() {
  renderRoute(window.location.pathname);
  lastSyncedHomeSection = undefined;
  initScrollReveal();
  initHomeSectionSpy();
  requestAnimationFrame(() => {
    updateNavIndicator();
    syncBackToTopState();
  });
  scrollToCurrentHash();
}

renderCurrentPath();

window.addEventListener("popstate", () => {
  renderCurrentPath();
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
    navigateTo(card.getAttribute("data-card-link"));
    initScrollReveal();
    initHomeSectionSpy();
    return;
  }

  if (!link) {
    return;
  }

  event.preventDefault();
  navigateTo(link.getAttribute("href"));
  initScrollReveal();
  initHomeSectionSpy();

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
  navigateTo(card.getAttribute("data-card-link"));
  initScrollReveal();
  initHomeSectionSpy();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest(".contact-modal__form");
  if (!form) {
    return;
  }

  // UI-only modal form for now: keep user on page after submit click.
  event.preventDefault();
  closeContactModal();
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
