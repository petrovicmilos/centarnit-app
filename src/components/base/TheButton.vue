<template>
  <div>
    <button
      v-bind:style="{
        'background-color': color,
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <span>{{ text }}</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      default: "#064F98",
    },
    width: {
      default: 220,
    },
    height: {
      default: 40,
    },
  },
  // mounted() {
  //   console.log("mounted");
  // },
};
</script>
<style scoped>
button {
  border-radius: 5px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  width: 220px;
  transition: all 0.3s;
  cursor: pointer;
  /* margin: 5px; */
}

button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span::after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span::after {
  opacity: 1;
  right: 0;
}
</style>
