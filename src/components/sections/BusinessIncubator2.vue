<template>
  <div>
    <image-slider :images="images"></image-slider>
  </div>
</template>
<script>
import ImageSlider from "../base/ImageSlider.vue";
export default {
  components: { ImageSlider },
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
};
</script>
<style></style>
