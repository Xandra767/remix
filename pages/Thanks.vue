<template>
  <section class="thanks">
    <div class="thanks__inner">
      <h1 class="thanks__title">Это серьезно <br> Это по любви!</h1>
      <p class="thanks__text">Ожидайте, ведь скоро с вами свяжется наш менеджер</p>
    </div>
  </section>
</template>

<script>

export default {
  name: "ThankView",
  mounted(){
    let footer = document.querySelector('.footer')
    footer.remove()
    let body = document.querySelector('body')
    if (body.classList.contains('light-theme')){
      body.classList.remove('light-theme')
    }
  }
};
</script>
