<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 aside ">
          <div class="sticky-sidebar ">
            <AppAsideSidebar />
          </div>
        </div>
  
        <div class="col-md-8">
          <router-view />
        </div>
  
        <div class="col-md-2">
          <div class="sticky-sidebar">
            <AppUser />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppAsideSidebar from '../components/postcomponents/AppAsideSidebar.vue';
  import AppUser from '../components/postcomponents/AppUser.vue';
  
  export default {
    components: {
      AppAsideSidebar,
      AppUser,
    },
  };
  </script>
  
  <style scoped>
  .aside{
    margin-top: -30px;
    box-shadow: 4px 0 10px rgba(0,0,0,0.05);
  }
  .sticky-sidebar {
    position: sticky;
    top: 100px;
    height: 100vh;
    z-index: 130;
   
  }
  
  .modal-backdrop {
    display: none;
  }
  </style>
  