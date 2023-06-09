<template>
  <div>
    <div class="dashboard">
      <nav class="navbar">
        <div class="left-nav-content">
          <div class="left-nav-content-item">
            <router-link to="/"><i class="fas fa-home"> Visit Site</i></router-link>
          </div>
        </div>
        <div class="right-nav-content">
          <div>
            <p>Howdy, admin</p>
          </div>
          <div>
            <img src="../assets/logo.png" alt="NIT logo" class="logo">
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="sidebar">
          <div class="sidebar-item">
              <a href="#"><i class="far fa-newspaper"> News</i></a>
          </div>
        </div>
        <div class="rightbar">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import TheButton from "../components/base/TheButton.vue";
export default {
  // components: { TheButton },
};
</script>
<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  height: 5rem;
  padding: 20px 0px;
  color: white;
}

.left-nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-nav-content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 2%;
}

.left-nav-content-item .fas{
  font-size: 20px;
}

.right-nav-content {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
}

.content {
  display: flex;
  height: 90vh;
}

.sidebar {
  background-color: #333;
  width: 12%;
  height: 100%;
  padding-top: 3%;
  padding-left: 2%;
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  color: white;
  font-size: 20px;
  
}

.rightbar {
  width: 88%;
}
</style>