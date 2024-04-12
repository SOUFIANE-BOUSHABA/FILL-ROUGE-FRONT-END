<template>
  <div class="mt-4">

    <div class="mb-3 p-4 ">
      <input type="text" class="form-control" v-model="searchQuery" placeholder="Search posts...">
    </div>

    <div v-for="(post, index) in paginatedPosts" :key="post.id" class="row opacity-75 shadow-sm p-4 mb-4">
      <div class="col-md-2 d-grid">
        <div class="d-flex mt-3 flex-column align-items-center">
          <font-awesome-icon v-if="hasVoted(post.topic_votes, 1)" style="color: #007bff;" @click="vote(post.id, 1)" :icon="['fas', 'arrow-alt-circle-up']" />
          <font-awesome-icon v-else @click="vote(post.id, 1)" :icon="['fas', 'arrow-alt-circle-up']" />
          <span class="vote-count">{{ post.total_votes }}</span>
          <font-awesome-icon v-if="hasVoted(post.topic_votes, -1)" style="color: #007bff;" @click="vote(post.id, -1)" :icon="['fas', 'arrow-alt-circle-down']" />
          <font-awesome-icon v-else @click="vote(post.id, -1)" :icon="['fas', 'arrow-alt-circle-down']" />
        </div>
      </div>

      <div class="col-md-10">
        <div>
          <div class="d-flex justify-content-between">
            <h2>{{ post.title }}</h2>

            <div  v-if="post.user.id == auth_id " class="dropdown">
              <font-awesome-icon
                class="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                :icon="['fas', 'ellipsis-vertical']"
              />
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" @click="deletePost(post.id)">Delete</a></li>
                <li><router-link class="dropdown-item" :to="'/updateTopic/' + post.id">Update</router-link></li>
              </ul>
            </div>
          </div>
         
          <p v-html="post.details"></p>
          <img :src="showImg(post.image_url)" alt="Post Image" class="img-fluid mb-3"> 
          <div class="tags">
            <span v-for="(tag, index) in post.tags" :key="index" class="tag">#{{ tag.name }}</span>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex gap-4 align-items-center">
              <img :src="showImg(post.user.avatar) || require('@/assets/user.jpg')" alt="User Image" class=" imageuser " />
              <span>Posted by <span class="my-custom-color">{{ post.user.first_name }} {{ post.user.last_name }}</span></span>
            </div>
            <div class="d-flex gap-4 align-items-center">
              <span>{{ formatCreatedAt(post.created_at) }}</span> 
              <router-link :to="'/commentes/' + post.id" class="d-flex gap-2 align-items-center">
                <font-awesome-icon class="mt-1" :icon="['fas', 'message']" />
                <span>{{ post.comments }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="gotoPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'AppHome',
  data() {
    return {
      posts: [],
      auth_id: null,
      searchQuery: '',
      currentPage: 1,
      perPage: 1,
    };
  },

  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredPosts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.perPage);
    },
  },
  mounted() {
    this.fetchTopics();
  },
  methods: {
    async fetchTopics() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/topics', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        this.posts = response.data.topics;
        console.log('Topics:', this.posts);
        this.auth_id = response.data.user_id;
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    },

    async deletePost(id) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.delete(`http://127.0.0.1:8000/api/topics/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.fetchTopics();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },

    async vote(topicId, value) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.post('http://127.0.0.1:8000/api/voteTopic', {
          topic_id: topicId,
          value: value
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.fetchTopics();
      } catch (error) {
        console.error('Error voting on topic:', error);
      }
    },

    formatCreatedAt(created_at) {
      return moment(created_at).fromNow();
    },
    showImg(imageUrl) {
      return `http://localhost:8000/uploads/${imageUrl}`; 
    },

    

    hasVoted(topicVotes, value) {
      return topicVotes && topicVotes.some(vote => vote.user_id === this.auth_id && vote.value === value);
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    gotoPage(pageNumber) {
      this.currentPage = pageNumber;
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
.tag {
  background-color: #007bff; 
  color: #fff; 
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
}
.imageuser{
    width: 30px;
    height:30px;
    border-radius: 100px;
  }
</style>
