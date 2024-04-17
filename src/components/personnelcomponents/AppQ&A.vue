<template>
    <div class="container mt-5">
      <h1 class="display-4 text-center mb-4">Q&A</h1>
  
      <div v-for="(question, index) in questions" :key="index" class="mb-4">
        <div class="question" @click="Answer(index)">
          <h5>{{ question.title }}</h5>
          <span v-if="!question.showAnswer">+ </span>
          <span v-if="question.showAnswer">-</span>
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
          title: "How can I customize the design of my forum?",
          answer: "You can customize the design using CSS or by using UI frameworks like Bootstrap or Tailwind CSS.",
          showAnswer: false,
          author: "Admin",
        },
        {
          title: "What are the best practices for moderating forum discussions?",
          answer: "Best practices for moderation include setting clear rules, actively monitoring discussions, and addressing inappropriate behavior promptly.",
          showAnswer: false,
          author: "Moderator",
        },
        {
          title: "How do I encourage more user engagement on my forum?",
          answer: "You can encourage engagement by asking questions, starting discussions, and rewarding active participants with badges or points.",
          showAnswer: false,
          author: "Community Manager",
        },
        {
          title: "How can I customize the design of my forum?",
          answer: "You can customize the design using CSS or by using UI frameworks like Bootstrap or Tailwind CSS.",
          showAnswer: false,
          author: "Admin",
        },
        {
          title: "What are the best practices for moderating forum discussions?",
          answer: "Best practices for moderation include setting clear rules, actively monitoring discussions, and addressing inappropriate behavior promptly.",
          showAnswer: false,
          author: "Moderator",
        },
        {
          title: "How do I encourage more user engagement on my forum?",
          answer: "You can encourage engagement by asking questions, starting discussions, and rewarding active participants with badges or points.",
          showAnswer: false,
          author: "Community Manager",
        },
        {
          title: "How can I customize the design of my forum?",
          answer: "You can customize the design using CSS or by using UI frameworks like Bootstrap or Tailwind CSS.",
          showAnswer: false,
          author: "Admin",
        },
        {
          title: "What are the best practices for moderating forum discussions?",
          answer: "Best practices for moderation include setting clear rules, actively monitoring discussions, and addressing inappropriate behavior promptly.",
          showAnswer: false,
          author: "Moderator",
        },
        {
          title: "How do I encourage more user engagement on my forum?",
          answer: "You can encourage engagement by asking questions, starting discussions, and rewarding active participants with badges or points.",
          showAnswer: false,
          author: "Community Manager",
        },
        {
          title: "How can I customize the design of my forum?",
          answer: "You can customize the design using CSS or by using UI frameworks like Bootstrap or Tailwind CSS.",
          showAnswer: false,
          author: "Admin",
        },
        {
          title: "What are the best practices for moderating forum discussions?",
          answer: "Best practices for moderation include setting clear rules, actively monitoring discussions, and addressing inappropriate behavior promptly.",
          showAnswer: false,
          author: "Moderator",
        },
        {
          title: "How do I encourage more user engagement on my forum?",
          answer: "You can encourage engagement by asking questions, starting discussions, and rewarding active participants with badges or points.",
          showAnswer: false,
          author: "Community Manager",
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
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: #efeeee;
    color: #131313;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 5px;
    padding-left: 20px;
  }
  .question span {
    font-size: 20px;
  }
  
  .answer {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  