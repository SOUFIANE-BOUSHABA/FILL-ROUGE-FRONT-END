<template>
    <div class="mt-4">
      <div class="container">
        <div v-for="post in postt" :key="post.id" class="row opacity-75 shadow-sm p-4 mb-4">
          <div class="col-md-2 d-grid">
            <div class="d-flex mt-3 flex-column align-items-center">
              <font-awesome-icon
                v-if="hasVoted(post.topic_votes, 1)"
                style="color: #007bff;"
                @click="vote(post.id, 1)"
                :icon="['fas', 'arrow-alt-circle-up']"
              />
              <font-awesome-icon
                v-else
                @click="vote(post.id, 1)"
                :icon="['fas', 'arrow-alt-circle-up']"
              />
              <span class="vote-count">{{ post.total_votes }}</span>
              <font-awesome-icon
                v-if="hasVoted(post.topic_votes, -1)"
                style="color: #007bff;"
                @click="vote(post.id, -1)"
                :icon="['fas', 'arrow-alt-circle-down']"
              />
              <font-awesome-icon
                v-else
                @click="vote(post.id, -1)"
                :icon="['fas', 'arrow-alt-circle-down']"
              />
            </div>
          </div>
  
          <div class="col-md-10">
            <div class="mb-4">
              <div class="d-flex justify-content-between">
                <h2>{{ post.title }}</h2>
  
                <div v-if="post.user.id == auth_id" class="dropdown">
                  <font-awesome-icon
                    class="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    :icon="['fas', 'ellipsis-vertical']"
                  />
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" @click="deletePost(post.id)">Delete</a></li>
                    <li>
                      <router-link class="dropdown-item" :to="'/updateTopic/' + post.id">Update</router-link>
                    </li>
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
                  <span>
                    Posted by <span class="my-custom-color">{{ post.user.first_name }} {{ post.user.last_name }}</span>
                  </span>
                </div>
                <div class="d-flex gap-4 align-items-center">
                  <span>{{ formatCreatedAt(post.created_at) }}</span>
                  <div class="d-flex gap-2 align-items-center">
                    <font-awesome-icon class="mt-1" :icon="['fas', 'message']" />
                    <span>{{ post.comments.length }}</span>
                  </div>
                </div>
              </div>
            
            </div>
            <!-- Display comments -->
            <div class="mt-4 ">
              <div v-for="comment in post.comments" :key="comment.id" class="comment-container mt-4 ">
                <div class="d-flex justify-content-between mb-2 p-2">
                        <div class="d-flex gap-4 align-items-center">
                        <font-awesome-icon :icon="['fas', 'user']" />
                        <span class="d-flex gap-4">
                            <span class="my-custom-color ">{{ comment.user.first_name }} {{ comment.user.last_name }}</span>
                            <span v-if="comment.validation == 1" class="badge text-bg-success ">valider</span>
                        </span>
                        </div>

                        
                  <div class="d-flex gap-4">
                    <div class="d-flex gap-2 align-items-center">
             
                      <font-awesome-icon
                        v-if="hasVotedComment(comment.comment_votes, 1)"
                        style="color: #007bff;"
                        @click="voteComment(comment.id, 1)"
                        :icon="['fas', 'arrow-alt-circle-up']"
                      />
                    <font-awesome-icon v-else @click="voteComment(comment.id, 1)" :icon="['fas', 'arrow-alt-circle-up']"  />
                    <span class="vote-count">{{ comment.total_votes_comments}}</span>
                    
                    <font-awesome-icon
                        v-if="hasVotedComment(comment.comment_votes, -1)"
                        style="color: #007bff;"
                        @click="voteComment(comment.id, -1)"
                        :icon="['fas', 'arrow-alt-circle-down']"
                      />
                    <font-awesome-icon
                        v-else
                        @click="voteComment(comment.id, -1)"
                        :icon="['fas', 'arrow-alt-circle-down']"
                    />
                    </div>

                  
            
                    <div v-if="comment.user.id == auth_id || post.user.id == auth_id" class="dropdown">
                    <font-awesome-icon
                        class="dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        :icon="['fas', 'ellipsis-vertical']"
                    />
                    <ul  class="dropdown-menu dropdown-menu-end">
                        <li v-if="post.user.id == auth_id" ><a class="dropdown-item" @click="valider(comment.id)">Valider</a></li>
                        <li v-if="comment.user.id == auth_id"><a class="dropdown-item" @click="deleteComment(comment.id)">Delete</a></li>
                        <li v-if="comment.user.id == auth_id"><a class="dropdown-item"  @click="fetchComment(comment.id)"  data-bs-toggle="modal" data-bs-target="#updateModal">Update</a></li>
                    </ul>
                    </div>

                  </div>
                </div>
                <div class="mb-2 p-2">{{ comment.text }}</div>
                <div class="fw-bold">{{ formatCreatedAt(comment.created_at) }}</div>
              </div>
            </div>

              <!-- Add comment textarea -->
              <div class="mt-4">
                <form @submit.prevent="addComments">
                  <textarea id="mytextarea" class="form-control" v-model="details"></textarea>
                  <button type="submit" class="btn btn-primary mt-2">Add Comment</button>
                </form>
              </div>
          </div>
        </div>
      </div>
          <!-- Modal for Update -->
          <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true" ref="updateModal">

            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="updateModalLabel">Update Comment</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form @submit.prevent="updateComment" class="form">
                    <div class="mb-3">
                    <label for="updateName" class="form-label">Comment</label>
                    <textarea  class="form-control" v-model="selectedComment.details" required> </textarea>

                    </div>
                    <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
                </div>
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
        selectedComment: {
          id: null,
          details: ''
        },
        details: '',
        auth_id: null,
        postt: [],
      };
    },
    methods: {
      async fetchTopic(id) {
        try {
          const token = localStorage.getItem('jwt');
          const response = await axios.get(`http://127.0.0.1:8000/api/commentsTopic/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.postt = [response.data.topic];
          this.auth_id = response.data.user_id;
          console.log(response.data);
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
          this.fetchTopic(this.$route.params.id);
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      },

      async addComments() {
        try {
          const token = localStorage.getItem('jwt');
          await axios.post('http://127.0.0.1:8000/api/comments', {
            topic_id: this.$route.params.id,
            text: this.details,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.fetchTopic(this.$route.params.id);
        } catch (error) {
          console.error('Error add post:', error);
        }
      },

      async deleteComment(id) {
        try {
          const token = localStorage.getItem('jwt');
          await axios.delete(`http://127.0.0.1:8000/api/comments/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.fetchTopic(this.$route.params.id);
        } catch (error) {
          console.error('Error deleting comments:', error);
        }
      },


      async fetchComment(commentId) {
        try {
            const token = localStorage.getItem('jwt');
            const response = await axios.get(`http://127.0.0.1:8000/api/comments/${commentId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            this.selectedComment.id = response.data.comment.id;
            this.selectedComment.details = response.data.comment.text;
            console.log(this.selectedComment.id, this.selectedComment.details )
        } catch (error) {
            console.error('Error fetching comment:', error);
        }
        },

        async updateComment() {
          try {
            const token = localStorage.getItem('jwt');
            await axios.post(`http://127.0.0.1:8000/api/commentUpdate/${this.selectedComment.id}`, {
            text: this.selectedComment.details,
            }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            window.location.reload();
            } catch (error) {
            console.error('Error updating comment:', error);
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

    async voteComment(commentID, value) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.post('http://127.0.0.1:8000/api/commentTopic', {
          comment_id: commentID,
          value: value
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.fetchTopic(this.$route.params.id);
      } catch (error) {
        console.error('Error voting on comment:', error);
      }
    },

    async valider(commentID) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.post('http://127.0.0.1:8000/api/validerComment',{comment_id : commentID}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.fetchTopic(this.$route.params.id);
      }catch(error){
        console.error('Error validation on topic:', error);
      }},

    formatCreatedAt(created_at) {
      return moment(created_at).fromNow();
    },
    showImg(imageUrl) {
      return `http://localhost:8000/uploads/${imageUrl}`; 
    },


    hasVoted(topicVotes, value) {
      return topicVotes && topicVotes.some(vote => vote.user_id === this.auth_id && vote.value === value);
    },
    hasVotedComment(commentVotes, value) {
      return commentVotes && commentVotes.some(vote => vote.user_id === this.auth_id && vote.value === value);
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
  .tag {
  background-color: #007bff; 
  color: #fff; 
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
}
  </style>
  