<template>
  <nav :class="[isSticky ? stickyClass : '']" id="top">
    <div>
     <router-link to="/"><img src="../../assets/logo.png" alt="NIT logo" class="logo" /></router-link>
    </div>

    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <i class="fas fa-bars nav-icon"></i>
    </button>

    <ul class="main-nav" :class="{ visible: isVisible }" id="main-nav">
      <li><router-link to="/">Početna</router-link></li>
      <li><a href="#" v-scroll-to="'#about'">O nama</a></li>
      <li><a href="#" v-scroll-to="'#courses'">Treninzi i obuke</a></li>
      <li><a href="#" v-scroll-to="'#news'">Vesti</a></li>
      <li><a href="#" v-scroll-to="'#business-incubator'">Biznis inkubator</a></li>
      <li><a href="#" v-scroll-to="'#team'">Tim</a></li>
      <li><router-link to="/kontakt">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isSticky: false,
      stickyClass: "sticky",
      scrollPosition: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  umounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 45px;
}

nav {
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10%;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transition: all 0.8s;
  margin-bottom: 100px;
}

.sticky {
  position: fixed;
  top: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 10%);
  
}

.main-nav {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav li {
  margin-left: 20px;
}

.main-nav li a:link,
.main-nav li a:visited,
.main-nav.visible li a:link,
.main-nav.visible li a:visited {
  padding: 8px 0;
  text-decoration: none;
  color: #7b909a;
  text-transform: uppercase;
  font-size: 18px;
  transition: border-bottom 0.5s;
}

.main-nav li a:hover,
.main-nav li a.router-link-active {
  color: #009cea;
}

.navbar-toggler {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: none;
}

.navbar-toggler .nav-icon {
  font-size: 25px;
}

@media screen and (max-width: 1124px) {

  .logo {
    height: 40px;
  }

}

@media screen and (max-width: 767px) {
  
  .logo {
    height: 30px;
  }
  .navbar-toggler {
    position: absolute;
    right: 20px;
    /* top: 40px; */
    display: block;
    color: #009cea;
    z-index: 1;
  }

  .main-nav {
    opacity: 0;
    pointer-events: none;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.6s ease;
  }

  .main-nav.visible {
    background-color: rgb(255, 254, 254);
    transform: scaleY(1);
    display: flex;
    flex-direction: column;
    opacity: 1;
    pointer-events: inherit;
    position: absolute;
    right: 0;
    width: 100%;
    padding-top: 550px;
    height: auto;
  }

.main-nav.visible li {
   padding: 20px;
}

  .main-nav .visible li a,
  .main-nav .visible li a {
    color: #7b909a;
    
  }

  .main-nav.visible li a:hover,
  .main-nav.visible li a.router-link-active {
    color: #009cea;
  }


}

@media screen and (max-width: 480px) {
  
}
</style>