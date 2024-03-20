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
            <tr v-for="tag in tags" :key="tag.id">
              <td>{{ tag.id }}</td>
              <td>{{ tag.name }}</td>
              <td>
                <button @click="deleteTag(tag.id)" class="btn"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
                <button @click="fetchTag(tag.id)" class="btn "  data-bs-toggle="modal" data-bs-target="#updateModal"><font-awesome-icon :icon="['fas', 'pencil']" /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Tag</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addTag" class="form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="newTag.name" required>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-dark">Add</button>
              </div>
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
            <h1 class="modal-title fs-5" id="updateModalLabel">Update Tag</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateTag" class="form">
              <div class="mb-3">
                <label for="updateName" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="selectedTag.name" required>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TagComponent',
  data() {
    return {
      tags: [],
      newTag: {
        name: ''
      },
      selectedTag: {
        id: null,
        name: ''
      }
    };
  },
  methods: {
    async fetchTags() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/tags', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.tags = response.data;
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    },
    async addTag() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post('http://127.0.0.1:8000/api/tags', this.newTag, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.tags.push(response.data);
        this.newTag.name = '';
        
        this.fetchTags();
      } catch (error) {
        console.error('Error adding tag:', error);
      }
    },


    async deleteTag(id) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.delete(`http://127.0.0.1:8000/api/tags/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.tags = this.tags.filter(tag => tag.id !== id);
        this.fetchTags();
      } catch (error) {
        console.error('Error deleting tag:', error);
      }
    },



    async fetchTag(id) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get(`http://127.0.0.1:8000/api/tags/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.selectedTag = { ...response.data };
      } catch (error) {
        console.error('Error fetching tag:', error);
      }
    },


    
    async updateTag() {
      try {
        const token = localStorage.getItem('jwt');
        await axios.put(`http://127.0.0.1:8000/api/tags/${this.selectedTag.id}`, this.selectedTag, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        window.location.reload();
      } catch (error) {
        console.error('Error updating tag:', error);
      }
    },
  },
  mounted() {
    this.fetchTags();
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
