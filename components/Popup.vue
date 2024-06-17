<template>
  <div ref="videoContainer">
    <iframe 
      :src="videoUrl" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      @load="checkYTAPI"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      observer: null,
      isYTAPILoaded: false
    };
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}?enablejsapi=1&autoplay=0&mute=1`;
    }
  },
  mounted() {
    this.loadYTAPI();
    this.createObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    loadYTAPI() {
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = this.onYTAPIReady;
      } else {
        this.isYTAPILoaded = true;
      }
    },
    onYTAPIReady() {
      this.isYTAPILoaded = true;
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
        event.target.playVideo();
      }
    },
    createObserver() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.isYTAPILoaded) {
            this.playVideo();
          }
        });
      });

      this.observer.observe(this.$refs.videoContainer);
    },
    playVideo() {
      if (this.player) {
        this.player.playVideo();
      } else {
        const iframe = this.$refs.videoContainer.querySelector('iframe');
        this.player = new YT.Player(iframe, {
          events: {
            'onReady': event => {
              event.target.playVideo();
            },
            'onStateChange': this.onPlayerStateChange
          }
        });
      }
    },
    checkYTAPI() {
      if (this.isYTAPILoaded) {
        this.playVideo();
      }
    }
  }
};
</script>

<style scoped>
/* Добавьте любые стили, если это необходимо */
</style>
