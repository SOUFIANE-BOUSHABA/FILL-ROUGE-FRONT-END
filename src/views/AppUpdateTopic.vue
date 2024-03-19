<template>
  <div class="container">
    <form @submit.prevent="updateTopic">
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
import TomSelect from 'tom-select';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'update-topic',
  data() {
    return { 
      title: '',
      selectedCategory: '',
      categories: [],
      selectedTags: [],
      tags: [],
      details: '',
      image: null,
      topicId: null,
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


    handleImageUpload(event) {
      this.image = event.target.files[0];
    },


    async initTomSelect() {
      new TomSelect("#tags", {
        maxItems: 3,
        options: this.tags.map(tag => ({ value: tag.id, text: tag.name })),
        items: this.selectedTags
      });
    },





    async fetchTopic(id) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get(`http://127.0.0.1:8000/api/getTopicById/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const topic = response.data;
        this.title = topic.title;
        this.selectedCategory = topic.category.id;
        this.selectedTags = topic.tags.map(tag => tag.id);
        this.details = topic.details;
        tinymce.get('mytextarea').setContent(this.details);
        await this.initTomSelect();
      } catch (error) {
        console.error('Error fetching topic:', error);
      }
    },



    async updateTopic() {
      try {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('category_id', this.selectedCategory);
        formData.append('details', tinymce.get('mytextarea').getContent());
        formData.append('image', this.image);
        formData.append('selectedTags',this.selectedTags);
        const token = localStorage.getItem('jwt');
        const response = await axios.post(`http://127.0.0.1:8000/api/topics/${this.topicId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
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
          title: 'Topic updated successfully',
        });
      } catch (error) {
        console.error('Error updating topic:', error);
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
          text: 'Failed to update topic. Please try again.',
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

    this.topicId = this.$route.params.id; 
  this.fetchTopic(this.topicId);
 
 
  },
};
</script>

<style>
</style>
