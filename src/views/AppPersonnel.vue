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
.aside {
  margin-top: -30px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.05);
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

@media (max-width: 1200px) {
  .container-fluid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "aside"
      "main-content";
  }

  .aside {
    grid-area: aside;
    margin-top: 0;
    box-shadow: none;
    height: 300px;
  }

  .sticky-sidebar {
    position: relative;
    top: auto;
    height: auto;
  }

  .col-md-2 {
    width: 100%; 
    margin-top: 20px; 
  }

  .col-md-10 {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
