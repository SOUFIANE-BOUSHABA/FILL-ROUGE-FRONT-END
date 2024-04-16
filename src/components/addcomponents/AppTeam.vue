<template>
    <div>
      <h1 class="title container mt-4 text-center font-bold mb-4 text-4xl">
        Our <span class="my-custom-color">Team</span>?
      </h1>
      <div class="team">
        <div
          class="member"
          v-for="(member, index) in team"
          :key="index"
          data-aos="zoom-in" data-aos-delay="300"
        >
          <img :src="member.image" :alt="member.name" class="member-img">
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <div class="social-links">

              

              <a
                v-if="member.hackerrank_link"
                :href="member.hackerrank_link"
                target="_blank"
                class="social-link"
              >
              <svg  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"  width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z"/>
              </svg>
              </a>
              <a
                v-if="member.github_link"
                :href="member.github_link"
                target="_blank"
                class="social-link"
              >
              <svg fill="#000000" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
            </svg>
              </a>
              <a
                v-if="member.portfolio_link"
                :href="member.portfolio_link"
                target="_blank"
                class="social-link"
              >
              <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none">
              <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
            </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    data() {
      return {
        team: [
            { 
                name: 'soufiane boushaba', 
                role: 'Frontend Developer', 
                image: require('@/assets/1703705094864.jpg'), 
                hackerrank_link: 'https://www.hackerrank.com', 
                github_link: 'https://github.com', 
                portfolio_link: 'https://example.com' 
            },
            { 
                name: 'soufiane boushaba', 
                role: 'Backend Developer', 
                image: require('@/assets/1703705094864.jpg'), 
                hackerrank_link: 'https://www.hackerrank.com', 
                github_link: 'https://github.com', 
                portfolio_link: 'https://example.com' 
            },
            { 
                name: 'soufiane boushaba', 
                role: 'UI/UX Designer', 
                image: require('@/assets/1703705094864.jpg'), 
                hackerrank_link: 'https://www.hackerrank.com', 
                github_link: 'https://github.com', 
                portfolio_link: 'https://example.com' 
            },
            { 
                name: 'soufiane boushaba', 
                role: 'Data Scientist', 
                image: require('@/assets/1703705094864.jpg'), 
                hackerrank_link: 'https://www.hackerrank.com', 
                github_link: 'https://github.com', 
                portfolio_link: 'https://example.com' 
            }
            ]

      };
    },
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
  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
  }
  
  .member {
    position: relative;
    width: 250px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .member:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  
  .member-img {
    width: 100%;
    height: 65%;
    border-radius: 50%;
  }
  
  .member-info {
    text-align: center;
  }
  
  .member-name {
    margin-top: 10px;
    font-size: 18px;
    color: #333;
  }
  
  .member-role {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
  
  .social-links {
    margin-top: 20px;
  }
  
  .social-link {
    display: inline-block;
    margin: 0 5px;
    color: #333;
    font-size: 24px;
  }
  
  .social-link:hover {
    color: #007bff;
  }
  </style>
  