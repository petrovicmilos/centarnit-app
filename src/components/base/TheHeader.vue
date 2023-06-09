<template>
  <nav :class="[isSticky ? stickyClass : '']">
    <div>
      <router-link to="/"
        ><img src="../../assets/logo.png" alt="NIT logo" class="logo"
      /></router-link>
    </div>

    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <i class="fas fa-bars nav-icon"></i>
    </button>

    <ul class="main-nav" :class="{ visible: isVisible }" id="main-nav">
      <li><router-link class="home" to="/">Početna</router-link></li>
      <li>
        <router-link class="about" :to="{ path: '/', hash: '#about' }"
          >O nama</router-link
        >
      </li>
      <li>
        <router-link class="courses" :to="{ path: '/', hash: '#courses' }"
          >Treninzi i obuke</router-link
        >
      </li>
      <li>
        <router-link class="news" :to="{ path: '/', hash: '#news' }">Vesti</router-link>
      </li>
      <li>
        <router-link class="business-incubator" :to="{ path: '/', hash: '#business-incubator' }"
          >Biznis inkubator</router-link
        >
      </li>
      <li>
        <router-link class="team team-li" :to="{ path: '/', hash: '#team' }">Tim</router-link>
      </li>
      <li class="contact-li"><router-link to="/kontakt">Kontakt</router-link></li>
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
    scrollSpy() {
      let wind = window.pageYOffset;

      // let home = document.querySelector('#main-nav'); 
      let about = document.querySelector('#about'); 
      let courses = document.querySelector('#courses');
      let news = document.querySelector('#news');
      let businessIncubator = document.querySelector('#business-incubator');
      let team = document.querySelector('#team');

      let homeLInk = document.querySelector('.home');
      let aboutLInk = document.querySelector('.about');
      let coursesLInk = document.querySelector('.courses');
      let newsLInk = document.querySelector('.news');
      let businessIncubatorLInk = document.querySelector('.business-incubator');
      let teamLInk = document.querySelector('.team');

      
       if (about.offsetTop - 200 <= wind && courses.offsetTop - 200 > wind) {
       aboutLInk.classList.add("active");
       homeLInk.classList.remove("active");
       coursesLInk.classList.remove('active');
       newsLInk.classList.remove('active');
       businessIncubatorLInk.classList.remove('active');
       teamLInk.classList.remove('active');
      }
      else if (courses.offsetTop - 200 <= wind && news.offsetTop - 300 > wind) {
        coursesLInk.classList.add('active');
        homeLInk.classList.remove("active");
       aboutLInk.classList.remove("active");
       newsLInk.classList.remove('active');
       businessIncubatorLInk.classList.remove('active');
       teamLInk.classList.remove('active');
      }
      else if (news.offsetTop - 500 <= wind && businessIncubator.offsetTop - 500 > wind) {
        newsLInk.classList.add('active');
        homeLInk.classList.remove("active");
        coursesLInk.classList.remove('active');
       aboutLInk.classList.remove("active");
       businessIncubatorLInk.classList.remove('active');
       teamLInk.classList.remove('active');
      }
      else if (businessIncubator.offsetTop - 500 <= wind && team.offsetTop - 500> wind) {
        businessIncubatorLInk.classList.add('active');
        homeLInk.classList.remove("active");
        coursesLInk.classList.remove('active');
       aboutLInk.classList.remove("active");
       newsLInk.classList.remove('active');
       teamLInk.classList.remove('active');
      }
      else if (team.offsetTop - 200 <= wind) {
        teamLInk.classList.add('active');
        homeLInk.classList.remove("active");
        coursesLInk.classList.remove('active');
       aboutLInk.classList.remove("active");
       newsLInk.classList.remove('active');
       businessIncubatorLInk.classList.remove('active');
      }
      else {
       homeLInk.classList.add("active");
       aboutLInk.classList.remove("active");
       coursesLInk.classList.remove('active');
       newsLInk.classList.remove('active');
       businessIncubatorLInk.classList.remove('active');
       teamLInk.classList.remove('active');
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.scrollSpy);
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

.active {
  color: #009cea !important;
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
.main-nav .contact-li a.router-link-active {
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

  .main-nav.visible li a:hover {
    color: #009cea;
  }
}

@media screen and (max-width: 480px) {
}
</style>
