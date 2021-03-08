<template>
  <section class="container">
    <router-view/>
  </section>
</template>

<style> 

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    background-color: rgba(240, 239, 245, 0.025);
    color: rgb(78, 78, 78);
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.container {
  margin: auto;
  height: 100%;
  margin-top: 100px;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0;

  }
  .col-1-of-2 {
    width: 100%;
    margin: 0;
  }
  }
  
@media (max-width: 900px) {
  .container {
    width: 100%;
  }
}


</style>
