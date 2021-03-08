<template>
  <div class="card"  
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <div class="smaller">
      <the-image :url1="image" :height="90" :width="90"></the-image>
    </div>
    <div class="bigger">
      <p>
        <strong id="key">{{ title }}</strong>
      </p>
      <p>
        <i>{{ subtitle }}</i>
      </p>
      <div class="extraInfos">
      <div v-if="hover">
        <p id="pInfos">
          <i class="fas fa-envelope"></i>&emsp;<a :href="['mailto:'+mail]">{{mail}}</a><br />
           <i class="fas fa-phone-alt"></i> &emsp;<a :href="['tel:'+phone]">{{ phone }}</a>
        </p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheImage from "../base/TheImage.vue";
export default {
  components: { TheImage },
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    key: {
      type: Number,
    },
  },
  data() {
    return {
      hover: false,
      mobile : false,
    }
  },
  methods: {
    resize(){
      if (this.mobile.matches) this.hover=true;
      else this.hover = false;
    }
  },
  // beforeUnmount() {
  //   this.mobile.removeListener();
  // },
  // mounted() {
  //   this.mobile=window.matchMedia('(max-width:700px)');
  //   this.resize();
  //   this.mobile.addListener(this.resize);
  // },

}
</script>
<style scoped>
.card {
  margin: auto;
  border-radius: 5pt;
  display: flex;
  flex-direction: column;
  padding: auto;
  color: #776b6b;
  min-height: 315px;
  min-width: 300px;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
}

.smaller {
  height: 220px;
  display: inline-block;
  width: 200px;
}

.bigger {
  text-align: center;
}

.extraInfos i {
  border-radius: 5px;
  color:#6b9dcf;
  font-size: 20px;
}

#pInfos {
  text-align: justify;
  margin-left: 35px;
  line-height: 1.8;
  font-size: 13px;
}

strong {
  font-size: 13pt;
  color: #233862;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; 
}

i {
  font-size: 14px;
}

@media (max-width: 1120px) {

}
</style>
