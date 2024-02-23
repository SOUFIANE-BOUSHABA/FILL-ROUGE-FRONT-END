

  <template>
    <div class="container">
      <div class="row ">
        <div class="col-md-7">
            <AppTemplate  />
            
        </div>
        
        <div class="col-md-4 mt-4">
  
            <router-view />
         
        </div>
      </div>
    </div>
  </template>


  <script>
  import AppTemplate from '../components/authcomponents/AppTemplate.vue';
  
  export default {
    components: {
        AppTemplate,
    },
   
  };
  </script>
  
  <style scoped>
  .container{
    margin-bottom: 200px;
  }
  </style>