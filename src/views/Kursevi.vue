<template>
  <div>
    <TheHeader></TheHeader>
    <TopButton></TopButton>
    <div>
      <div class="courses">
        <div class="courses-about">
          <h1>ZAPOČNIMO AVANTURU</h1>
          <p>
            Započnite karijeru i otkrijte svoju profesiju u IT industriji. Puno
            vežbe i praktičnog rada i posao vas čeka!
          </p>
          <p><strong>
            Kurseve organizujemo u saradnji sa Regionalnim Inovacionim Startup
            Centrom Novi Pazar
          </strong></p>
        </div>
        <div class="courses-grid">
            <div class="course-div" data-aos="fade-right" data-aos-once="true" v-for="course in courses" :key="course">
        <div class="course-img">
          <img :src="course.img" alt="" />
        </div>
        <div class="course-text">
            <h4>{{ course.title }}</h4>
            <ul class="first-ul">
                <li>Trajanje: 3 meseca</li>
                <li>Nastava 3 puta nedeljno</li>
            </ul>
            <ul>
                <li>Predavac: {{ course.predavac }}</li>
            </ul>
        </div>
        <div class="course-link"></div>
      </div>
        </div>
      </div>
    </div>
  <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheHeader from "../components/base/TheHeader";
import TheFooter from "../components/base/TheFooter";
import TopButton from "../components/base/TopButton.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
    TopButton
  },
  data() {
      return {
          courses: [
              {
                  img: require('../assets/course-images/python-logo.png'),
                  title: 'Python - osnove programiranja',
                  predavac: 'Džemil Dupljak'
              },
              {
                  img: require('../assets/course-images/wordpress-logo.png'),
                  title: 'WordPress - Online Shop',
                  predavac: 'Jasmin Husovic'
              },
              {
                  img: require('../assets/course-images/angular-logo.png'),
                  title: 'AngularJS',
                  predavac: '#'
              },
              {
                  img: require('../assets/course-images/csharp-logo.png'),
                  title: 'C# osnove',
                  predavac: 'Dragan Pepić'
              },
              {
                  img: require('../assets/course-images/blazor-logo.png'),
                  title: 'ASP.Net Blazor – osnove i aplikacija',
                  predavac: 'Dragan Pepić'
              },
              {
                  img: require('../assets/course-images/net-logo.png'),
                  title: 'ASP.NET - C# Kurs',
                  predavac: 'Dragan Pepić'
              },
              {
                  img: require('../assets/course-images/vue-logo.png'),
                  title: 'Vue.js',
                  predavac: '#'
              },
          ],
      }
  },
};
</script>
<style scoped>

.courses {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.courses-about {
    display: block;
    text-align: center;
}

.courses-about h1 {
    font-size: 45px;
}

.courses-about p {
    padding-top: 10px;
    font-size: 18px;
}

.courses-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 70px;
  grid-column-gap: 100px;
  justify-content: center; 
  padding: 5%; 
}

.course-div {
  box-sizing: border-box;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 10%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: scale(1);
  transition: all 0.9s ease;
  
}

.course-div:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.course-text h4 {
  font-weight: 600;
  font-size: 20px;
}

.course-text ul {
    text-align: left;
    list-style-type: square;
}

.course-img img {
    width: auto;
    height: 100px;
}


@media screen and (max-width: 760px) {

    .courses {
      margin: 130px 0;
    }

    .courses-about {
    display: block;
    text-align: center;
    }

    .courses-about h1 {
        font-size: 30px;
    }

    .courses-about p {
        padding-top: 10px;
        font-size: 18px;
    }

   .courses-grid {
     margin: 50px 0;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     padding: 5%; 
   }

   .course-div {
    box-sizing: border-box;
    width: 100%;
   }

   .course-div:hover {
     transform: scale(1);
  }
}

</style>