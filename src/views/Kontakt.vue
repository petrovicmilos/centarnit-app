<template>
  <div>
    <TheHeader></TheHeader>
    <TopButton></TopButton>
    <div id="kontakt">
      <div class="kontakt">
        <div class="kontakt-header">
          <h3>Kontakt</h3>
          <p>Zajedno kreirajmo napredak za sjajan posao i super ideje</p>
        </div>
        <div class="content">
          <div class="kontakt-about">
            <div class="kontakt-info">
              <div class="kontakt-info-child">
                <div class="i-div">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-right">
                  <h4>Location: </h4>
                  <p>Avnoja 6 (Stara Lucna zgrada), Novi Pazar 36300</p>
                </div>
              </div>
              <div class="kontakt-info-child">
                <div class="i-div">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-right">
                  <h4>Email: </h4>
                  <p><a href="mailto: info@riscnovipazar.rs">info@riscnovipazar.rs</a></p>
                </div>
              </div>
              <div class="kontakt-info-child">
                <div class="i-div">
                  <i class="fas fa-phone-alt"></i>  
                </div>
                <div class="info-right">
                  <h4>Telefon: </h4>
                  <p><a href="tel: +381 61 2 804 408">+381 61 2 804 408</a></p>
                </div>
              </div>
            </div>
            <div class="kontakt-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d363.9034229710063!2d20.515679958915815!3d43.141754250910175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475629e77c95af61%3A0xc9dc6e9c50278056!2sRegionalni%20inovacioni%20startap%20centar%20Novi%20Pazar!5e0!3m2!1ssr!2srs!4v1614250683152!5m2!1ssr!2srs"
                width="450"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="kontakt-form">
            <h3>Kontaktirajte Nas</h3>
            <form action="">
              <div class="input-div">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
              </div>
                <input type="text" name="subject" placeholder="Subject">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <the-button
                text="Send Message"
                width="170"
                height="50"
              ></the-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>
<script>
import TheButton from "../components/base/TheButton.vue";
import TheHeader from "../components/base/TheHeader.vue";
import TheFooter from "../components/base/TheFooter.vue";
import TopButton from "../components/base/TopButton.vue"
export default {
  components: {
    TheButton,
    TheHeader,
    TheFooter,
    TopButton
  },
  data() {
    return {};
  },
};
</script>
<style scoped>

#kontakt {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1%;
}

.kontakt-header {
  /* box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 10%); */
  padding: 5% 0;
}

.kontakt-header h3 {
  font-size: 45px;
}

.kontakt-header p {
  font-size: 20px;
}

.content {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  flex-wrap: wrap;
}

.kontakt-about {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 10%);
}

.kontakt-info {
  text-align: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
}

.kontakt-info-child {
  display: flex;
  align-items: center;
  padding: 10px 30px;
}

.info-right {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  margin-left: 40px;
}

.info-right p {
  margin-top: -5px;
  font-size: 1.04rem;
}

.info-right a {
  text-decoration: none;
  color: #4f46e5;
}

.i-div {
  background-color: #f2f3f7;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
}

 .kontakt-info-child:hover .i-div {
  background: #4f46e5;
  color: white;
}

.kontakt-info-child i {
  font-size: 20px;
}

.kontakt-form {
  box-sizing: border-box;
  width: 700px;
  padding-top: 1%;
}

.kontakt-form h3 {
  text-align: left;
  font-size: 2rem;
}

.input-div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;
}

.kontakt-form input {
  width: 100%;
  /* height: 50px; */
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #f2f3f7;
  outline: none;
}

.input-div input {
  width: 310px;
  /* height: 50px; */
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #f2f3f7;
  outline: none;
}

.kontakt-form form {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.kontakt-form textarea {
  margin: 4% 0;
  border: none;
  background-color: #f2f3f7;
  border-radius: 10px;
  outline: none;
  padding: 15px;
}

@media screen and (max-width: 767px) {

  .kontakt {
    margin-top: 20%;
  }

  .kontakt-header h3 {
    font-size: 30px;
  }

  .kontakt-header p {
    font-size: 17px;
  }

  .content {
    flex-direction: column;
    padding: 0;
  }

  .input-div {
    flex-direction: column;
    width: 100%;
    box-sizing: inherit;
  }

  .kontakt-form input {
    margin-top: 3%;
  }
  .input-div input {
    margin-top: 6%;
    width: 100%;
  }

  .kontakt-form textarea {
    margin-top: 8%;
  }

  .kontakt-form {
    width: 100%;
  } 

  iframe {
    width: 100%;
    height: 400px;
  }

  .kontakt-info {
    width: 100%;
  }

}


</style>