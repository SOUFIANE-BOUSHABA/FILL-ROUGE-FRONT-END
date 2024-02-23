<template>
  <div>
    <div class="mb-3 mt-4 color-div-login-register d-flex justify-content-center align-items-center gap-4">
      <router-link to="/userauth/login" class="link" exact active-class="active-link">Login</router-link>
      <router-link to="/userauth/register" class="link" exact active-class="active-link">Register</router-link>
    </div>

    <form @submit.prevent="login">
      <div class="mt-4 mb-4">
        <input v-model="email" type="email" class="form-control border-0 border-bottom rounded-0" placeholder="Email">
      </div>

      <div class="mb-4">
        <input v-model="password" type="password" class="form-control border-0 border-bottom rounded-0" placeholder="Password" id="password">
      </div>

      <div class="mb-4 form-check">
        <input v-model="rememberMe" type="checkbox" class="form-check-input" id="rememberMe">
        <label class="form-check-label" for="rememberMe">Remember me</label>
      </div>

      <button type="submit" class="color-btn w-100">Login</button>

      <div class="mt-3 opacity-50">
        <p class="text-decoration-none left">Have you forgotten your <router-link to="forgot" class="my-custom-color">password?</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;
        localStorage.setItem('jwt', token);
        console.log('Token stored:', token);
        this.$router.push('/personel/profile');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  },
};
</script>

<style scoped>
.color-div-login-register {
  background-color: #EBEEFE;
  height: 70px;
}
.link {
  padding: 10px 40px;
  text-decoration: none;
  color: black;
}
.active-link {
  background-color: white;
}

.link:hover {
  background-color: white;
}
</style>
