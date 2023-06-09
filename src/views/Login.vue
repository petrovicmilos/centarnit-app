<template>
  <div>
    <div class="login-form">
      <div class="login-form-title">
        <h2>Login</h2>
      </div>
      <div class="border-div">
        <form @submit.prevent="loginUser">
          <div class="login-form-inputs">
            <i class="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="Username"
              v-model.trim="username.value"
              @blur="clearValidity('username')"
              :class="{invalid: !username.isValid}"
            />
            <i class="fas fa-lock icon2"></i>
            <input
              type="password"
              style="margin-top: 1.5rem"
              placeholder="Password"
              v-model.trim="password.value"
              @blur="clearValidity('password')"
              :class="{invalid: !password.isValid}"
            />
            <p v-if="!formIsValid" style="color: red;">Please enter valid form data.</p>
            <div class="login-form-button">
              <the-button text="Login" width="180"></the-button>
            </div>
          </div>
        </form>
        <div>
          <p>
            You don't have an account?
            <router-link to="/register">Register </router-link>first.
          </p>
        </div>
      </div>
    </div>
    <base-toast :show="visible" success text="Successful login!"></base-toast>
    <base-toast :show="!!error" error :text="error"></base-toast>
  </div>
</template>
<script>
import TheButton from "../components/base/TheButton.vue";
export default {
  components: {
    TheButton,
  },
  data() {
    return {
      username: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      },
      formIsValid: true,
      visible: false,
      error: '',
    };
  },
  methods: {
    //Method to remove error when unfocusing

    clearValidity(input) {
        this[input].isValid = true;
      },

      //Form validation method, checking if input is empty or password has less than 8 characters

      validateForm() {
        this.formIsValid = true;

        if(this.username.value === '') {
          this.username.isValid = false;
          this.formIsValid = false;
        }
        if(this.password.value === '' || this.password.value.length < 8) {
          this.password.isValid = false;
          this.formIsValid = false;
        }

      },

      //Method to login the user 

    loginUser() {
      this.validateForm();

      //Stops the logic from executing if form is not valid
      if(!this.formIsValid) {
          return;
        }

      //Object with the values from inputs
    
        const user = {
          username: this.username.value,
          password: this.password.value
        };
        
        this.$store.dispatch('users/loginUser', user).then(response => {
          if(response === 200) {
            this.visible = true;
          setTimeout(() => {
            this.visible = false;
            this.$router.replace('/admin');
          }, 2000);
          }
        }).catch(error => {
          this.error = error;
          setTimeout(() => {
            this.error = '';
          }, 2000);
        });
        
          
         
    },
  },
};
</script>
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
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
  margin-top: 1rem;
  text-align: center;
}

.login-form p {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.login-form p a {
  color: #064f98;
  text-decoration: none;
}

.login-form p a:hover {
  text-decoration: underline;
}

.border-div {
  border: 1px solid rgb(168, 167, 167);
  width: 25rem;
  padding-bottom: 1.3rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}

.invalid {
  border: 1px solid red !important;
}

</style>
