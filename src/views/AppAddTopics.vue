<template>
    <div class="container">
      <form @submit.prevent="submitForm">
        <!-- Question Title -->
        <div class="mb-3">
          <label for="questionTitle" class="form-label">Question Title *</label>
          <input type="text" class="form-control" id="questionTitle" v-model="questionTitle" required>
        </div>
  
        <!-- Category Dropdown -->
        <div class="mb-3">
          <label for="category" class="form-label">Category *</label>
          <select class="form-select" id="category" v-model="selectedCategory" required>
            <option value="" disabled>Select Category</option>
            <!-- Add your categories dynamically here -->
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
  
        <!-- Tags Input -->
        <div class="mb-3">
          <label for="tags" class="form-label">Tags</label>
          <input type="text" class="form-control" id="tags" v-model="tags">
        </div>
  
        <!-- Image Upload -->
        <div class="mb-3">
          <label for="image" class="form-label">Upload Image</label>
          <input type="file" class="form-control" id="image" @change="handleImageUpload">
        </div>
  
        <!-- Details Textarea -->
        <div class="mb-3">
          <label for="details" class="form-label">Details</label>
          <textarea class="form-control" id="details" rows="5" v-model="details"></textarea>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questionTitle: '',
        selectedCategory: '',
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
        ],
        tags: '',
        details: '',
        image: null,
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', {
          questionTitle: this.questionTitle,
          selectedCategory: this.selectedCategory,
          tags: this.tags,
          details: this.details,
          image: this.image,
        });
      },
      handleImageUpload(event) {
        this.image = event.target.files[0];
      },
    },
  };
  </script>
  
  <style>
  </style>
  