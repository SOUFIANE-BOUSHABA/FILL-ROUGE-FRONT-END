<template>
  <div class="mt-4">
    <router-link to="/addtopics" class="add">
      <button type="button" class="color-btn w-100">
        + Add Topics
      </button>
    </router-link>

    <div class="mt-4 p-4 shadow-sm opacity-75">
      <h5>Top Users</h5>
      <div v-for="(user, index) in topUsers" :key="index" class="d-flex align-items-center mb-2 gap-2">
        <img :src="showImg(user.avatar) || require('@/assets/user.jpg')" alt="User Image" class="img-fluid  imageuser rounded" />
        <span class="ml-2">{{ user.first_name }} {{ user.last_name }}</span>
        <span class="ms-auto points">{{ user.points }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppUser',
  data() {
    return {
      topUsers: [], 
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/getTopUsers')
      .then(response => {
        this.topUsers = response.data.users; 
      })
      .catch(error => {
        console.error('Error fetching top users:', error);
      });
  },
  methods : {
    showImg(imageUrl) {
      if (imageUrl) {
        return `http://localhost:8000/uploads/${imageUrl}`;
      } else {
        return require('@/assets/user.jpg');
      }
    },
  }
};
</script>

<style scoped>
  .imageuser{
    height: 2rem;
    width: 2rem;
  }
  .points{
    color: #125df3;
  
  }

@media (max-width: 1200px) {
  .add {
    display: none;
  }
}
</style>
