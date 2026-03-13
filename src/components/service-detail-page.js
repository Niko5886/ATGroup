import { renderServiceIcon } from "./icons.js";

export function renderServiceDetailPage({
  icon,
  title,
  description,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
  backHref = "",
  backLabel = "",
  benefitsTitle,
  benefits,
  processTitle,
  steps,
  heroClass = "",
  bodyClass = "",
  showBenefitsImage = false,
  showProcessImage = false
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

  const detailBodyClass = `service-detail-body ${bodyClass}`.trim();
  const backLinkMarkup = backHref && backLabel
    ? `<a class="service-detail-back-link" href="${backHref}" data-link>${backLabel}</a>`
    : "";
  const benefitsImagePanel = showBenefitsImage
    ? '<div class="service-detail-benefits-media" aria-hidden="true"></div>'
    : "";
  const processImagePanel = showProcessImage
    ? '<div class="service-detail-process-media" aria-hidden="true"></div>'
    : "";

  return `
    <section class="service-detail-page">
      <section class="service-detail-hero ${heroClass}">
        <div class="service-detail-hero-main">
          ${backLinkMarkup}
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

      <section class="${detailBodyClass}">
        <div class="service-detail-column detail-benefits-column">
          <h2 class="detail-block-title">${benefitsTitle}</h2>
          <ul class="detail-benefit-list">${benefitItems}</ul>
        </div>

        ${benefitsImagePanel}

        <div class="service-detail-column detail-process-column">
          <h2 class="detail-block-title">${processTitle}</h2>
          <ol class="detail-step-list">${processItems}</ol>
        </div>

        ${processImagePanel}
      </section>
    </section>
  `;
}
