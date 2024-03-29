<template>
  <div class="mt-4">
    <div class="container d-flex justify-content-between mb-4" v-if="user">
      <div class="d-flex gap-4">
        <div class="mr-4">
          <img :src="showImg(user.avatar) || require('@/assets/user.jpg')" alt="User Image" class="img-fluid  imageuser rounded" />
        </div>
        <div class="opacity-75">
          <h4 class="my-custom-color ">{{ user.first_name }} {{ user.last_name }}</h4>
          <p class="mb-2"> <font-awesome-icon class="opacity-50" :icon="['fas', 'cake-candles']" /> Member since: {{ formatCreatedAt(user.created_at) }}</p>
          <p> <font-awesome-icon class="opacity-50" :icon="['fas', 'clock']" /> Last Seen: {{ user.lastSeen }}</p>
          <a v-if="user.url_pay_me_coffee" :href="user.url_pay_me_coffee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 170px !important;" ></a>
        </div>
      </div>

      <div class="shadow-sm d-grid align-items-center">
        <div class="d-flex p-4 gap-4">
          <div class="mr-4">
            <div class="d-flex flex-column align-items-center">
              <span>{{ userComments.length }}</span>
              <small>Answers</small>
            </div>
          </div>

          <div>
            <div class="d-flex flex-column align-items-center">
              <span>{{ userQuestions.length }}</span>
              <small>Questions</small>
            </div>
          </div>
        </div>

        <div class="mt-2 mx-auto opacity-50 w-50 h-100">
          <font-awesome-icon :icon="['fas', 'chart-column']" class="w-100 h-50" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="d-flex justify-content-between mb-4">
        <div>
          <h5 class="my-custom-color"> Questions & Answers</h5>
        </div>

        <div class="d-flex gap-2 bg-gray rounded">
          <button @click="filterPosts('all')" class="btn ">All</button>
          <button @click="filterPosts('questions')" class="btn ">Questions</button>
          <button @click="filterPosts('answers')" class="btn ">Answers</button>
        </div>
      </div>

      <div v-if="selectedFilter === 'all'">
        <div v-for="question in userQuestions" :key="question.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
          <div class="col-md-2 d-grid "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ question.total_votes }}</p>  <p class="fw-bold"> {{ formatCreatedAt(question.created_at) }}</p></div>
          <p class="col-md-10 text-left" v-html="question.details"></p>
         
        </div>
        <div v-for="answer in userComments" :key="answer.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
          <div class="col-md-2 d-grid "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ answer.total_votes }}</p>  <p class="fw-bold"> {{ formatCreatedAt(answer.created_at) }}</p></div>
          <p class="text-left col-md-10">{{ answer.text }}</p>
         
        </div>
      </div>

      <div v-else-if="selectedFilter === 'questions'">
        <div v-for="question in userQuestions" :key="question.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
          <div class="col-md-2 d-grid "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ question.total_votes }}</p>  <p class="fw-bold"> {{ formatCreatedAt(question.created_at) }}</p></div>
          <p class="col-md-10 text-left" v-html="question.details"></p>
         
        </div>
      </div>

      <div v-else-if="selectedFilter === 'answers'">
        <div v-for="answer in userComments" :key="answer.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
          <div class="col-md-2 d-grid "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ answer.total_votes }}</p>  <p class="fw-bold"> {{ formatCreatedAt(answer.created_at) }}</p></div>
          <p class="text-left col-md-10">{{ answer.text }}</p>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  watch: {},
  name: 'AppProfile',
  data() {
    return {
      user: null,
      userQuestions: [],
      userComments: [],
      selectedFilter: 'all',
    };
  },
  async mounted() {
  await this.fetchUserData(); 
  this.fetchUserPosts();
  this.fetchUserComments();
},
  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('jwt');
        const userResponse = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.user = userResponse.data.user;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push('/userauth/login');
        } else {
          console.error('Error fetching user data:', error);
        }
      }
    },
    async fetchUserPosts() {
      try { 
        const token = localStorage.getItem('jwt');
       
        const postsResponse = await axios.get(`http://127.0.0.1:8000/api/user/${this.user.id}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.userQuestions = postsResponse.data.topics;
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    },
    async fetchUserComments() {
      try {
        const token = localStorage.getItem('jwt');
        const commentsResponse = await axios.get(`http://127.0.0.1:8000/api/user/${this.user.id}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.userComments = commentsResponse.data.comments;
      } catch (error) {
        console.error('Error fetching user comments:', error);
      }
    },
    formatCreatedAt(created_at) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(created_at).toLocaleDateString(undefined, options);
      return formattedDate;
    },
    filterPosts(filter) {
      this.selectedFilter = filter;
    },
    showImg(imageUrl) {
      return `http://localhost:8000/uploads/${imageUrl}`;
    },
  },
};
</script>

 

  <style scoped>
  .imageuser{
    height: 10rem;
    width: 10rem;
  }
  </style>
  