<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 aside">
          <div class="sticky-sidebar">
            <AppAsideSidebar />
          </div>
        </div>
  
        <div class="col-md-10">
          <router-view />
        </div>
  

      </div>
    </div>
  </template>
  
  <script>
  import AppAsideSidebar from '../components/postcomponents/AppAsideSidebar.vue';
  
  export default {
    components: {
      AppAsideSidebar,
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
  