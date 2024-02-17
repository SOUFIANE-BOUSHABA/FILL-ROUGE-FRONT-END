<template>
    <div class="container">
      <h1 class="display-4 text-center mb-5">About Us</h1>
  
      <div v-for="(aboutPart, index) in aboutUsData" :key="aboutPart.id" class="about-part mb-5">
        <div v-if="index % 2 === 0" class="image-part rounded">
          <img :src="aboutPart.image" alt="About Us Image" class="img-fluid" />
        </div>
  
        <div v-if="index % 2 !== 0" class="text-part opacity-75">
          <h3 class="my-3">{{ aboutPart.title }}</h3>
          <p>{{ aboutPart.description }}</p>
        </div>
  
        <div v-if="index % 2 === 0" class="text-part opacity-75">
          <h3 class="my-3">{{ aboutPart.title }}</h3>
          <p>{{ aboutPart.description }}</p>
        </div>
  
        <div v-if="index % 2 !== 0" class="image-part rounded">
          <img :src="aboutPart.image" alt="About Us Image" class="img-fluid" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        aboutUsData: [
          {
            id: 1,
            image: require('@/assets/mission.jpg'),
            title: 'Our Mission',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi,',
          },
          {
            id: 3,
            image: require('@/assets/company.jpg'),
            title: 'Company History',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi,',
          },
          {
            id: 4,
            image: require('@/assets/values.jpg'),
            title: 'Our Values',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi, aspernatur distinctio voluptatem deserunt eum ullam iste eligendi praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iusto quisquam? Totam laborum temporibus nostrum nesciunt provident delectus ducimus vero quasi,',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-part {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .image-part {
    flex: 1;
    overflow: hidden;
    height: 300px;
  }
  
  .text-part {
    flex: 1;
    padding: 20px;
  }
  
  .text-part p {
    text-align: justify;
  }
  
  h3 {
    color: #007bff;
  }
  
  img {
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }
  
  img:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 1000px) {
  .about-part {
    display: grid;
  }
  .about-part .image-part{
    order: 1;
  }
}
  </style>
  