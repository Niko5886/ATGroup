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
            <span>Вид дейност</span>
            <input type="text" name="activity" placeholder="Изберете правна форма..." />
          </label>

          <fieldset class="contact-modal__options">
            <legend>Услуги *</legend>
            <label><input type="checkbox" name="services" value="Регистрация на фирма" /> <span>Регистрация на фирма</span></label>
            <label><input type="checkbox" name="services" value="ДДС Регистрация" /> <span>ДДС Регистрация</span></label>
            <label><input type="checkbox" name="services" value="ТРЗ и Личен Състав" /> <span>ТРЗ и Личен Състав</span></label>
            <label><input type="checkbox" name="services" value="Счетоводство" /> <span>Счетоводство</span></label>
            <label><input type="checkbox" name="services" value="Бранд Идентичност" /> <span>Бранд Идентичност</span></label>
            <label><input type="checkbox" name="services" value="Web Разработка" /> <span>Web Разработка</span></label>
            <label><input type="checkbox" name="services" value="Дигитален Маркетинг" /> <span>Дигитален Маркетинг</span></label>
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
