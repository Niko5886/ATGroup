import { t } from "../i18n/translations.js";

export function renderContactModal() {
  return `
    <div class="contact-modal" id="contactModal" data-contact-modal inert>
      <div class="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
        <button class="contact-modal__close" type="button" aria-label="Затвори" data-close-contact-modal>
          <span aria-hidden="true">\u00d7</span>
        </button>

        <p class="contact-modal__subtitle">${t("contactModal.subtitle")}</p>

        <form class="contact-modal__form">
          <div class="contact-modal__grid">
            <label class="contact-modal__field">
              <span>${t("contactModal.name")} *</span>
              <input type="text" name="name" placeholder="${t("contactModal.namePlaceholder")}" minlength="2" maxlength="50" pattern="^[A-Za-z\u0400-\u04FF]+(?:[ .'-][A-Za-z\u0400-\u04FF]+)*$" title="Името трябва да е между 2 и 50 символа и може да съдържа само букви (кирилица/латиница), интервали, тирета, апострофи и точки." required />
            </label>
            <label class="contact-modal__field">
              <span>${t("contactModal.company")} *</span>
              <input type="text" name="company" placeholder="${t("contactModal.companyPlaceholder")}" minlength="2" maxlength="50" pattern="^[A-Za-z\u0400-\u04FF0-9\s\-\.'\"„“”]+$" title="Компанията трябва да е между 2 и 50 символа и може да съдържа букви (кирилица/латиница), цифри, интервали, кавички, точки и тирета." required />
            </label>
            <label class="contact-modal__field">
              <span>${t("contactModal.email")} *</span>
              <input type="email" name="email" placeholder="${t("contactModal.emailPlaceholder")}" minlength="2" maxlength="50" required />
            </label>
            <label class="contact-modal__field">
              <span>${t("contactModal.phone")} *</span>
              <input type="tel" name="phone" placeholder="${t("contactModal.phonePlaceholder")}" inputmode="numeric" autocomplete="tel" pattern="^(?=(?:\D*\d){1,20}\D*$)\+?[0-9 ()-]*$" title="Телефонът може да съдържа до 20 цифри и символите +, интервали, скоби и тирета." required />
            </label>
          </div>

          <label class="contact-modal__field contact-modal__field--full">
            <span>${t("contactModal.activity")} *</span>
            <select name="activity" required>
              <option value="" selected disabled>${t("contactModal.selectService")}</option>
              <option value="accounting">${t("contactModal.accounting")}</option>
              <option value="technology">${t("contactModal.technology")}</option>
              <option value="marketing">${t("contactModal.marketing")}</option>
            </select>
          </label>

          <fieldset class="contact-modal__options" data-activity-group="accounting">
            <legend>${t("contactModal.accounting")} *</legend>
            <label><input type="checkbox" name="services" value="ДДС Регистрация" /> <span>${t("contactModal.vatRegistration")}</span></label>
            <label><input type="checkbox" name="services" value="Счетоводство" /> <span>${t("contactModal.accountingOpt")}</span></label>
            <label><input type="checkbox" name="services" value="Регистрация на фирма" /> <span>${t("contactModal.companyRegistration")}</span></label>
            <label><input type="checkbox" name="services" value="ТРЗ и Личен Състав" /> <span>${t("contactModal.payroll")}</span></label>
          </fieldset>

          <fieldset class="contact-modal__options" data-activity-group="technology">
            <legend>${t("contactModal.technology")} *</legend>
            <label><input type="checkbox" name="tech-services" value="Автоматизация на бизнес процеси" /> <span>${t("contactModal.processAutomation")}</span></label>
            <label><input type="checkbox" name="tech-services" value="М365 консултации" /> <span>${t("contactModal.m365consult")}</span></label>
            <label><input type="checkbox" name="tech-services" value="Имейл сигурност" /> <span>${t("contactModal.emailSecurity")}</span></label>
          </fieldset>

          <fieldset class="contact-modal__options" data-activity-group="marketing">
            <legend>${t("contactModal.marketing")} *</legend>
            <label><input type="checkbox" name="digital-services" value="Дигитален маркетинг" /> <span>${t("contactModal.marketingOpt")}</span></label>
            <label><input type="checkbox" name="digital-services" value="Бранд идентификация" /> <span>${t("contactModal.brandIdentity")}</span></label>
            <label><input type="checkbox" name="digital-services" value="Графичен дизайн" /> <span>${t("contactModal.graphicDesign")}</span></label>
          </fieldset>

          <label class="contact-modal__field contact-modal__field--full">
            <span>${t("contactModal.notes")}</span>
            <textarea name="notes" rows="3" placeholder="${t("contactModal.notesPlaceholder")}"></textarea>
          </label>

          <button class="contact-modal__submit" type="submit">${t("contactModal.submit")}</button>
        </form>
      </div>
    </div>
  `;
}
