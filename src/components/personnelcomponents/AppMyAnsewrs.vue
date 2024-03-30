<template>
  <div class="mt-4">
    <div class="container">
      <div v-for="comment in comments" :key="comment.id" class="row opacity-75 shadow p-4 mb-4">
        <div class="col-md-12">
          <div>
            <p class="mb-4">{{ comment.text }}</p>
            <hr />

            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span>{{ formatCreatedAt(comment.created_at) }}</span>
              </div>

              <div class="d-flex gap-3 opacity-75">
                <font-awesome-icon  :icon="['fas', 'trash-can']" class="cursor-pointer"  @click="deleteComment(comment.id)" />

                <router-link :to="'/commentes/' + comment.topic.id">
  <font-awesome-icon :icon="['fas', 'eye']" class="cursor-pointer" />
</router-link>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment  from 'moment';

export default {
  name: 'AppHome',
  data() {
    return {
      comments: [],
      path : ''
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
   async fetchComments() {

      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/comments', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.comments = response.data.comment;
          console.log(this.comments);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },

    formatCreatedAt(created_at) {
      return moment(created_at).fromNow();
    },

    async deleteComment(id) {
        try {
          const token = localStorage.getItem('jwt');
          await axios.delete(`http://127.0.0.1:8000/api/comments/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.fetchComments();
        } catch (error) {
          console.error('Error deleting comments:', error);
        }
      },


    editComment(commentId) {
      console.log(`Editing comment with ID: ${commentId}`);
    },
    viewComment(commentId) {
      console.log(`Viewing comment with ID: ${commentId}`);
    },
  },
};
</script>

<style scoped>
</style>
