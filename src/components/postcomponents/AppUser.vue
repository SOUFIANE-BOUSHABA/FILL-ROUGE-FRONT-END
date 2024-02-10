<template>
    <div class="mt-4">
        
      <button type="button" class="color-btn w-100" data-bs-toggle="modal" data-bs-target="#addTopicsModal">
       + Add Topics
      </button>
  
      <div class="modal fade  modalindex" id="addTopicsModal" tabindex="-1" aria-labelledby="addTopicsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addTopicsModalLabel">Add Topics</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
             
              <form>
                <!-- Form elements go here -->
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-4 p-4 shadow-sm opacity-75">
        <h5>Top Users</h5>
        <div class="d-flex align-items-center mb-2 gap-2">
            <font-awesome-icon :icon="['fas', 'user']" />
          <span class="ml-2">User 1</span>
          <span class="ms-auto"> 10</span>
        </div>
  
        <div class="d-flex align-items-center mb-2 gap-2">
            <font-awesome-icon :icon="['fas', 'user']" />
          <span >User 2</span>
          <span class="ms-auto"> 8</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppUser',
  };
  </script>
  
  <style scoped>



  </style>
  