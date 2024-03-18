<template>
  <div id="app">
    <header v-if="!$route.path.includes('/admin')" class=" sticky-top shadow-sm  bg-white">
      <nav class="navbar container navbar-expand-lg">
        <div class="container-fluid">
          <div>
            <router-link class="navbar-brand d-flex align-items-center" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="40.909" viewBox="0 0 50 40.909">
                <image id="Image_1" data-name="Image 1" width="50" height="40.909" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA2CAYAAABz508/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATFSURBVGhD7ZrrbxRVGMafmdmZ3ZZbBSptCoEarEIwkYpRqKIhoIiRW0S/GGPi32Pidz4YExOUTwaIt5DGGPCWUKmxDWBqS6EtLS1gW7u3ufi8Z4+EmOzavczMEudJTju70+a853fe25ldI6CQCKb+/b9XAkIrAaGVgNBKQGglILQSEFoJCK0EhFZTdJauF8DzaQyvU5YBM4btiRWEzJzLBxge8XD7jo/WjIFNnRa6N0ZPItbQ8AlicSnAxUsuzvUXcf77Iq6NefputIoXBElk6RFjEx5GbvoY5RDPiEPxJ8t/BWZcgRo/iAe0HAYLfwW4cKmIk6dz+ORMHuNTHvLF+ulFBkLyQYEGS07I5gK4Lt+owf578wF+u+ah/8civv2piJtTPvJ5fbMORQZiKRswEfr4+VcXg1ddTDMXCJxqtZj1Mfenj5m5ALduB7i7oKHWqchATNPws/0FnPwsh1NnCxjirkrvUElFF8gXAnqSJFb9ZkiKDIT0CxMzPmbvBZi5E2BhqXJi9FhFR8Y9/HDZxcCQi7vz9KAQYUQGQhYti5PFeOwkpXSWk/yNLFxywOkvCzhDTxq84tFD6g+BcooMRDVSHSdDQjzojxserk+W+ov/CqV61HAQspsS1/OLpQrhMs5rkQqbB4ZyIBkhqeEgZCcnuZO/DLsY+t0jEJ+LCnEFDVLDQUwRwjcXi/jgoxw+/DiLqzw7uPEcH6pSzSDyBahd//SLPD4/X2A18NWCc2xupOmRMT0rzZN285AloTh4xcWpc3mVXMcnmVyr6DhrBiFZ/TIz+VfflU6N1yd8VSI9BvM/SU3ACIQoQEgyHRjy8PWFouo6R2mPHOiWq5pBSM8/MS1Z3ccYT423Zn0UmB/iknjEDbbbYwQwSpvm6KHitctVzSAs/mfGMbCixUALh5MyYJjyjCkeyZOtTBrq4U4r7bFpTzVPumoG0dFuoq/XwvFXbBzeZ2NHj4WVrfGB6OowsfdZG0f223iD9mx7rDp7agYh3rB9awqHXnKwf4+NdW0md4U7wt1YvaK0G22rDaQdTlLzLMuXzLl9q4XXac++5210bTBh2xGAkMWtWWWoCTvpHY4NGJx3PYHsfjqF946n8c5hB5u7LIZR+J6SShHGSgMb6Rkd6020MESqmbbheyVe8MwOgjiWxluvpbGJhsXxVLpaNa2JajPlhx73X4ek5gTBBZv0a3FtWbuEXIpVIEw1JQgB8AhD7ECfg3ePpnHiVQc7t1nMQ+HBiAxEawbqgxspu1LqJJeUS2biAZm0gadYkl9+zsbunSmVBKV3CUuRgVi7xsSe3pQqbXt32djCalIpiQoMqUpSkR5dZ7IMs2Hje8JO8dMX96/rVGQgxANe6LXx/ptpHDvg4PHNlUGUk+QKKY3SLK1i76D6FCFUpyID0ShtoHf0EejbhxycOOjgiW6LTZy+WYceOhBylniS7bOE2Iu7Umhfy462ARUlZhA67mWoV6XrSrLYxksHKd2jQJDcUU0HWU6xgpAFSEkUd+9s5+KYGNuYIONQU3w/YmDYw/ikr5JfT7eJni3c9ogV+zdmZHb5JEs+6zDon7ZlqANU1Eq+lK710FWNsJSA0EpAaCUgtBIQWgkIrQSEVgJCCfgbCgvcMgkixsIAAAAASUVORK5CYII="/>
              </svg>
              <h5>foru<span class="my-custom-color">me</span> </h5>

            </router-link>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <div class="mx-auto">
              <form class="input-group" role="search">
                <span class="input-group-text border-0 bg-gray" id="basic-addon1"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></span>
                <input type="text" class="form-control border-0 bg-gray " placeholder="search for topics" aria-label="search" aria-describedby="basic-addon1">
               
              </form>
            </div>

            <div>
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle d-flex align-items-center gap-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="d-flex align-items-center gap-2">
                      <font-awesome-icon :icon="['fas', 'user']" />
                     name
                    </div>
                   
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/personel/profile">profile</a></li>
                    <li><a class="dropdown-item" href="#">parameter</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li v-if="isLoggedIn">
                      <button @click="logout" class="btn w-100">Logout</button>
                    </li>
                    <li v-if="!isLoggedIn">
                      <router-link to="/userauth/login" class="dropdown-item">Login</router-link>
                    </li>
                    <li v-if="!isLoggedIn">
                      <router-link to="/userauth/register" class="dropdown-item">Register</router-link>
                    </li>
                   
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div v-if="!$route.path.includes('/admin')" class="container mt-4">
      <router-view></router-view>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>



    <footer v-if="!$route.path.includes('/admin')" class="mt-4 border-top pt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-1">
            <router-link class="footer-link" to="/personel/contact">Contact Us</router-link>
          </div>
          <div class="col-md-1">
            <router-link class="footer-link" to="/about">About Us</router-link>
          </div>
          <div class="col-md-1">
            <router-link class="footer-link" to="/personel/q&a">Q&A</router-link>
          </div>
        </div>
        <!-- <div class="row mt-3">
          <div class="col-md-12">
            <a href="#" class="me-3"><font-awesome-icon :icon="['fas', 'facebook']" /></a>
            <a href="#" class="me-3"><font-awesome-icon :icon="['fas', 'twitter']" /></a>
            <a href="#" class="me-3"><font-awesome-icon :icon="['fas', 'instagram']" /></a>
          </div>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      loggedIn: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn || localStorage.getItem('jwt') !== null;
    }
  },
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem('jwt');
        await axios.post('http://127.0.0.1:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem('jwt');
        this.loggedIn = false; 
        this.$router.push('/userauth/login');

        setTimeout(() => {
      window.location.reload();
    }, 100);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
  },
};
</script>



<style scoped>
footer{
  height: 70px;
}
  .footer-link{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  .footer-link:hover{
    color: #425EF1; 
  }
  
</style>
