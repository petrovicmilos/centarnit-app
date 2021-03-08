<template>
  <div
    class="swiper-container"
    style="margin: 100px 7%; box-shadow: 0px 1px 3px rgb( 0 0 0 / 5%);"
    id="business-incubator"
  >
    <div style="margin: 40px auto 40px auto">
      <swiper
        Autoplay="true"
        :slides-per-view="4"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        virtual
      >
        <swiper-slide
          :loop="true"
          v-for="(image, index) in images"
          :key="image"
          :virtualIndex="index"
        >
          <img :src="image[0]" class="imageHover" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import SwiperCore, { Scrollbar, A11y, Virtual, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Scrollbar, A11y, Virtual, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        [require("../../assets/business-incubator-images/bausharp.png")],
        [require("../../assets/business-incubator-images/bausharp2.png")],
        [require("../../assets/business-incubator-images/ikresoft.jpg")],
        // [require("../../assets/klasternit.png"), "100px", "150px"],
        [require("../../assets/business-incubator-images/klinika.png")],
        [require("../../assets/business-incubator-images/REZ.png")],
        [require("../../assets/business-incubator-images/Skayon-logo-1.png")],
        [require("../../assets/business-incubator-images/unitedWeStand.jpg")],
      ],
    };
  },
  mounted() {
    console.log("businessIncubator mounted");
  },
};
</script>
<style scoped>
img {
  height: 180px;
  width: 180px;
  margin: 10px 20px;
  padding-bottom: 20px;
}
.imageHover:hover {
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  cursor: pointer;
}

@media screen and (max-width: 760px) {
}
</style>
