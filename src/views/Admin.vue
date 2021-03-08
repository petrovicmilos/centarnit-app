<template>
  <div>
    <div class="login-form">
      <div class="login-form-title">
        <h2>Admin Panel</h2>
      </div>
      <div class="border-div">
        <div class="login-form-inputs">
          <i class="fas fa-user icon"></i>
          <input type="text" />
          <i class="fas fa-lock icon2"></i>
          <input type="password" style="margin-top: 1.5rem"/>
        </div>
        <div class="login-form-button">
          <the-button text="Login" width="180"></the-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheButton from "../components/base/TheButton.vue";
export default {
  components: { TheButton },
};
</script>
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
}

.login-form-title {
  background-color: #064f98;
  color: white;
  width: 25rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
}

.login-form-inputs {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
}

.login-form-inputs i {
    position: absolute;
    font-size: 1.4rem;
    color: #064f98;
    text-align: left;
}

.login-form-inputs .icon {
    padding: 1.6rem 0 0 1.6rem;

}
.login-form-inputs .icon2 {
    padding: 6.4rem 0 0 1.6rem;

}

.login-form-inputs input {
  margin-top: 0.8rem;
  padding: 0.8rem;
  padding-left: 4rem;
  border-radius: 0.4rem;
  border: 1px solid rgb(168, 167, 167);
  outline: none;
}

.login-form-button {
  margin-top: 0.5rem;
  text-align: center;
}

.border-div {
    border: 1px solid rgb(168, 167, 167);
    width: 25rem;
    padding-bottom: 1.3rem;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
}


</style>