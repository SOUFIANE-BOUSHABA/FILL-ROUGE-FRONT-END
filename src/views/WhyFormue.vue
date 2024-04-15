

<template>
    <div class="container">
      <div class="row ">
        <div class="col-md-7">
            <AppHero  />
            
        </div>
      </div>
    </div>
  </template>


  <script>
  import AppHero from '../components/addcomponents/AppHero.vue';
  
  export default {
    components: {
        AppHero,
    },
   
  };
  </script>
  
  <style scoped>
  .container{
    margin-bottom: 200px;
  }
  </style>