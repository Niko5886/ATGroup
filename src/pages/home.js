import { basicsPage } from "./basics.js";
import { growthPage } from "./growth.js";
import { futurePage } from "./future.js";
import { audiencePage } from "./audience.js";
import atGroupLogo from "../assets/images/AtGroupLogoHero.png";

const homeSectionRenderers = {
  basics: basicsPage,
  growth: growthPage,
  future: futurePage,
  audience: audiencePage
};

function assertSafeTemplate(html) {
  const htmlString = typeof html === "string" ? html : String(html ?? "");
  const blockedPattern = /<\s*script\b|\bon\w+\s*=|javascript\s*:/i;

  if (blockedPattern.test(htmlString)) {
    throw new Error("Blocked potentially unsafe home section content.");
  }

  return htmlString;
}

function homeSectionShell(id, label) {
  return `
      <section id="${id}" class="story-section reveal-on-scroll home-lazy-section" data-home-lazy="${id}" data-loaded="false">
        <div class="home-section-skeleton" aria-hidden="true">Зарежда се: ${label}</div>
      </section>
  `;
}

export function hydrateHomeSection(sectionId) {
  const section = document.querySelector(`.home-lazy-section[data-home-lazy="${sectionId}"]`);
  const renderer = homeSectionRenderers[sectionId];

  if (!section || !renderer || section.dataset.loaded === "true") {
    return false;
  }

  section.innerHTML = assertSafeTemplate(renderer());
  section.dataset.loaded = "true";
  section.classList.add("home-lazy-loaded");
  return true;
}

export function homePage() {
  return `
    <div class="home-stack">
      <section id="home-top" class="story-section story-section-hero is-visible">
        <section class="hero-block">
          <div class="hero-brand-logo-wrap">
            <img src="${atGroupLogo}" alt="AT Group" class="hero-brand-logo" />
          </div>
          <h1 class="hero-title">Изберете вашия <span>надежден партньор за цялостен бизнес успех!</span></h1>
          <p class="hero-lead">
            Обединяваме експертния опит на „ИНТЕЛЛЕКТ“ ЕООД в счетоводните и правни услуги с иновативните AI и дигитални решения на „НАЙМЕРИКС“ ЕООД. Осигуряваме стабилност и растеж за вашия бизнес в България и на международния пазар.
          </p>
          <div class="hero-cta-corner">
            <button class="btn hero-corner-btn" type="button" data-open-contact-modal>Започнете сега</button>
          </div>
        </section>
      </section>

      <section id="basics" class="story-section reveal-on-scroll home-lazy-section home-lazy-loaded" data-home-lazy="basics" data-loaded="true">
        ${homeSectionRenderers.basics()}
      </section>
      ${homeSectionShell("growth", "Растеж")}
      ${homeSectionShell("future", "Бъдеще")}
      ${homeSectionShell("audience", "За кого")}
    </div>
  `;
}
