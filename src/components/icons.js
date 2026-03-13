const SERVICE_ICONS = {
  briefcase: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="7" width="18" height="13" rx="2"></rect>
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
      <path d="M3 12h18"></path>
    </svg>
  `,
  receipt: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 3h10a1 1 0 0 1 1 1v16l-2-1.4L14 20l-2-1.4L10 20l-2-1.4L6 20V4a1 1 0 0 1 1-1z"></path>
      <path d="M9 8h6M9 11h6M9 14h4"></path>
    </svg>
  `,
  people: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="9" cy="8" r="3"></circle>
      <path d="M3.5 18a5.5 5.5 0 0 1 11 0"></path>
      <path d="M16.5 6.5a2.5 2.5 0 1 1 0 5"></path>
      <path d="M18 18a4 4 0 0 0-2-3.5"></path>
    </svg>
  `,
  book: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z"></path>
      <path d="M5 5.5v16"></path>
      <path d="M9 7h6M9 10h6"></path>
    </svg>
  `,
  cloud: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8.5 18a5.5 5.5 0 1 1 1.2-10.87A6.5 6.5 0 0 1 20 11.5a4.5 4.5 0 0 1-1.5 8.74z"></path>
    </svg>
  `,
  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3l7 3v5c0 5-3.2 8.3-7 10-3.8-1.7-7-5-7-10V6z"></path>
    </svg>
  `,
  brain: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5a3 3 0 0 0-1 5.83V16a3 3 0 0 0 3 3h2"></path>
      <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5a3 3 0 0 1 1 5.83V16a3 3 0 0 1-3 3h-2"></path>
      <path d="M12 4v16M9 8.5h3M12 12h3"></path>
    </svg>
  `,
  bolt: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13 2L5 13h6l-1 9 9-12h-6z"></path>
    </svg>
  `,
  rocket: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 3.5a9 9 0 0 1 6 6L14 16l-6 1 1-6z"></path>
      <circle cx="15" cy="9" r="1.5"></circle>
      <path d="M8 14l-3 3M9 19l-4 1 1-4"></path>
    </svg>
  `,
  building: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="5" y="4" width="14" height="16" rx="1.5"></rect>
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M11 20v-3h2v3"></path>
    </svg>
  `,
  heroSpark: `
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path d="M60 8l6 20 20 6-20 6-6 20-6-20-20-6 20-6z"></path>
      <path d="M82 58l3 10 10 3-10 3-3 10-3-10-10-3 10-3z"></path>
      <path d="M37 59l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"></path>
    </svg>
  `
};

const SOCIAL_ICONS = {
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 9v8M7 7a1.2 1.2 0 1 0 0-2.4A1.2 1.2 0 0 0 7 7zM11 17V9h3v1.4A3.3 3.3 0 0 1 17 8.8c2 0 3 1.2 3 3.7V17h-3v-4c0-1.1-.4-1.8-1.4-1.8-1 0-1.6.7-1.6 1.8v4z"></path>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14 8h2V5h-2c-2 0-3 1.3-3 3.3V10H9v2.8h2V19h3v-6.2h2.2L17 10h-3V8.6c0-.4.2-.6.6-.6z"></path>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <circle cx="12" cy="12" r="3.5"></circle>
      <circle cx="16.6" cy="7.4" r="1"></circle>
    </svg>
  `
};

export function renderServiceIcon(name, extraClass = "") {
  const icon = SERVICE_ICONS[name] || SERVICE_ICONS.briefcase;
  return `<span class="card-icon ${extraClass}" aria-hidden="true">${icon}</span>`;
}

export function renderAudienceIcon(name) {
  const icon = SERVICE_ICONS[name] || SERVICE_ICONS.rocket;
  return `<span class="audience-icon" aria-hidden="true">${icon}</span>`;
}

export function renderHeroIllustration() {
  return `<span class="hero-illustration" aria-hidden="true">${SERVICE_ICONS.heroSpark}</span>`;
}

export function renderSocialIcon(name) {
  const icon = SOCIAL_ICONS[name] || SOCIAL_ICONS.linkedin;
  return `<span class="social-chip" aria-hidden="true">${icon}</span>`;
}
