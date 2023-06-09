<template>
  <div class="columns w3-container w3-row-padding">
    <div class="w3-quarter w3-container firstCol">
      <the-image
        :url1="source"
        :height="20"
        :width="30"
        id="logo-footer"
        style="margin-left:70px"
      >
      </the-image>
      <!-- <p>
          Inkubacija - Stvaranje odgovarajućeg okruženja za razvoj novih
          startapova
        </p> -->
    </div>
    <div class="w3-quarter">
      <b>Posetite nas i na društvenim mrežama!</b>
      <ul>
        <li class="icons">
          <a href="https://twitter.com/CenterNit">
            <i
              class="fab fa-facebook-square"
              style="color:#08a0e9; font-size:40px"
              data-toggle="popover"
              title="Twitter"
            ></i>
          </a>
        </li>
        <li class="icons">
          <a href="https://www.facebook.com/centar.nit/">
            <i
              class="fab fa-twitter-square"
              style="color:#3B5998; font-size:40px"
              data-toggle="popover"
              title="Facebook"
            >
            </i>
          </a>
        </li>
        <li class="icons">
          <a href="https://www.instagram.com/nit.center/">
            <i
              class="fab fa-instagram"
              data-toggle="popover"
              title="Instagram"
              style="background: linear-gradient(to bottom right, #515BD4, #8134AF, #DD2A7B, #FEDA77, #F58529);background-clip: text; -webkit-background-clip: text; -moz-background-clip: text;
  -moz-text-fill-color: transparent; -webkit-text-fill-color: transparent; font-size:40px"
            ></i>
          </a>
        </li>
        <li class="icons">
          <a href="https://www.linkedin.com/company/center-nit/">
            <i
              class="fab fa-linkedin"
              style="color:#0077B5; font-size:40px"
              data-toggle="popover"
              title="Linkedin"
            >
            </i>
          </a>
        </li>
      </ul>
    </div>
    <div class="w3-quarter firstCol">
      <i>Eksterni linkovi</i><br />
      <ul>
        <li><a href="">Link1</a></li>
        <li><a href="">Link2</a></li>
        <li><a href="">Link3</a></li>
        <li><a href="">Link4</a></li>
      </ul>
    </div>
    <div class="w3-quarter fourth">
      <h1>
        <b>Budite u toku, pratite nas!</b>
      </h1>
      <div class="subscribe">
        <input type="email" />
        <the-button :text="text" :width="170" :height="35"></the-button>
      </div>
    </div>
  </div>
  <div class="bottom">
    <p class="text-center text-white" style="margin-top:10px;">
      ©<b> Centar NIT </b>All Rights Reserved
    </p>
  </div>
</template>
<script>
import TheButton from "./TheButton.vue";
import TheImage from "./TheImage.vue";

export default {
  components: {
    TheButton,
    TheImage,
  },
  data() {
    return {
      text: "Prijavite se",
      color: "#4f46e5",
      source: require("../../assets/klaster-logo-final-1.png"),
    };
  },
  mounted() {},
};
</script>
<style scoped>
.columns {
  background-color: #f4f7fa;
  margin-top: 30px;
}
.w3-quarter {
  display: block;
  margin: auto;
  padding-top: 70px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 13px;
}

.firstCol {
  width: 20%;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
  list-style-type: none;
}

.icons li {
  display: inline-block;
  width: 40pt;
}

li i {
  width: 100%;
}

h1 {
  font-size: 17px;
}

.bottom {
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #233862;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  padding: 10px;
}

.bottom p {
  color: white;
  text-align: center;
  padding: 0.5%;
}

.fourth {
  width: 30%;
}
.fourth input {
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  width: 80%;
  height: 35px;
  margin-right: 30px;
}

.subscribe {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

@media screen and (max-width: 1440px) {
  .subscribe {
    flex-direction: column;
  }
}

@media screen and (max-width: 993px) {
  .w3-quarter {
    width: 50%;
  }
  .firstCol {
    width: 45%;
  }
  h1 {
    font-size: 15px;
  }
  .subscribe {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 601px) {
  #logo-footer {
    padding-left: 25%;
  }
  .fourth {
    width: 100%;
  }

  input {
    width: 100%;
    max-width: 570px;
  }

  .w3-quarter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: auto;
    min-width: 296px;
  }
  .subscribe {
    width: 100%;
    padding: auto 20%;
  }
}
</style>
