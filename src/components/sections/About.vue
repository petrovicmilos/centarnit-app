<template>
  <div ref="about" id="about">
    <div class="about">
      <div
        class="about-title"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <h2>O nama</h2>
      </div>
      <div class="about-content">
        <div class="about-img" data-aos="zoom-in-down" data-aos-once="true">
          <img src="../../assets/aboutus-img.png" alt="" />
        </div>
        <div class="about-text">
          <h2 data-aos="fade-left" data-aos-once="true">Centar NIT</h2>
          <p data-aos="fade-left" data-aos-once="true">
            Ono što odlikuje Centar NIT je otvorenost za nove ideje i projekte
            <br />
            kao i spremnost da izađemo u susret onima koji smatraju da im naši
            <br />
            resursi mogu biti od pomoći a takođe imamo otvorena vrata za sva
            lica <br />
            organizacije i pojedince koji smatraju da mogu dati doprinos radu
            <br />
            centra.
          </p>
          <ul>
            <li data-aos="fade-left" data-aos-once="true"><i class="fas fa-briefcase"></i> Razvoj poslovnih ideja</li>
            <li data-aos="fade-left" data-aos-once="true"><i class="fas fa-building"> </i> Kancelarijska podrška</li>
            <li data-aos="fade-left" data-aos-once="true">
              <i class="fas fa-laptop-code"></i> Edukacija u oblasti primene 
              IT-a
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 2px 15px rgb(0 0 0 / 8%); */
  -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  -moz-box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  margin-top: 5%;
}

.about-title h2 {
  text-align: center;
  font-size: 50px;
  margin-top: 5%;
}

.about-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 140px;
}

.about-text h2 {
  font-size: 40px;
  font-weight: 500px;
}

.about-text p {
  font-style: italic;
  margin-bottom: 15px;
  font-size: 20px;
}

.about-text ul {
  list-style-type: none;
 
}

.about-text ul li {
  font-size: 17px;
}

.about-text ul li i {
  padding: 0 1%;

}

.about-img img {
  width: auto;
  height: 600px;
}

@media screen and (max-width: 760px) {

.about-text {
  text-align: center;
  padding: 10% 3%;
  display: block;
}

.about-text h2 {
  display: none;
}

.about-text ul {
  text-align: left;

}

.about-text ul li {
  font-size: 20px;
  
}


.about-img img {
  display: none;
}



}
</style>