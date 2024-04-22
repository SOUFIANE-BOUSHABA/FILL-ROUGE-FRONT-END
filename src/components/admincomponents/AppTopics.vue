<template>
    <main>
      <div class="card shadow-sm p-4">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            + Add
          </button>
        </div>
        <div class="shadow-sm table-responsive p-3 mb-3 bg-body rounded">
          <table class="table align-middle pl-4 mb-4 mt-2 bg-white">
            <thead class="bg-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th class="col-md-2">Action</th>
              </tr>
            </thead>
            <tbody id="category">
              <tr v-for="topic in topics" :key="topic.id">
                <td>{{ topic.id }}</td>
                <td>{{ topic.title }}</td>
                <td>
                    
                  <button  class="btn" @click="deletePost(topic.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AppCategory',
    data() {
      return {
        topics: [],
       
      };
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
        this.topics = response.data.topics;
        console.log(this.topics);
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

    },
    mounted() {
      this.fetchTopics();
    }
  };
  </script>
  
  <style scoped>
  </style>
  