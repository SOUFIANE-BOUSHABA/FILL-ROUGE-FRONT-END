<template>
    <div class="mt-4">
      <div class="container d-flex justify-content-between mb-4">
        <div class="d-flex">
          <div class="mr-4">
            <img :src="user.image" alt="User Image" class="img-fluid w-75 rounded" />
          </div>
          <div class="opacity-75">
            <h4 class="my-custom-color ">{{ user.name }}</h4>
            <p class="mb-2"><font-awesome-icon class="opacity-50" :icon="['fas', 'location-dot']" /> {{ user.city }}</p>
            <p class="mb-2"> <font-awesome-icon class="opacity-50" :icon="['fas', 'cake-candles']" /> Member since: {{ user.memberSince }}</p>
            <p> <font-awesome-icon  class="opacity-50" :icon="['fas', 'clock']" /> Last Seen: {{ user.lastSeen }}</p>
          </div>
        </div>
  
        <div class="shadow-sm d-grid align-items-center">
          <div class="d-flex p-4 gap-4">
            <div class="mr-4">
              <div class="d-flex flex-column align-items-center">
                <span>{{ user.answersCount }}</span>
                <small>Answers</small>
              </div>
            </div>
  
            <div>
              <div class="d-flex flex-column align-items-center">
                <span>{{ user.questionsCount }}</span>
                <small>Questions</small>
              </div>
            </div>
          </div>
  
          <div class="mt-2 mx-auto opacity-50 w-50 h-100">
            <font-awesome-icon :icon="['fas', 'chart-column']" class="w-100 h-50" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="d-flex justify-content-between mb-4">
          <div>
            <h5 class="my-custom-color">Top Questions & Answers</h5>
          </div>
  
          <div class="d-flex gap-2  bg-gray  rounded">
            <button @click="filterPosts('all')" class="btn ">All</button>
            <button @click="filterPosts('questions')" class="btn ">Questions</button>
            <button @click="filterPosts('answers')" class="btn ">Answers</button>
          </div>
        </div>
  
        <div v-if="selectedFilter === 'all'">
            <div v-for="question in userQuestions" :key="question.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
                <div class="col-md-2 "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ question.voteCount }}</p> </div>
               <p class="col-md-8 text-left"> {{ question.content }}</p>
               <p class="col-md-2">  {{ question.publishedDate }}</p>
            
             </div>
             <div v-for="answer in userAnswers" :key="answer.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
                <div class="col-md-2 "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ answer.voteCount }}</p> </div>
                    <p class="text-left col-md-8">{{ answer.content }}</p>
                    <p class="col-md-2"> {{ answer.publishedDate }}</p>
                
                </div>
        </div>

        <div v-else-if="selectedFilter === 'questions'">
        <div v-for="question in userQuestions" :key="question.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
           <div class="col-md-2 "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ question.voteCount }}</p> </div>
           <p class="col-md-8 text-left"> {{ question.content }}</p>
           <p class="col-md-2">  {{ question.publishedDate }}</p>
            
        </div>
        </div>

        <div v-else-if="selectedFilter === 'answers'">
        <div v-for="answer in userAnswers" :key="answer.id" class="mb-4 d-flex col-md-12 border-bottom p-2 align-items-center">
            <div class="col-md-2 "> <p class="bg-success w-25 text-center rounded text-white text-bold">{{ answer.voteCount }}</p> </div>
            <p class="text-left col-md-8">{{ answer.content }}</p>
            <p class="col-md-2"> {{ answer.publishedDate }}</p>
           
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppProfile',
    data() {
      return {
        user: {
          name: 'Mohammed Benali',
          image: require('@/assets/user.jpg'),
          city: 'Casa, Morocco',
          memberSince: 'January 2022',
          lastSeen: '2 hours ago',
          answersCount: 50,
          questionsCount: 30,
        },
      
        userQuestions: [
            {
            id: 1,
            content: 'What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?',
            publishedDate: 'January 15, 2022',
            voteCount: 10,
            },
            {
            id: 2,
            content: 'What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?',
            publishedDate: 'January 15, 2022',
            voteCount: 10,
            },
            {
            id: 3,
            content: 'What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?What is your favorite programming language?',
            publishedDate: 'January 15, 2022',
            voteCount: 10,
            },
            
        ],
        userAnswers: [
            {
            id: 1,
            content: 'I like JavaScript because...I like JavaScript because...I like JavaScript because...I like JavaScript because...',
            publishedDate: 'January 20, 2022',
            voteCount: 5,
            },
            {
            id: 2,
            content: 'I like JavaScript because...I like JavaScript because...I like JavaScript because...I like JavaScript because...',
            publishedDate: 'January 20, 2022',
            voteCount: 5,
            },
            {
            id: 3,
            content: 'I like JavaScript because...I like JavaScript because...I like JavaScript because...I like JavaScript because...',
            publishedDate: 'January 20, 2022',
            voteCount: 5,
            },
           
        ],
        selectedFilter: 'all', 
      };
    },
    methods: {
      filterPosts(filter) {
        this.selectedFilter = filter;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  