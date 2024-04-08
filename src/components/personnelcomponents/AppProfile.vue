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
          <p class="mb-2"> <font-awesome-icon class="opacity-50" :icon="['fas', 'clock']" />
                  <small v-if="user.last_online == null"> <span class="enligne"></span> en ligne</small>
                  <small v-else>Last Online: {{ formatLastOnline(user.last_online) }}</small>
          </p>
          <div class="d-flex gap-2 mb-4">
            <a v-if="user.hackerrank_link" :href="user.hackerrank_link" target="_blank">
              <svg  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"  width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z"/>
              </svg>

              
          </a>
          <a v-if="user.github_link" :href="user.github_link" target="_blank">
            <svg fill="#000000" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
            </svg>

          </a>
          <a v-if="user.portfolio_link" :href="user.portfolio_link" target="_blank">
            <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none">
              <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
            </svg>
          </a>
           </div>
          <a v-if="user.url_pay_me_coffee " :href="user.url_pay_me_coffee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 170px !important;" ></a>
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
import moment from 'moment';

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

  await this.fetchUserData(this.$route.params.id); 
  this.fetchUserPosts();
  this.fetchUserComments();
},
  methods: {
    async fetchUserData(userID) {
      try {
        const token = localStorage.getItem('jwt');
        const userResponse = await axios.get(`http://127.0.0.1:8000/api/userdata/${userID}`, {
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


    formatLastOnline(created_at) {
      return moment(created_at).fromNow();
    },

    filterPosts(filter) {
      this.selectedFilter = filter;
    },
    showImg(imageUrl) {
      if (imageUrl) {
        return `http://localhost:8000/uploads/${imageUrl}`;
      } else {
        return require('@/assets/user.jpg');
      }
    },
  },
};
</script>

 

  <style scoped>
  .imageuser{
    height: 12rem;
    width: 12rem;
  }
  </style>
  