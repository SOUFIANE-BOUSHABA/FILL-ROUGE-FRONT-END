<template>
    <div class="container hero">
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
          <h1 class="title">Join the Discussion</h1>
          <p class="opacity-75">Welcome to our vibrant community forum where discussions come alive! Dive deep into a plethora of topics covering everything from technology and science to arts and culture. Ask thought-provoking questions, share your insights, and connect with fellow enthusiasts from around the globe. Our forum is a treasure trove of knowledge. Join us in this journey of exploration, discovery, and enlightenment. Together, let's build a community where ideas flourish, connections thrive, and passions ignite!</p>
          <div class="mt-4 d-flex gap-2">
            <router-link to="/" > <button class="btn btn-primary mr-3">Learn More</button></router-link>
            <router-link to="/personel/contact" > <button class="btn btn-secondary">Contact Us</button></router-link>
          </div>
        </div>
  
        <div class="col-md-6" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000">
          <img src="@/assets/what-to-expect.svg" alt="Forum Image" class="img-fluid">
        </div>
      </div>
  
      <img src="@/assets/shape-2.png" alt="Shape 1" class="img-fluid shape1" data-aos="zoom-in" data-aos-delay="200">
      <img src="@/assets/shape-3.png" alt="Shape 2" class="img-fluid shape2" data-aos="zoom-in" data-aos-delay="300">
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    name: "appHero",
    mounted() {
      this.$nextTick(() => {
        AOS.init({
          once: true,
          mirror: false, 
        });
      });
    }
  };
  </script>
  
  <style scoped>
  .hero {
    width: 170%;
    position: relative;
  }
  
  .title {
    font-size: 5rem;
    font-weight: 700;
    color: #333;
  }
  
  .shape1, .shape2 {
    position: absolute;
    animation: move 5s infinite alternate;
  }
  
  .shape1 {
    top: 0;
    left: 50%;
    width: 160px; 
    height: 150px;
  }
  
  .shape2 {
    top: 500px;
    left: 80%;
    width: 100px; 
    height: 100px;
  }
  
  @keyframes move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  </style>
  