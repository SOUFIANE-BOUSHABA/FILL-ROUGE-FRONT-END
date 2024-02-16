<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
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
  