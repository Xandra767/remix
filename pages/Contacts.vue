<template>
  <section class="contacts">
    <div class="contacts__title-wrap">
      <h1 class="contacts__title">КОНТАКТЫ</h1>
      <i class="contacts__btn">
        <svg
          width="89"
          height="40"
          viewBox="0 0 89 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.9124 37.8508L42.9 38.6917C43.6473 39.328 44.7459 39.328 45.4932 38.6917L46.4808 37.8508L87.8724 2.60829C88.5668 2.01703 88.5668 0.944591 87.8724 0.353325C87.3191 -0.117775 86.5057 -0.117775 85.9524 0.353325L45.4932 34.802C44.7459 35.4383 43.6473 35.4383 42.9 34.802L2.4408 0.353325C1.8875 -0.117775 1.07412 -0.117775 0.520822 0.353325C-0.173607 0.944591 -0.173608 2.01703 0.520821 2.60829L41.9124 37.8508Z"
            fill="white"
          />
        </svg>
      </i>
    </div>
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="contacts__inner" id="contacts__inner">
          <div class="contacts__item">
            <p class="contacts__item-name">
              <i>
                <svg
                  width="51"
                  height="38"
                  viewBox="0 0 51 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5V16.5ZM49.7678 20.7678C50.7441 19.7915 50.7441 18.2085 49.7678 17.2322L33.8579 1.32233C32.8816 0.34602 31.2986 0.34602 30.3223 1.32233C29.346 2.29864 29.346 3.88155 30.3223 4.85786L44.4645 19L30.3223 33.1421C29.346 34.1184 29.346 35.7014 30.3223 36.6777C31.2986 37.654 32.8816 37.654 33.8579 36.6777L49.7678 20.7678ZM3 21.5H48V16.5H3V21.5Z"
                    fill="black"
                  />
                </svg>
              </i>
              Офис:
            </p>
            <p class="contacts__item-text">
              Москва, ул. Остоженка, 37/7с2, 4 этаж
            </p>
          </div>
          <div class="contacts__item">
            <p class="contacts__item-name">
              Как к нам пройти:
              <i>
                <svg
                  width="51"
                  height="38"
                  viewBox="0 0 51 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 21.5C49.3807 21.5 50.5 20.3807 50.5 19C50.5 17.6193 49.3807 16.5 48 16.5L48 21.5ZM1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346017 18.1184 0.346017 17.1421 1.32233L1.23223 17.2322ZM48 16.5L3 16.5L3 21.5L48 21.5L48 16.5Z"
                    fill="black"
                  />
                </svg>
              </i>
            </p>
            <p class="contacts__item-text">
              Голубой особняк, вход через Conversation Cafe, 4 этаж
            </p>
          </div>
        </div>
        <div class="contacts__map">
          <div
            style="position: relative; overflow: hidden; border-radius: 16px"
          >
            <iframe
              class="contacts__map-wrap"
              src="https://yandex.ru/map-widget/v1/?ll=37.595920%2C55.738562&mode=whatshere&whatshere%5Bpoint%5D=37.595872%2C55.738628&whatshere%5Bzoom%5D=21&z=21"
              width="1200"
              height="650"
              frameborder="0"
              allowfullscreen="true"
              style="position: relative"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="eight" style="margin-top: 80px">
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="eight__inner">
          <div class="eight__info">
            <p class="eight__info-title">
              Напишите или <br />
              позвоните нам
            </p>
            <div class="eight__info-links">
              <a href="tel:88001016856">
                <i>
                  <svg
                    width="40"
                    height="35"
                    viewBox="0 0 40 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.9794 24.8459L37.9497 25.0801C36.9583 24.6116 32.1296 22.3721 31.2304 22.0629C29.2113 21.3539 29.7811 21.9504 25.9043 26.1608C25.3279 26.7699 24.7548 26.8168 23.7765 26.3951C22.7884 25.9266 19.6164 24.9427 15.8615 21.7568C12.9366 19.2736 10.9735 16.2283 10.3938 15.2912C9.42874 13.7108 11.4478 13.4859 13.2858 10.1875C13.6151 9.53161 13.4472 9.01624 13.2034 8.55084C12.9564 8.08233 10.99 3.49086 10.1665 1.66052C9.37603 -0.163574 8.56247 0.0675615 7.95311 0.0675615C6.05589 -0.0886108 4.6692 -0.0636237 3.4472 1.14203C-1.86898 6.68302 -0.528407 12.3989 4.02032 18.4772C12.9597 29.5716 17.7225 31.6144 26.4313 34.4505C28.7831 35.1595 30.9273 35.0595 32.6236 34.8284C34.5143 34.5442 38.4438 32.5764 39.2639 30.3744C40.1038 28.1723 40.1038 26.3451 39.8568 25.9235C39.6131 25.5018 38.9675 25.2675 37.9794 24.8459Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <p>8 800 101 68 56</p>
              </a>
              <a href="tel:89015953988">
                <i>
                  <svg
                    width="40"
                    height="35"
                    viewBox="0 0 40 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.9794 24.8459L37.9497 25.0801C36.9583 24.6116 32.1296 22.3721 31.2304 22.0629C29.2113 21.3539 29.7811 21.9504 25.9043 26.1608C25.3279 26.7699 24.7548 26.8168 23.7765 26.3951C22.7884 25.9266 19.6164 24.9427 15.8615 21.7568C12.9366 19.2736 10.9735 16.2283 10.3938 15.2912C9.42874 13.7108 11.4478 13.4859 13.2858 10.1875C13.6151 9.53161 13.4472 9.01624 13.2034 8.55084C12.9564 8.08233 10.99 3.49086 10.1665 1.66052C9.37603 -0.163574 8.56247 0.0675615 7.95311 0.0675615C6.05589 -0.0886108 4.6692 -0.0636237 3.4472 1.14203C-1.86898 6.68302 -0.528407 12.3989 4.02032 18.4772C12.9597 29.5716 17.7225 31.6144 26.4313 34.4505C28.7831 35.1595 30.9273 35.0595 32.6236 34.8284C34.5143 34.5442 38.4438 32.5764 39.2639 30.3744C40.1038 28.1723 40.1038 26.3451 39.8568 25.9235C39.6131 25.5018 38.9675 25.2675 37.9794 24.8459Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <p>8 901 595 3988</p>
              </a>
              <a href="mailto:AM@remixmedia.ru">
                <i>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.51733 13.049V37.9722L15.9789 25.5106L3.51733 13.049ZM5.99347 10.5518L21.7701 26.3283C23.7626 28.3209 27.2376 28.3209 29.2301 26.3283L45.0067 10.5518H5.99347Z"
                      fill="white"
                    />
                    <path
                      d="M31.7166 28.8149C30.0583 30.475 27.8494 31.3912 25.4999 31.3912C23.1504 31.3912 20.9416 30.475 19.2832 28.8149L18.4654 27.9971L6.0144 40.4481H44.9854L32.5344 27.9971L31.7166 28.8149ZM35.0211 25.5104L47.4827 37.972V13.0488L35.0211 25.5104Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <p>AM@remixmedia.ru</p>
              </a>
            </div>
          </div>
          <ContactForm page="ContactsPage" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    ContactForm,
  },
  mounted() {
    document.body.classList.add("light-theme");
    const scrollToElement = document.getElementById("contacts__inner");
    const scrollButton = document.querySelector(".contacts__btn");

    // Функция для прокрутки к элементу
    function scrollToContacts() {
      scrollToElement.scrollIntoView({ behavior: "smooth" }); // Прокрутка с плавным эффектом
    }

    // Добавляем обработчик события на клик по кнопке
    scrollButton.addEventListener("click", scrollToContacts);
  },
};
</script>
