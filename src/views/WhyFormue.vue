

<template>
    <div class="">
     
       
            <AppHero  />
            <AppExpertise  />
            <AppTeam  />
            
      
    </div>
  </template>


  <script>
  import AppHero from '../components/addcomponents/AppHero.vue';
  import AppExpertise from '../components/addcomponents/AppExpertise.vue';
  import AppTeam from '../components/addcomponents/AppTeam.vue';
 
  
  export default {
    components: {
        AppHero,
        AppExpertise,
        AppTeam,
    },
   
  };
  </script>
  
  <style scoped>
  .container{
    margin-bottom: 200px;
  }
  </style>