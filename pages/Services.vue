<template>
  <section class="projects">
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="projects__inner">
          <h1 class="projects__title">Подчеркиваем направление вашего успеха</h1>
          <div :class="['projects__items', {'projects__items--projects': activePage == 'projects'}, {'projects__items--services': activePage == 'services'}]">
            <div @click="openPage('projects')" :class="['projects__item', { active: activePage == 'projects' }]">
              <p class="projects__item-title">ПРОЕКТЫ</p>
              <p class="projects__item-text">
                Команда RemixMedia подходит стратегически даже <br> к тактическим задачам клиентов.
                <br><br>
                Опыт комплексного маркетинга в сфере FMCG, <br> медицины, финансов, ритейла, а также продвижение <br>
                авторских блогов в социальных сетях.
              </p>
            </div>
            <div @click="openPage('services')" :class="['projects__item', { active: activePage == 'services' }]">
              <p class="projects__item-title">УСЛУГИ</p>
              <p class="projects__item-text">
                Мы предлагаем широкий спектр <br> маркетинговых услуг, но особо сильны <br> в продвижении Telegram,
                брендинге <br>
                и дизайне, комплексном SMM- <br> сопровождении и креативе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="activePage == 'projects'" class="cases">
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="cases__inner">
          <div class="cases__head">
            <button v-for="(direction, index) in directions" :key="index"
              :class="['cases__head-item', { active: activeDirections.includes(direction.id) }]"
              @click="toggleDirection(direction.id)">
              {{ direction.name }}
            </button>
          </div>
          <div class="cases__content">
            <div v-for="(caseItem, index) in cases" :key="index"
              :class="['cases__content-item', { active: isCaseActive(caseItem, index) }]">
              <img :src="caseItem.imgSrc" alt="" class="cases__content-img">
              <p class="cases__content-text">
                {{ caseItem.text }}
              </p>
              <img :src="caseItem.logoSrc" alt="" class="cases__content-logo">
            </div>
          </div>
          <button class="cases__more" @click="moreBtn()">ПОСМОТРЕТЬ ЕЩЁ</button>
        </div>
      </div>
    </div>
  </section>
  <section v-if="activePage == 'services'" class="services-content">
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="services-content__items">
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">Продвижение <br> Telegram</p>        
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">Digital- <br>маркетинг</p>        
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">Дизайн- <br>студия</p>        
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">Продакшн- <br>студия</p>          
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">WEB-студия</p>        
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">PR и  <br>Спецпроекты</p>          
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">подписки</p>          
          </div>
        </a>
        <a href="#" class="services-content__item">
          <div class="services-content__item-inner">
            <p class="services-content__item-title">Консультации <br> обучение </p>          
          </div>
        </a>
      </div>
      </div>
    </div>
  </section>
  <section class="eight" style="margin-top: 80px;">
    <div class="container">
      <div class="container__elem container__elem--12">
        <div class="eight__inner">
          <div class="eight__info">
            <p class="eight__info-title">Напишите или <br> позвоните нам</p>
            <div class="eight__info-links">
              <a href="tel:88001016856">
                <i>
                  <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M37.9794 24.8459L37.9497 25.0801C36.9583 24.6116 32.1296 22.3721 31.2304 22.0629C29.2113 21.3539 29.7811 21.9504 25.9043 26.1608C25.3279 26.7699 24.7548 26.8168 23.7765 26.3951C22.7884 25.9266 19.6164 24.9427 15.8615 21.7568C12.9366 19.2736 10.9735 16.2283 10.3938 15.2912C9.42874 13.7108 11.4478 13.4859 13.2858 10.1875C13.6151 9.53161 13.4472 9.01624 13.2034 8.55084C12.9564 8.08233 10.99 3.49086 10.1665 1.66052C9.37603 -0.163574 8.56247 0.0675615 7.95311 0.0675615C6.05589 -0.0886108 4.6692 -0.0636237 3.4472 1.14203C-1.86898 6.68302 -0.528407 12.3989 4.02032 18.4772C12.9597 29.5716 17.7225 31.6144 26.4313 34.4505C28.7831 35.1595 30.9273 35.0595 32.6236 34.8284C34.5143 34.5442 38.4438 32.5764 39.2639 30.3744C40.1038 28.1723 40.1038 26.3451 39.8568 25.9235C39.6131 25.5018 38.9675 25.2675 37.9794 24.8459Z"
                      fill="white" />
                  </svg>

                </i>
                <p>8 800 101 68 56</p>
              </a>
              <a href="tel:89015953988">
                <i>
                  <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M37.9794 24.8459L37.9497 25.0801C36.9583 24.6116 32.1296 22.3721 31.2304 22.0629C29.2113 21.3539 29.7811 21.9504 25.9043 26.1608C25.3279 26.7699 24.7548 26.8168 23.7765 26.3951C22.7884 25.9266 19.6164 24.9427 15.8615 21.7568C12.9366 19.2736 10.9735 16.2283 10.3938 15.2912C9.42874 13.7108 11.4478 13.4859 13.2858 10.1875C13.6151 9.53161 13.4472 9.01624 13.2034 8.55084C12.9564 8.08233 10.99 3.49086 10.1665 1.66052C9.37603 -0.163574 8.56247 0.0675615 7.95311 0.0675615C6.05589 -0.0886108 4.6692 -0.0636237 3.4472 1.14203C-1.86898 6.68302 -0.528407 12.3989 4.02032 18.4772C12.9597 29.5716 17.7225 31.6144 26.4313 34.4505C28.7831 35.1595 30.9273 35.0595 32.6236 34.8284C34.5143 34.5442 38.4438 32.5764 39.2639 30.3744C40.1038 28.1723 40.1038 26.3451 39.8568 25.9235C39.6131 25.5018 38.9675 25.2675 37.9794 24.8459Z"
                      fill="white" />
                  </svg>

                </i>
                <p>8 901 595 3988</p>
              </a>
              <a href="mailto:AM@remixmedia.ru">
                <i>
                  <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.51733 13.049V37.9722L15.9789 25.5106L3.51733 13.049ZM5.99347 10.5518L21.7701 26.3283C23.7626 28.3209 27.2376 28.3209 29.2301 26.3283L45.0067 10.5518H5.99347Z"
                      fill="white" />
                    <path
                      d="M31.7166 28.8149C30.0583 30.475 27.8494 31.3912 25.4999 31.3912C23.1504 31.3912 20.9416 30.475 19.2832 28.8149L18.4654 27.9971L6.0144 40.4481H44.9854L32.5344 27.9971L31.7166 28.8149ZM35.0211 25.5104L47.4827 37.972V13.0488L35.0211 25.5104Z"
                      fill="white" />
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

