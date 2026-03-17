export function renderContactModal() {
  return `
    <div class="contact-modal" id="contactModal" data-contact-modal aria-hidden="true">
      <div class="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
        <button class="contact-modal__close" type="button" aria-label="Затвори" data-close-contact-modal>
          <span aria-hidden="true">\u00d7</span>
        </button>

        <h2 class="contact-modal__title" id="contactModalTitle">Стартъп Пакети</h2>
        <p class="contact-modal__subtitle">Попълнете формата, за да стартираме вашия бизнес с летящ старт.</p>

        <form class="contact-modal__form" novalidate>
          <div class="contact-modal__grid">
            <label class="contact-modal__field">
              <span>Име *</span>
              <input type="text" name="name" placeholder="Вашето име" />
            </label>
            <label class="contact-modal__field">
              <span>Компания *</span>
              <input type="text" name="company" placeholder="Име на фирмата" />
            </label>
            <label class="contact-modal__field">
              <span>Имейл *</span>
              <input type="email" name="email" placeholder="name@company.com" />
            </label>
            <label class="contact-modal__field">
              <span>Телефон *</span>
              <input type="tel" name="phone" placeholder="+359 888 123 456" />
            </label>
          </div>

          <label class="contact-modal__field contact-modal__field--full">
            <span>Вид дейност *</span>
            <select name="activity" required>
              <option value="" selected disabled>Изберете услуга...</option>
              <option value="accounting">Счетоводни услуги</option>
              <option value="technology">Технологични услуги</option>
              <option value="marketing">Дигитален маркетинг</option>
            </select>
          </label>

          <fieldset class="contact-modal__options" data-activity-group="accounting">
            <legend>Счетоводни услуги *</legend>
            <label><input type="checkbox" name="services" value="ДДС Регистрация" /> <span>ДДС Регистрация</span></label>
            <label><input type="checkbox" name="services" value="Счетоводство" /> <span>Счетоводство</span></label>
            <label><input type="checkbox" name="services" value="Регистрация на фирма" /> <span>Регистрация на фирма</span></label>
            <label><input type="checkbox" name="services" value="ТРЗ и Личен Състав" /> <span>ТРЗ и Личен Състав</span></label>
          </fieldset>

          <fieldset class="contact-modal__options" data-activity-group="technology">
            <legend>Технологични услуги *</legend>
            <label><input type="checkbox" name="tech-services" value="Автоматизация на бизнес процеси" /> <span>Автоматизация на бизнес процеси</span></label>
            <label><input type="checkbox" name="tech-services" value="М365 консултации" /> <span>М365 консултации</span></label>
            <label><input type="checkbox" name="tech-services" value="Имейл сигурност" /> <span>Имейл сигурност</span></label>
          </fieldset>

          <fieldset class="contact-modal__options" data-activity-group="marketing">
            <legend>Дигитален маркетинг *</legend>
            <label><input type="checkbox" name="digital-services" value="Дигитален маркетинг" /> <span>Дигитален маркетинг</span></label>
            <label><input type="checkbox" name="digital-services" value="Бранд идентификация" /> <span>Бранд идентификация</span></label>
            <label><input type="checkbox" name="digital-services" value="Графичен дизайн" /> <span>Графичен дизайн</span></label>
          </fieldset>

          <label class="contact-modal__field contact-modal__field--full">
            <span>Допълнителни бележки</span>
            <textarea name="notes" rows="3" placeholder="Разкажете ни повече за вашите нужди."></textarea>
          </label>

          <button class="contact-modal__submit" type="submit">Изпрати запитване</button>
        </form>
      </div>
    </div>
  `;
}
