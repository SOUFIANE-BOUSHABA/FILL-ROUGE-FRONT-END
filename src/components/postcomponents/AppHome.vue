<template>
    <div class="mt-4 ">
      <div class="container" >
        <div  v-for="post in posts" :key="post.id" class="row opacity-75 shadow-sm p-4 mb-4" >
          <div class="col-md-2 d-grid ">
            <div class="d-flex mt-3 flex-column align-items-center">
              <font-awesome-icon :icon="['fas', 'circle-up']" />
              <span class="vote-count">10</span>
              <font-awesome-icon :icon="['fas', 'circle-down']" />
            </div>
          </div>
  
          <div class="col-md-10">
            <div>
              <h2>{{ post.title }}</h2>
              <p>{{ post.content }}</p>
  
              <hr />
  
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-4 align-items-center">
                  <font-awesome-icon :icon="['fas', 'user']" />
                  <span>Posted by <span class="my-custom-color ">{{ post.author }}</span> </span>
                </div>
  
                <div class="d-flex gap-4 align-items-center">
                  <span>{{ post.timeAgo }}</span>
                  <div class="d-flex gap-2 align-items-center">
                    <font-awesome-icon class="mt-1" :icon="['fas', 'message']" />
                    <span>{{ post.comments }}</span>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppHome',
    data() {
      return {
        posts: [
            {
            id: 1,
            title: 'What is Docker?',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur labore molestiae quo sint qui delectus voluptates impedit quas dolores, in explicabo quis aperiam quos maiores repellendus ea temporibus illum perspiciatis!',
            author: 'Soufiane Boushaba',
            timeAgo: '2 hours ago',
            comments: 10,
        },
        {
            id: 2,
            title: 'Introduction to Vue.js',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur labore molestiae quo sint qui delectus voluptates impedit quas dolores, in explicabo quis aperiam quos maiores repellendus ea temporibus illum perspiciatis!',
            author: 'John Doe',
            timeAgo: '1 day ago',
            comments: 15,
        },
        {
            id: 3,
            title: 'Building a RESTful API with Node.js',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur labore molestiae quo sint qui delectus voluptates impedit quas dolores, in explicabo quis aperiam quos maiores repellendus ea temporibus illum perspiciatis!',
            author: 'Jane Smith',
            timeAgo: '3 days ago',
            comments: 8,
        },
        {
            id: 4,
            title: 'CSS Flexbox Basics',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur labore molestiae quo sint qui delectus voluptates impedit quas dolores, in explicabo quis aperiam quos maiores repellendus ea temporibus illum perspiciatis!',
            author: 'Alice Johnson',
            timeAgo: '1 week ago',
            comments: 20,
        },
        {
            id: 5,
            title: 'JavaScript ES6 Features',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur labore molestiae quo sint qui delectus voluptates impedit quas dolores, in explicabo quis aperiam quos maiores repellendus ea temporibus illum perspiciatis!',
            author: 'Bob Anderson',
            timeAgo: '2 weeks ago',
            comments: 12,
        },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  