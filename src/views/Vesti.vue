<template>
  <div>
    <TheHeader></TheHeader>
    <div id="vesti">
      <div id="title">
        <h3>Vesti</h3>
      </div>
      <div class="vesti">
        <div class="news-column-div">
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imagePython.url" />
            </div>
            <div>
              <router-link to="/kursevi"
                ><h3>Python - osnove programiranja</h3></router-link
              >
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imageWordpress.url" />
            </div>
            <div>
              <h3>WordPress - Online Shop</h3>
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imageCsharp.url" />
            </div>
            <div>
              <h3>ASP.NET - C# Kurs</h3>
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imageCsharp.url" />
            </div>
            <div>
              <h3>ASP.NET - C# Kurs</h3>
            </div>
          </div>
          </div>
        </div>
        <div class="news-column-div">
          <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imagePython.url" />
            </div>
            <div>
              <router-link to="/kursevi"
                ><h3>Python - osnove programiranja</h3></router-link
              >
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imagePython.url" />
            </div>
            <div>
              <router-link to="/kursevi"
                ><h3>Python - osnove programiranja</h3></router-link
              >
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imagePython.url" />
            </div>
            <div>
              <router-link to="/kursevi"
                ><h3>Python - osnove programiranja</h3></router-link
              >
            </div>
          </div>
        </div>
        <div>
          <div class="news-div">
            <div class="image-div">
              <img :src="images.imagePython.url" />
            </div>
            <div>
              <router-link to="/kursevi"
                ><h3>Python - osnove programiranja</h3></router-link
              >
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheHeader from "../components/base/TheHeader.vue";
import TheFooter from "../components/base/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      images: {
        imagePython: {
          url: require("../assets/course-images/Python-Training.png"),
          width: 100,
          height: 100,
        },
        imageWordpress: {
          url: require("../assets/course-images/wordpress-banner.jpg"),
          width: 100,
          height: 100,
        },
        imageCsharp: {
          url: require("../assets/course-images/c-sharp3.jpg"),
          width: 100,
          height: 100,
        },
      },
    };
  },
  methods: {},
};
</script>
<style>
#vesti {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1%;
}

.vesti {
  display: flex;
  flex-direction: column;
}

.news-column-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 5%;
}

#title {
  padding: 5% 0;
}

#title h3 {
  font-size: 45px;
}

.image-div {
  width: 250pt;
  height: 150pt;
}

.image-div img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

</style>
