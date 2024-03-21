<template>
    <div class="mt-4">
      <div class="container">
        <div v-for="post in postt" :key="post.id" class="row opacity-75 shadow-sm p-4 mb-4">
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
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span>Posted by <span class="my-custom-color">{{ post.user.first_name }} {{ post.user.last_name }}</span></span>
                    </div>
                    <div class="d-flex gap-4 align-items-center">
                    <span>{{ formatCreatedAt(post.created_at) }}</span> 
                    <div class="d-flex gap-2 align-items-center">
                        <font-awesome-icon class="mt-1" :icon="['fas', 'message']" />
                        <span>{{ post.comments }}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  
          
              
  
              <!-- Add comment textarea -->
           
              <div class="mt-4">
                <textarea id="mytextarea" v-model="details"></textarea>
                <button class="btn btn-primary mt-2">Add Comment</button>
              </div>
            </div>
          </div>
        </div>
  </template>
  
  <script>
   import axios from 'axios';
   import moment from 'moment';
  export default {
  
    name: 'AppComments',
    data() {
      return {
        details: '',
        auth_id:null,
        postt: [  ],
      };
    },
    methods:{
        async fetchTopic(id) {
            try {
                const token = localStorage.getItem('jwt');
                const response = await axios.get(`http://127.0.0.1:8000/api/commentsTopic/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                });
                console.log(response.data);
                this.postt = [response.data.topic];
                // Set the auth_id from the response data
                this.auth_id = response.data.user_id;
               
            } catch (error) {
                console.error('Error fetching topic:', error);
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
        this.fetchTopic(this.$route.params.id);
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


    },

    mounted() {
        this.topicId = this.$route.params.id; 
     this.fetchTopic(this.topicId);
  },
  };
  </script>
  
  <style scoped>
  .comment-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  