
<template>
  
          
    <div class="mb-3 mt-4 color-div-login-register   d-flex justify-content-center align-items-center gap-4">
      <router-link to="/userauth/login" class="link" exact active-class="active-link">Login</router-link>
      <router-link to="/userauth/register" class="link" exact active-class="active-link">Register</router-link>
    </div>

    <form>
      <div class=" mt-4 mb-4">
        <input type="text" class="form-control border-0 border-bottom rounded-0"  placeholder="First Name">
      </div>
      <div class="mb-4">
        <input type="text" class="form-control border-0 border-bottom rounded-0" placeholder="Last Name">
      </div>
      <div class="mb-4">
        <input type="email" class="form-control border-0 border-bottom rounded-0" placeholder="Email">
      </div>
      <div class="mb-4">
        <input type="password" class="form-control border-0 border-bottom rounded-0" placeholder="password" id="password">
      </div>

      <div class="mb-4 form-check">
        <input type="checkbox" class="form-check-input" id="rememberMe">
        <label class="form-check-label" for="rememberMe">Accepte all conditions</label>
      </div>

      <button type="submit" class="color-btn w-100">Register</button>

    </form>

</template>

<script>
export default {
name: 'AppLogin',
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
