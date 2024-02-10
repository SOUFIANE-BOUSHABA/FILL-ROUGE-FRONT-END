<template>
    <div class="mt-4 ">
      <img :src="require('@/assets/404.png')" alt="404">

    </div>
  </template>
  
  <script>
  export default {
    name: 'AppError404',
    created() {
    console.error('Error 404: Page not found');
  },
  };
  </script>
  
  <style scoped>
  </style>
  