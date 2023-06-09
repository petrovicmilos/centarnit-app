<template>
  <div id="courses">
    <div class="course-title">
      <h2>Treninzi i obuke</h2>
    </div>
    <div class="courses">
      <div class="course-div" data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
        <div class="course-img">
          <img src="../../assets/course-images/python-logo.png" alt="" />
        </div>
        <div class="course-text">
            <h4>Python - osnove programiranja</h4>
            <ul class="first-ul">
                <li>Trajanje: 3 meseca</li>
                <li>Nastava 3 puta nedeljno</li>
            </ul>
            <ul>
                <li>Predavac: Dzemil Dupljak</li>
            </ul>
        </div>
        <div class="course-link"></div>
      </div>
      <div class="course-div" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
        <div class="course-img">
          <img src="../../assets/course-images/wordpress-logo.png" alt="" />
        </div>
        <div class="course-text">
            <h4>WordPress - Online Shop</h4>
            <ul>
                <li>3 meseca</li>
                <li>Nastava 3 puta nedeljno</li>
                <li>Predavac: Jasmin Husovic</li>
                
            </ul>
        </div>
        <div class="course-link"></div>
      </div>
      <div class="course-div" data-aos="fade-right" data-aos-delay="500" data-aos-once="true">
        <div class="course-img">
          <img src="../../assets/course-images/angular-logo.png" alt="" />
        </div>
        <div class="course-text">
            <h4>AngularJS</h4>
            <ul>
                <li>3 meseca</li>
                <li>Nastava 3 puta nedeljno</li>
                <li>Predavac: #</li>
            </ul>
        </div>
        <div class="course-link"></div>
      </div>
      <div class="course-div" data-aos="fade-left" data-aos-delay="600" data-aos-once="true">
        <div class="course-img">
          <img src="../../assets/course-images/csharp-logo.png" alt="" />
        </div>
        <div class="course-text">
            <h4>C# osnove</h4>
            <ul>
                <li>3 meseca</li>
                <li>Nastava 3 puta nedeljno</li>
                <li>Predavac: Dragan Pepic</li>
                
            </ul>
        </div>
        <div class="course-link"></div>
      </div>
    </div>
    <div class="button-div">
        <router-link to="/kursevi"
        ><the-button
          data-aos="fade-down"
          data-aos-delay="700"
          data-aos-once="true"
          text="Svi kursevi"
          width="170"
          height="50"
        ></the-button
      ></router-link>
    </div>
  </div>
</template>
<script>
import TheButton from '../base/TheButton.vue';
export default {
  components: { TheButton },};
</script>
<style scoped>

#courses {
  display: flex;
  flex-direction: column;
  padding: 1% 0 6% 0;
  background-image: url("../../assets/cement-texture.jpg");
  background-size: cover;
  /* background-attachment: fixed; */
  overflow-x: hidden;
  
}


.courses {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5%;
    color: black;
}

.course-title {
  text-align: center;
  margin-top: 4%;
}

.course-div {
    box-sizing: border-box;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.course-img img {
    width: auto;
    height: 100px;
}

.button-div {
  text-align: center;
}

.course-text h4 {
    font-weight: 600;
    font-size: 20px;
}

.course-text ul {
    text-align: left;
    list-style-type: square;
}

@media screen and (max-width: 760px) {

#courses {
  padding: 5% 0;
}

  .courses {
    flex-direction: column;
    padding: 0;
    align-items: center;
    
  }

  .course-div {
    margin: 8% 0; 
    display: block;
    width: 100%;   
  }

  .course-text ul {
    padding: 0 25%;
    text-align: left;
  }
}

</style>
