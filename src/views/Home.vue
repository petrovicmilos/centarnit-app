<template>
  <div>
    <div class="hero">
      <TheHeader></TheHeader>
      <Slider></Slider>
      <TopButton></TopButton>
    </div>
    <div>
      <About></About>
      <Courses></Courses>
      <News></News>
      <BusinessIncubator ></BusinessIncubator>
      <TheTeam></TheTeam>
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/base/TheHeader.vue";
import Slider from "../components/sections/Slider.vue";
import News from "../components/sections/News.vue";
import About from "../components/sections/About.vue";
import BusinessIncubator from "../components/sections/BusinessIncubator.vue";
// import BusinessIncubator2 from '../components/sections/BusinessIncubator2.vue'
import TheTeam from "../components/sections/TheTeam.vue";
import TheFooter from "../components/base/TheFooter.vue";
import Courses from '../components/sections/Courses.vue';
import TopButton from '../components/base/TopButton.vue';


export default {
  name: "Home",
  components: {
    TheHeader,
    Slider,
    TheFooter,
    TheTeam,
    News,
    BusinessIncubator,  
    // BusinessIncubator2,
    About,
    Courses,
    TopButton
}
}
</script>

<style scoped>

@media only screen and (max-width: 480px) {
  .hero {
    background: none;
  }
  the-team {
    width: 100%;
  }
}
the-footer {
  margin-top: 10pt;
  margin-bottom: 0%;
  padding: 10pt;
}
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
