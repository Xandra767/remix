<template>
  <div class="popup-overlay" v-if="showPopup">
    <div class="popup-content">
      <video controls muted style="width: 100%; height: 100%;"
        src="https://dl.dropboxusercontent.com/s/8lu2i1s2ahx41x7/Шоурил.mp4?dl=0%22%20type=%27video/mp4" loop
        autoplay></video>
      <button class="popup-btn" @click="closePopup">
        <i>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" />
            <mask id="mask0_9_814" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="9" y="8" width="23"
              height="24">
              <rect x="9" y="8" width="23" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_9_814)">
              <mask id="mask1_9_814" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-1" y="-1" width="43"
                height="43">
                <rect x="-1" y="20.2132" width="30" height="30" transform="rotate(-45 -1 20.2132)" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask1_9_814)">
                <line x1="0.707076" y1="0.292893" x2="36.7071" y2="36.2929" stroke="#622DE1" stroke-width="2" />
                <line x1="3.29514" y1="37.2906" x2="36.5083" y2="4.29061" stroke="#622DE1" stroke-width="2" />
              </g>
            </g>
          </svg>

        </i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>