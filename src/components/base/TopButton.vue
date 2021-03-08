<template>
  <div>
    <a href="#" :class="[isVisible ? 'visible' : 'unvisible']"><i class="fas fa-arrow-circle-up"></i
    ></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    buttonState() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 800) {
        this.isVisible = true;
        
      } else {
        this.isVisible = false;
      }
    }, 
  },
  mounted() {
    window.addEventListener("scroll", this.buttonState);
  },
  umounted() {
    window.removeEventListener("scroll", this.buttonState);
  },
}
</script>
<style scoped>
i{
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 99;
  color: white;
  background-color: #4f46e5;
  border-radius: 45px;
  font-size:2.5rem;
}

.unvisible { 
  display: none;
}
 .visible { 
   display: block;
 }
</style>
