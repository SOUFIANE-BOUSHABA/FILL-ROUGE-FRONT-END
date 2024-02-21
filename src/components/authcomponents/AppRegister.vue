<template>
  <div>
    <div class="mb-3 mt-4 color-div-login-register d-flex justify-content-center align-items-center gap-4">
      <router-link to="/userauth/login" class="link" exact active-class="active-link">Login</router-link>
      <router-link to="/userauth/register" class="link" exact active-class="active-link">Register</router-link>
    </div>

    <form @submit.prevent="register">
      <div class="mt-4 mb-4">
        <input v-model="firstName" type="text" class="form-control border-0 border-bottom rounded-0" placeholder="First Name">
      </div>

      <div class="mb-4">
        <input v-model="lastName" type="text" class="form-control border-0 border-bottom rounded-0" placeholder="Last Name">
      </div>

      <div class="mb-4">
        <input v-model="email" type="email" class="form-control border-0 border-bottom rounded-0" placeholder="Email">
      </div>

      <div class="mb-4">
        <input v-model="password" type="password" class="form-control border-0 border-bottom rounded-0" placeholder="Password" id="password">
      </div>

      <div class="mb-4 form-check">
        <input v-model="acceptConditions" type="checkbox" class="form-check-input" id="acceptConditions">
        <label class="form-check-label" for="acceptConditions">Accept all conditions</label>
      </div>

      <button type="submit" class="color-btn w-100">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptConditions: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
        });

       console.log(response.data);
       this.$router.push('/userauth/login');

      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
  },
};
</script>


<style scoped>
.color-div-login-register{
  background-color:#EBEEFE;
  height:70px;
}
.link{
  padding:10px 40px;
  text-decoration:none;
  color:black;
}
.active-link{
  background-color:white;

}

.link:hover{
  background-color:white;
}

</style>
