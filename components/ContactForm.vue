<template>
  <form class="eight__form" @submit.prevent="uploadForm">
    <input
      id="form-client-name"
      name="client-name"
      class="eight__form-input"
      type="text"
      placeholder="Имя"
      required
    />
    <input
      id="form-client-phone"
      name="client-phone"
      class="eight__form-input"
      type="text"
      placeholder="Номер телефона"
      required
    />
    <div class="eight__textaera">
      <textarea
        id="form-client-message"
        name="client-message"
        class="eight__form-input"
        rows="3"
        cols="30"
        placeholder="Приложите ссылку или прикрепите бриф по вашей задаче"
      />
      <div class="input-container">
        <input type="file" id="fileInput" ref="fileInput" />
        <label for="fileInput">
          <div class="icon-container">
            <i>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.498 13.5981L6.94592 17.1502L7.85009 18.0544L11.4022 14.5023L11.0793 13.9211L10.498 13.5981Z"
                  fill="white"
                />
                <path
                  d="M14.5021 11.4023L18.1833 7.72106L17.2791 6.81689L13.5979 10.4981L13.9208 11.0794L14.5021 11.4023Z"
                  fill="white"
                />
                <path
                  d="M9.91675 7.97949L7.97925 9.91699L12.5001 12.5003L9.91675 7.97949Z"
                  fill="white"
                />
                <path
                  d="M12.5 12.5L15.0833 17.0208L17.0208 15.0833L12.5 12.5Z"
                  fill="white"
                />
                <path
                  d="M11.5313 21.6709C10.4216 22.6426 8.98398 23.156 7.50983 23.1071C6.03568 23.0583 4.63523 22.4508 3.59228 21.4079C2.54933 20.3649 1.94188 18.9645 1.89303 17.4903C1.84418 16.0162 2.35758 14.5786 3.3292 13.4688L5.13754 11.6605L4.23337 10.7563L2.42504 12.5647C1.42578 13.5583 0.74461 14.8267 0.468143 16.2085C0.191676 17.5903 0.332404 19.0231 0.872433 20.3247C1.41246 21.6263 2.32739 22.7379 3.50087 23.5181C4.67435 24.2984 6.05336 24.712 7.46254 24.7063C9.34517 24.6918 11.1496 23.9515 12.5 22.6397L14.3084 20.8313L13.4042 19.9272L11.5313 21.6709Z"
                  fill="white"
                />
                <path
                  d="M22.7043 2.29607C22.0441 1.63215 21.2591 1.10529 20.3946 0.74577C19.5301 0.386252 18.603 0.201172 17.6668 0.201172C16.7305 0.201172 15.8034 0.386252 14.9389 0.74577C14.0744 1.10529 13.2895 1.63215 12.6293 2.29607L10.8209 4.1044L11.7251 5.00857L13.5334 3.20024C14.0576 2.60156 14.6991 2.11689 15.4182 1.77624C16.1374 1.43559 16.9188 1.24623 17.7141 1.21987C18.5093 1.19352 19.3016 1.33074 20.0417 1.62303C20.7818 1.91532 21.454 2.35646 22.0166 2.91912C22.5793 3.48179 23.0204 4.15398 23.3127 4.89408C23.605 5.63417 23.7422 6.4264 23.7159 7.22169C23.6895 8.01698 23.5002 8.79838 23.1595 9.5175C22.8189 10.2366 22.3342 10.8781 21.7355 11.4023L19.9272 13.2107L20.8313 14.1148L22.6397 12.3065C23.3106 11.6588 23.8453 10.8836 24.2125 10.0265C24.5797 9.16927 24.772 8.24737 24.778 7.31487C24.784 6.38236 24.6037 5.45806 24.2476 4.59621C23.8915 3.73436 23.3668 2.95234 22.7043 2.29607V2.29607Z"
                  fill="white"
                />
              </svg>
            </i>
          </div>
        </label>
      </div>
    </div>

    <div v-if="page == 'MainPage'" class="eight__form-btn--wrap">
      <button type="submit" class="eight__form-btn btn btn--large">
        <p>Свяжитесь со мной</p>
      </button>
    </div>
    <button v-else type="submit" class="eight__form-btn btn btn--large">
      <p>Свяжитесь со мной</p>
    </button>
    <div class="eight__bottom-conf">
      <p>Нажимая на кнопку вы соглашаетесь с</p>
      <a href="/conf">
        Политикой конфиденциальности <br />
        и обработки персональных данных
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    page: {
      type: String,
    },
  },
  methods: {
    async uploadForm() {
      const formData = new FormData();
      formData.append(
        "Name",
        document.querySelector("#form-client-name").value
      );
      formData.append(
        "Phone",
        document.querySelector("#form-client-phone").value
      );
      formData.append(
        "Message",
        document.querySelector("#form-client-message").value
      );
      formData.append("file", this.$refs.fileInput.files[0]);

      try {
        await fetch("https://remixmedia.ru/sendContactForm", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    },
  },
  mounted() {},
};
</script>
