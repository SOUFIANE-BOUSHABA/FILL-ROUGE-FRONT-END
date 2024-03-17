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
              <tr v-for="category in categories" :key="category.id">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                    
                  <button @click="deleteCategory(category.id)" class="btn"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
                  <button @click="fetchCategory(category.id)" class="btn "  data-bs-toggle="modal" data-bs-target="#updateModal"><font-awesome-icon :icon="['fas', 'pencil']" /></button>
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addCategory" class="form">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" v-model="newCategory.name" required>
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
              <h1 class="modal-title fs-5" id="updateModalLabel">Update Category</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateCategory" class="form">
                <div class="mb-3">
                  <label for="updateName" class="form-label">Name</label>
                  <input type="text" class="form-control" v-model="selectedCategory.name" required>

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
    name: 'category',
    data() {
      return {
        categories: [],
        newCategory: {
          name: ''
        },
        selectedCategory: {
          id: null,
          name: ''
        }
      };
    },
    methods: {
      async fetchCategories() {
        try {
          const token = localStorage.getItem('jwt');
          const response = await axios.get('http://127.0.0.1:8000/api/categories', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.categories = response.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      },
      async addCategory() {
        try {
          const token = localStorage.getItem('jwt');
          const response = await axios.post('http://127.0.0.1:8000/api/categories', this.newCategory, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.categories.push(response.data);
          this.newCategory.name = '';
          $('#exampleModal').modal('hide');
          this.fetchCategories();
        } catch (error) {
          console.error('Error adding category:', error);
        }
      },
      async deleteCategory(id) {
        try {
          const token = localStorage.getItem('jwt');
          await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.categories = this.categories.filter(category => category.id !== id);
          this.fetchCategories(); 
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      },
      async fetchCategory(id) {
        try {
          const token = localStorage.getItem('jwt');
          const response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.selectedCategory = { ...response.data };
        } catch (error) {
          console.error('Error fetching category:', error);
        }
      },
      async updateCategory() {
        try {
            const token = localStorage.getItem('jwt');
            await axios.put(`http://127.0.0.1:8000/api/categories/${this.selectedCategory.id}`, this.selectedCategory, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            window.location.reload();
        } catch (error) {
            console.error('Error updating category:', error);
        }
        },

    },
    mounted() {
      this.fetchCategories();
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  