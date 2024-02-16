<template>
    <div class="mt-4">
      <div class="container">
        <div v-for="answer in answers" :key="answer.id" class="row opacity-75 shadow p-4 mb-4">
          <div class="col-md-12">
            <div>
              <p class="mb-4">{{ answer.content }}</p>
              <hr />
  
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span>{{ answer.timeAgo }}</span>
                </div>
  
                <div class="d-flex gap-3 opacity-75">
                  <font-awesome-icon  :icon="['fas', 'trash-can']" class="cursor-pointer"  @click="deleteAnswer(answer.id)" />
  
                  <font-awesome-icon  :icon="['fas', 'edit']"  class="cursor-pointer" @click="editAnswer(answer.id)" />
  
                  <font-awesome-icon :icon="['fas', 'eye']"  class="cursor-pointer"  @click="viewAnswer(answer.id)" />
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
        answers: [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            timeAgo: '2 hours ago',
        },
        {
            id: 2,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timeAgo: '1 day ago',
        },
        {
            id: 3,
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            timeAgo: '3 days ago',
        },

        {
            id: 4,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            timeAgo: '2 hours ago',
        },
        {
            id: 5,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timeAgo: '1 day ago',
        },
        {
            id: 6,
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            timeAgo: '3 days ago',
        },
        {
            id: 7,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            timeAgo: '2 hours ago',
        },
        {
            id: 8,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timeAgo: '1 day ago',
        },
        {
            id: 9,
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            timeAgo: '3 days ago',
        },
        ],
      };
    },
    methods: {
      deleteAnswer(answerId) {
        console.log(`Deleting answer with ID: ${answerId}`);
      },
      editAnswer(answerId) {
        console.log(`Editing answer with ID: ${answerId}`);
      },
      viewAnswer(answerId) {
        console.log(`Viewing answer with ID: ${answerId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  