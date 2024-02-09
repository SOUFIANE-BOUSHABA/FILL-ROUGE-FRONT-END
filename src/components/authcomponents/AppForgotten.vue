
<template>
  
    <div class="mt-5">    
        <div class="mb-3 mt-4">
            <h4 class="text-decoration-none mb-4 opacity-50 left">Have you forgotten your <router-link to="forgot" class="my-custom-color">password?</router-link></h4>
            <p class="opacity-50 text-center mb-4">If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </p>
        </div>

        <form>
        <div class=" mt-4 mb-4">
            <input type="email" class="form-control border-0 border-bottom rounded-0" id="email" placeholder="Email" aria-describedby="emailHelp">
        </div>
        

        <button type="submit" class=" mt-4 color-btn w-100">RESET PASSWORD</button>

        </form>
    </div>  
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
