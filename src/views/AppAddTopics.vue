<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="d-flex justify-content-between mb-3 col-md-12">
        <div class="col-md-5">
          <label for="title" class="form-label">Question Title *</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="col-md-5">
          <label for="tags" class="form-label">Tags</label>
          <select id="tags" class="" multiple v-model="selectedTags">
            <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
          </select>
        </div>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Category *</label>
        <select class="form-select" id="category" v-model="selectedCategory" required>
          <option value="" disabled>Select Category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image" @change="handleImageUpload">
      </div>
      <div class="mb-3">
        <label for="details" class="form-label">Details</label>
        <textarea id="mytextarea" v-model="details"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
 /* global tinymce */
 import TomSelect from 'tom-select';
 import axios from 'axios';
 import Swal from 'sweetalert2';
 
export default {
  name: 'AppAskQuestion',
  data() {
    return { 
      title: '',
      selectedCategory: '',
      categories: [],
      selectedTags: [],
      tags: [],
      details: '',
      image: null,
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


    handleImageUpload(event) {
      this.image = event.target.files[0];
    },





    async fetchTags() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/tags', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.tags = response.data;
        new TomSelect("#tags", {
          maxItems: 3,

          options: this.tags.map(tag => ({ value: tag.id, text: tag.name }))
        });
      } catch (error) {
        console.error('Error fetching tages:', error);
      }
    },



    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('selectedCategory', this.selectedCategory);
        formData.append('selectedTags', this.selectedTags);
        formData.append('details', tinymce.get('mytextarea').getContent());
        formData.append('image', this.image);
        const token = localStorage.getItem('jwt');
        const response = await axios.post('http://127.0.0.1:8000/api/topics', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Topic created:', response.data);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: 'success',
          title: 'Topic created successfully',
        });
       
      } catch (error) {
        console.error('Error creating topic:', error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: 'error',
          text: 'Failed to create topic. Please try again.',
        });
      }
    },


    
  },



  mounted() {
    this.fetchCategories();
    this.fetchTags();
    tinymce.init({
      selector: '#mytextarea'
    });
  },
};
</script>

<style>
</style>