<template>
    <div class="mt-4">
        
      <router-link to="/addtopics"> <button type="button" class="color-btn w-100" >
       + Add Topics
      </button></router-link>
  
      
      <div class="mt-4 p-4 shadow-sm opacity-75">
        <h5>Top Users</h5>
        <div class="d-flex align-items-center mb-2 gap-2">
            <font-awesome-icon :icon="['fas', 'user']" />
          <span class="ml-2">User 1</span>
          <span class="ms-auto"> 10</span>
        </div>
  
        <div class="d-flex align-items-center mb-2 gap-2">
            <font-awesome-icon :icon="['fas', 'user']" />
          <span >User 2</span>
          <span class="ms-auto"> 8</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppUser',
  };
  </script>
  
  <style scoped>



  </style>
  