export default {
  name: "ServicesView",
  data() {
    return {
      activePage: 'services',
      activeDirections: [],
      directions: [
        { id: 1, name: 'Продакшн-студия' },
        { id: 2, name: 'Дизайн-студия' },
        { id: 3, name: 'Продвижение Telegram' },
        { id: 4, name: 'WEB-студия' },
        { id: 5, name: 'PR и Спецпроекты' },
        { id: 6, name: 'Digital-маркетинг' }
      ],
      cases: [
        {
          imgSrc: "../assets/img/case-img-1.png",
          text: "PR и маркетинговое сопровождение цифровой экосистемы КорпСофт24",
          logoSrc: "../assets/img/case-logo-1.png",
          active: true,
          directions: [2,6,5]
        },
        {
          imgSrc: "../assets/img/case-img-2.png",
          text: "SMM-стратегия для банка",
          logoSrc: "../assets/img/case-logo-2.png",
          active: false,
          directions: [6]
        },
        {
          imgSrc: "../assets/img/case-img-3.png",
          text: "Брендбук и дизайн-поддержка крупного IT-интегратора",
          logoSrc: "../assets/img/case-logo-3.png",
          active: true,
          directions: [2,6]
        },
        {
          imgSrc: "../assets/img/case-img-4.png",
          text: "Комплексный маркетинг для новой платежной системы",
          logoSrc: "../assets/img/case-logo-4.png",
          active: true,
          directions: [5,6]
        },
        {
          imgSrc: "../assets/img/case-img-5.png",
          text: "Брендбук, продвижение и продакшн сети кофеен в Москве",
          logoSrc: "../assets/img/case-logo-5.png",
          active: false,
          directions: [2,4,6]
        },
        {
          imgSrc: "../assets/img/case-img-6.png",
          text: "Фирменный стиль для компании ПраймСур",
          logoSrc: "../assets/img/case-logo-6.png",
          active: false,
          directions: []
        },
        {
          imgSrc: "../assets/img/case-img-7.png",
          text: "Разработка сайта нового бренда энергетиков",
          logoSrc: "../assets/img/case-logo-7.png",
          active: false,
          directions: [2,4]
        },
        {
          imgSrc: "../assets/img/case-img-8.png",
          text: "+20 000 подписчиков личного блога в Telegram акционера крупной компании",
          logoSrc: "../assets/img/case-logo-8.png",
          active: false,
          directions: [3,5,6]
        },
        {
          imgSrc: "../assets/img/case-img-9.png",
          text: "Реклама в Telegram крупнейшего производителя продуктов питания",
          logoSrc: "../assets/img/case-logo-9.png",
          active: true,
          directions: [3,6,5]
        },
        {
          imgSrc: "../assets/img/case-img-10.png",
          text: "Таргет VK с миллиоными охватами для бренда Hi!",
          logoSrc: "../assets/img/case-logo-10.png",
          active: true,
          directions: [6]
        },
        {
          imgSrc: "../assets/img/case-img-11.png",
          text: "Разработка дизайна POSM для лаборатории эффективных кормов",
          logoSrc: "../assets/img/case-logo-11.png",
          active: true,
          directions: [2]
        },
        {
          imgSrc: "../assets/img/case-img-12.png",
          text: "Дизайн-сопровождение инновационного центра Бирюч",
          logoSrc: "../assets/img/case-logo-12.png",
          active: false,
          directions: [2]
        },
        {
          imgSrc: "../assets/img/case-img-13.png",
          text: "Развитие с 0 до 3 700+ подписчиков образовательного портала Вавилон за 3 месяца",
          logoSrc: "../assets/img/case-logo-13.png",
          active: false,
          directions: [3,6]
        },
        {
          imgSrc: "../assets/img/case-img-14.png",
          text: "Статья на VC.ru и продвижение B2B-бота в Telegram",
          logoSrc: "../assets/img/case-logo-14.png",
          active: false,
          directions: [3,5]
        },
        {
          imgSrc: "../assets/img/case-img-15.png",
          text: "Комплексный маркетинг для бренда концентратов из алтайских трав",
          logoSrc: "../assets/img/case-logo-15.png",
          active: false,
          directions: [1,2,3,6]
        },
        {
          imgSrc: "../assets/img/case-img-16.png",
          text: "Развитие с 0 до 12 000+ подписчиков канала частной клиники",
          logoSrc: "../assets/img/case-logo-16.png",
          active: false,
          directions: [3,6]
        },
        {
          imgSrc: "../assets/img/case-img-17.png",
          text: "SMM-продвижение производителя сыров Kalleh",
          logoSrc: "../assets/img/case-logo-17.png",
          active: false,
          directions: [6]
        },
        {
          imgSrc: "../assets/img/case-img-18.png",
          text: "SMM-продвижение бренда Sorbon в России",
          logoSrc: "../assets/img/case-logo-18.png",
          active: false,
          directions: [6]
        },
        {
          imgSrc: "../assets/img/case-img-19.png",
          text: "Комплексный маркетинг маркетплейса полезных продуктов",
          logoSrc: "../assets/img/case-logo-19.png",
          active: false,
          directions: [2,6]
        },
        {
          imgSrc: "../assets/img/case-img-20.png",
          text: "Разработка сайта международного производителя продуктов питания",
          logoSrc: "../assets/img/case-logo-20.png",
          active: false,
          directions: [2,4]
        },
        {
          imgSrc: "../assets/img/case-img-21.png",
          text: "Развитие личного бренда владельца инвестиционной компании в Германии",
          logoSrc: "../assets/img/case-logo-21.png",
          active: false,
          directions: [3,5]
        },
        {
          imgSrc: "../assets/img/case-img-22.png",
          text: "Комплексный маркетинг винодельни акционера ВТБ",
          logoSrc: "../assets/img/case-logo-22.png",
          active: false,
          directions: [1,6]
        },
        {
          imgSrc: "../assets/img/case-img-23.png",
          text: "Комплексный маркетинг винных брендов Долины Лефкадия",
          logoSrc: "../assets/img/case-logo-23.png",
          active: false,
          directions: [1,6]
        },
        {
          imgSrc: "../assets/img/case-img-24.png",
          text: "Запуск закрытого клуба предпринимателей в рамках ПМЭФ",
          logoSrc: "../assets/img/case-logo-24.png",
          active: false,
          directions: [2,5]
        }
      ]
    };
  },
  methods: {
    openPage(page){
      this.activePage = page;
      const newUrl = `${window.location.origin}/${page}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    },
    toggleDirection(directionId) {
      const index = this.activeDirections.indexOf(directionId);
      if (index === -1) {
        this.activeDirections.push(directionId);
      } else {
        this.activeDirections.splice(index, 1);
      }      
      if (this.activeDirections.length == 6){
        document.querySelector('.cases__more').style.display = 'none' 
      } else {
        document.querySelector('.cases__more').style.display = 'flex' 
      }
    },
    isCaseActive(caseItem, index) {
      // Если нет активных направлений, отображаем первые шесть кейсов      
      if (this.activeDirections.length == 0 || this.activeDirections == undefined) {        
        return index < 6;
      }
      // Иначе отображаем кейсы, которые соответствуют активным направлениям
      return caseItem.directions.some(direction => this.activeDirections.includes(direction));
    },
    moreBtn(){
      this.activeDirections = [1,2,3,4,5,6]
      document.querySelector('.cases__more').style.display = 'none';
    }
  },
  mounted() {
    document.body.classList.add('light-theme');
  }
};
</script>
