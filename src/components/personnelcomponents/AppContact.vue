<template>
    <div class="container mt-5">
      <h1 class="display-4 text-center mb-4 text-bold">Let's Contact</h1>
      
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Your Name" required>
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Your Email" required>
        </div>

        <div class="mb-3">
          <label for="Subject" class="form-label">Subject</label>
          <input type="Subject" class="form-control" id="Subject" placeholder="Your Subject" required>
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
  
        <button type="submit" class=" color-btn w-100">Send</button>
      </form>

      <div class="mt-5   mb-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.3985305411167!2d-122.08385428467725!3d37.422004910320146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807dd977e709%3A0x7d9b8d4a28b4cbe2!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1645084874563!5m2!1sen!2sus" class="w-100" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


    </div>


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      sendMessage() {
        console.log('Sending message:', this.message);
  
      },
    },
  };
  </script>
  
  <style scoped>
  .grand-title {
    font-size: 2em;
  }
  
  .form-group {
    margin-bottom: 1em;
  }
  
  textarea {
    height: 100px;
  }
  </style>
  