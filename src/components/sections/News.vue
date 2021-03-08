<template>
  <div id="news">
    <div class="news-title">
      <h2>Vesti</h2>
    </div>
    <div class="news">
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
    </div>
    <div class="news-button-div">
      <router-link to="/vesti"
        ><the-button
          text="Više"
          width="170"
          height="50"
        ></the-button
      ></router-link>
    </div>
  </div>
</template>
<script>
import TheButton from "../base/TheButton.vue";

export default {
  components: {
    TheButton,
  },
  data() {
    return {
      images: {
        imagePython: {
          url: require("../../assets/course-images/Python-Training.png"),
          width: 100,
          height: 100,
        },
        imageWordpress: {
          url: require("../../assets/course-images/wordpress-banner.jpg"),
          width: 100,
          height: 100,
        },
        imageCsharp: {
          url: require("../../assets/course-images/c-sharp3.jpg"),
          width: 100,
          height: 100,
        },
      },
      hover: false,
    };
  },
};
</script>
<style scoped>
#news {
  padding: 5% 60px;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  overflow-x: hidden;
}

.news {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
}

.news-title {
  text-align: center;
  margin-bottom: 3%;
}

.news h3 {
  margin: 5px 0 0 15px;
}

.news-button-div {
  margin-top: 60px;
  text-align: center;
}

.news-div {
  transition: all 0.9s ease;
}

.news-div:hover {
  margin-top: -30px;
}

.image-div {
  width: 350pt;
  height: 230pt;
}

.image-div img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

@media screen and (max-width: 1124px) {
  .news {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .news {
    flex-direction: column;

  }

  .news-div {
    padding: 8% 0;
  }

  .news-div h3 {
    margin-top: 20px;
  }

  .news-button-div {
    margin-top: 10px;
  }

  .image-div {
    width: 100%;
    height: 150pt;
    margin-top: 20px;
  }
}
</style>