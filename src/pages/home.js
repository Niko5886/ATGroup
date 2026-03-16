import { basicsPage } from "./basics.js";
import { growthPage } from "./growth.js";
import { futurePage } from "./future.js";
import { audiencePage } from "./audience.js";

export function homePage() {
  return `
    <div class="home-stack">
      <section id="home-top" class="story-section story-section-hero is-visible">
        <section class="hero-block">
          <p class="eyebrow">AT GROUP</p>
          <h1 class="hero-title">Повишете вашето <span>цифрово присъствие</span></h1>
          <p class="hero-lead">
            Комбиниране на доказания опит на Intellect в счетоводните и правни услуги с иновативните дигитални и AI решения на Nymerix за осигуряване на цялостна бизнес подкрепа в България и отвъд.
          </p>
        </section>
      </section>

      <section id="basics" class="story-section reveal-on-scroll">
        ${basicsPage()}
      </section>

      <section id="growth" class="story-section reveal-on-scroll">
        ${growthPage()}
      </section>

      <section id="future" class="story-section reveal-on-scroll">
        ${futurePage()}
      </section>

      <section id="audience" class="story-section reveal-on-scroll">
        ${audiencePage()}
      </section>
    </div>
  `;
}
