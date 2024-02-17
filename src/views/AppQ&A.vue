<template>
    <div class="container mt-5">
      <h1 class="display-4 text-center mb-4">Q&A</h1>
  
      <div v-for="(question, index) in questions" :key="index" class="mb-4">
        <div class="question" @click="Answer(index)">
          <h5>{{ question.title }}</h5>
        </div>
  
        <div v-if="question.showAnswer" class="answer">
          <p>{{ question.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
          {
            title: "What is Vue.js?",
            answer: "Vue.js is a JavaScript framework for building user interfaces.",
            showAnswer: false,
          },
         
        ],
      };
    },
    methods: {
      Answer(index) {
        this.questions[index].showAnswer = !this.questions[index].showAnswer;
      },
    },
  };
  </script>
  
  <style scoped>
  .question {
    cursor: pointer;
    background-color: #efeeee;
    color: #131313;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    padding-left: 20px;
  }
  
  .answer {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  