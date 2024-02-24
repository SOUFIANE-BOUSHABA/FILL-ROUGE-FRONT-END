<template>
  <div class="container">
    <form @submit.prevent="submitForm">
     <div class="d-flex justify-content-between mb-3 col-md-12 ">

          <div class="col-md-5">
            <label for="questionTitle" class="form-label">Question Title *</label>
            <input type="text" class="form-control" id="questionTitle" v-model="questionTitle" required>
          </div>

          <div class=" col-md-5">
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
 
    export default{
        name: 'AppAskQuesion',

        data() {
    return {
      questionTitle: '',
      selectedCategory: '',
      categories: [
        { id: 1, name: 'Programming' },
        { id: 2, name: 'Web Development' },
        { id: 3, name: 'Design' },
      ],
      selectedTags: [],
      tags: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' },
      ],
      details: '',
      image: null,
    };
  },
        mounted(){
            tinymce.init({
                selector: '#mytextarea'
            });
            new TomSelect("#tags", {
            maxItems: 3
           });
        }
    }
</script>

<style>
</style>
