<template>
    <div class="global">
      <div class="divTop" data-aos="fade-down" data-aos-delay="1000">
        <h1 class="title font-bold mb-4 text-4xl">Why Join Our <span class="my-custom-color">Discussion Forum</span>?</h1>
        <p class="text-zinc-500">Our platform is a dedicated space for cybersecurity enthusiasts and professionals from around the world to share insights, discuss challenges, and explore innovative solutions. Join to connect with peers in Lyon, Paris, Grenoble, and globally.</p>
      </div>
      <div class="divBottom">
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Comprehensive Topics</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">From beginner tips to advanced discussions on cybersecurity frameworks and legislation, our forum covers all aspects of information security.</p>
          </div>
        </div>
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Expert Guidance</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">Our community is moderated by seasoned security professionals who provide expert insights and guidance on complex subjects.</p>
          </div>
        </div>
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Real-time Collaboration</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">Engage in real-time discussions with members across different time zones, enhancing the breadth and depth of cybersecurity knowledge.</p>
          </div>
        </div>
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Resource Sharing</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">Access a rich repository of resources like whitepapers, case studies, and tools shared by community members and our partners.</p>
          </div>
        </div>
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Exclusive Events</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">Participate in exclusive webinars, workshops, and Q&A sessions with experts to deepen your understanding and expand your network.</p>
          </div>
        </div>
        <div class="item cursor-pointer" data-aos="fade-up" data-aos-delay="1000">
          <div class="divHeader">
            <h2 class="headerTitle">Secure Environment</h2>
          </div>
          <div class="divBody">
            <p class="text-zinc-500">Our platform ensures a secure and respectful environment, encouraging open and productive discussions without compromising safety.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    name: 'DiscussionForum',
    mounted() {
      AOS.init();
      this.$nextTick(function () {
        AOS.refresh();
      });
    }
  }
  </script>
  
  <style scoped>
  .global {
    height: auto;
    padding-top: 130px;
    padding-bottom: 130px;
    margin-top: -100px;
    background: rgba(236, 235, 235, 0.8);
  }
  
  .text-zinc-500{
    color: #2C3E50;
  }
  
  .text-zinc-500:hover{
    color: #425EF1;
  }
  .divTop {
    width: 600px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .divBottom {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .item:nth-child(2),
  .item:nth-child(5) {
    border-left: 2px solid rgb(222, 220, 220);
    border-right: 2px solid rgb(222, 220, 220);
  }
  .item:nth-child(1),
  .item:nth-child(2), .item:nth-child(3) {
    border-bottom: 2px solid rgb(222, 220, 220);
  
  }
  
  .item {
    width: 30%;
    text-align: center;
    padding: 50px;
  }
  
  .divHeader {
    display: flex;
  }
  
  .icon {
    width: 50px;
    height: 50px;
  }
  
  .headerTitle {
    margin-bottom: 20px;
    font-weight: bold;
  
  }
  
  .divBody p{
    text-align: justify;
    padding-left: 40px;
  }
  @media screen and (max-width: 1080px) {
    .divBottom {
      flex-wrap: wrap;
    }
  
    .item {
      width: 50%;
      border-bottom: 2px solid rgb(222, 220, 220);
    }
    .item:nth-child(2),
    .item:nth-child(5) {
      border-left: 0px;
      border-right: 0px;
    }
  }
  @media screen and (max-width: 768px) {
    .item {
      width: 100%;
    }
    .divTop{
      width:80%;
    }
  }
  </style>
  