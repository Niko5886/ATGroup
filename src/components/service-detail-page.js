import { renderServiceIcon } from "./icons.js";

export function renderServiceDetailPage({
  icon,
  title,
  description,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
  benefitsTitle,
  benefits,
  processTitle,
  steps
}) {
  const benefitItems = benefits
    .map(
      (benefit, index) => `
        <li class="detail-benefit-item" style="--benefit-index: ${index};">
          <span class="detail-benefit-check" aria-hidden="true"></span>
          <span>${benefit}</span>
        </li>
      `
    )
    .join("");

  const processItems = steps
    .map(
      (step, index) => `
        <li class="detail-step-item">
          <span class="detail-step-number">${index + 1}</span>
          <div class="detail-step-copy">
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        </li>
      `
    )
    .join("");

  return `
    <section class="service-detail-page">
      <section class="service-detail-hero">
        <div class="service-detail-hero-main">
          ${renderServiceIcon(icon, "service-detail-icon")}
          <h1 class="service-detail-title">${title}</h1>
          <p class="service-detail-description">${description}</p>
        </div>

        <aside class="service-detail-cta">
          <h2>${ctaTitle}</h2>
          <p>${ctaText}</p>
          <a class="btn service-detail-cta-button" href="${ctaHref}" data-link>${ctaLabel}</a>
        </aside>
      </section>

      <section class="service-detail-body">
        <div class="service-detail-column">
          <h2 class="detail-block-title">${benefitsTitle}</h2>
          <ul class="detail-benefit-list">${benefitItems}</ul>
        </div>

        <div class="service-detail-column">
          <h2 class="detail-block-title">${processTitle}</h2>
          <ol class="detail-step-list">${processItems}</ol>
        </div>
      </section>
    </section>
  `;
}
