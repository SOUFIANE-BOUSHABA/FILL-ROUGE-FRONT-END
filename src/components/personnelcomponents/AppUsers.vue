<template>
  <div class="mt-4">
    <div class="container d-flex justify-content-between align-items-center mb-4">
      <div>
        <input type="text" v-model="searchQuery" placeholder="Search users" class="form-control" />
      </div>
      <div>
        <select v-model="sortBy" class="form-select">
          <option value="name">Sort by Name</option>
          <option value="postCount">Sort by Post Count</option>
        </select>
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
              <h6 class="my-custom-color">{{ user.first_name }} {{ user.last_name }}</h6>
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
      sortBy: 'name',
      users: [],
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


  },
  computed: {
    paginatedUsers() {
      let filteredUsers = this.users.filter((user) =>
        (user.first_name + ' ' + user.last_name).toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.sortBy === 'name') {
        filteredUsers.sort((a, b) => (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name));
      } else if (this.sortBy === 'postCount') {
        filteredUsers.sort((a, b) => b.postCount - a.postCount);
      }

      return filteredUsers;
    },
  },
};
</script>

<style scoped>
.images {
  width: 100px;
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