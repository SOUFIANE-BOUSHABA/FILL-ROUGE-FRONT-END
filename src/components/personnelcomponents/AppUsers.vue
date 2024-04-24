<template>
  <div class="mt-4">
    <div class="container d-flex justify-content-between align-items-center mb-4">
      <div>
        <input type="text" v-model="searchQuery" placeholder="Search users" class="form-control" />
      </div>
      <div>
      
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div v-for="(user, index) in paginatedUsers" :key="index" class="col-md-4">
          <div class="opacity-75 d-flex gap-2 shadow-sm p-2 mb-4">
            <div class="mb-3 images border rounded">
              <img :src="showImg(user.avatar) || require('@/assets/user.jpg')" alt="User Image" class="img-fluid  imageuser rounded" />
            </div>

            <div>
              <h6 class="my-custom-color" >
                <router-link :to="'/personel/profile/' + user.id">{{ user.first_name }} {{ user.last_name }}</router-link>
              </h6>
              <div class="align-items-center mb-2">
                <div class="mb-2">
                  <span class="opacity-50">{{ user.topics_count }} topics</span>
                </div>
                <div>
                  <small v-if="user.last_online == null"> <span class="enligne"></span> en ligne</small>
                  <small v-else>Last Online: {{ formatLastOnline(user.last_online) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container  mt-4">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
        </li>
        <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
          <a class="page-link" href="#" @click.prevent="gotoPage(pageNumber)">{{ pageNumber }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'AppUsers',

  data() {
    return {
      searchQuery: '',
      users: [],
      currentPage: 1,
      perPage: 9,
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/Allusers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.users = response.data.users;
        console.log('Users:', this.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    formatLastOnline(created_at) {
      return moment(created_at).fromNow();
    },

    showImg(imageUrl) {
      if (imageUrl) {
        return `http://localhost:8000/uploads/${imageUrl}`;
      } else {
        return require('@/assets/user.jpg');
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    gotoPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        (user.first_name + ' ' + user.last_name).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredUsers.slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.perPage);
    },
  },
};
</script>


<style scoped>
.images {
  width: 100px;
}
a {
  text-decoration: none;
}
.images img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
}

@keyframes colorChange {
  0%   {background-color: rgb(83, 237, 83);}
  50%  {background-color: rgb(3, 97, 28);}
  100% {background-color: rgb(34, 215, 34);}
}

.enligne{
  background-color: rgb(34, 215, 34);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 5px;
  animation: colorChange 2s infinite;
}


</style>