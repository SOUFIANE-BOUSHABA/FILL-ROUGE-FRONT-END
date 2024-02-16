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
            <div class="opacity-75 d-flex shadow-sm p-2 mb-4">
              <div class="mb-3  images">
                <img :src="user.image" alt="User Image" class="img-fluid w-75 rounded" />
              </div>
  
              <div class=" ">
                <h6 class="my-custom-color">{{ user.name }}</h6>
                <div class="  align-items-center mb-2">
                  <div class="mb-2">
                    <span class="opacity-50">{{ user.postCount }} posts</span>
                  </div>
                  <div>
                    <small>Last Online: {{ user.lastOnline }}</small>
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
  export default {
    name: 'AppUsers',
    data() {
      return {
        searchQuery: '',
        sortBy: 'name',
        users: [
            {
                id: 1,
                name: 'Mohammed Benali',
                 image: require('@/assets/user.jpg'),
                postCount: 20,
                lastOnline: '2 hours ago',
            },
            {
                id: 2,
                name: 'Fatima El Amrani',
                 image: require('@/assets/user.jpg'),
                postCount: 15,
                lastOnline: '1 day ago',
            },
            {
                id: 3,
                name: 'Youssef Chaoui',
                 image: require('@/assets/user.jpg'),
                postCount: 30,
                lastOnline: '3 days ago',
            },
            {
                id: 4,
                name: 'Amina El Fassi',
                 image: require('@/assets/user.jpg'),
                postCount: 25,
                lastOnline: '4 hours ago',
            },
            {
                id: 5,
                name: 'Karim Belhaj',
                 image: require('@/assets/user.jpg'),
                postCount: 18,
                lastOnline: '2 days ago',
            },
            {
                id: 6,
                name: 'Laila Bouchra',
                 image: require('@/assets/user.jpg'),
                postCount: 22,
                lastOnline: '1 week ago',
            },
            {
                id: 7,
                name: 'Ahmed El Khattabi',
                 image: require('@/assets/user.jpg'),
                postCount: 12,
                lastOnline: '3 hours ago',
            },
            {
                id: 8,
                name: 'Sara Benjelloun',
                 image: require('@/assets/user.jpg'),
                postCount: 28,
                lastOnline: '5 days ago',
            },
            {
                id: 9,
                name: 'Omar El Mansouri',
                 image: require('@/assets/user.jpg'),
                postCount: 14,
                lastOnline: '6 days ago',
            },
            {
                id: 1,
                name: 'Mohammed Benali',
                 image: require('@/assets/user.jpg'),
                postCount: 20,
                lastOnline: '2 hours ago',
            },
            {
                id: 2,
                name: 'Fatima El Amrani',
                 image: require('@/assets/user.jpg'),
                postCount: 15,
                lastOnline: '1 day ago',
            },
            {
                id: 3,
                name: 'Youssef Chaoui',
                 image: require('@/assets/user.jpg'),
                postCount: 30,
                lastOnline: '3 days ago',
            },
            {
                id: 4,
                name: 'Amina El Fassi',
                 image: require('@/assets/user.jpg'),
                postCount: 25,
                lastOnline: '4 hours ago',
            },
            {
                id: 5,
                name: 'Karim Belhaj',
                 image: require('@/assets/user.jpg'),
                postCount: 18,
                lastOnline: '2 days ago',
            },
            {
                id: 6,
                name: 'Laila Bouchra',
                 image: require('@/assets/user.jpg'),
                postCount: 22,
                lastOnline: '1 week ago',
            },
            {
                id: 7,
                name: 'Ahmed El Khattabi',
                 image: require('@/assets/user.jpg'),
                postCount: 12,
                lastOnline: '3 hours ago',
            },
            {
                id: 8,
                name: 'Sara Benjelloun',
                 image: require('@/assets/user.jpg'),
                postCount: 28,
                lastOnline: '5 days ago',
            },
            {
                id: 9,
                name: 'Omar El Mansouri',
                 image: require('@/assets/user.jpg'),
                postCount: 14,
                lastOnline: '6 days ago',
            },
            ],

      };
    },
    computed: {
      paginatedUsers() {
        let filteredUsers = this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
  
      
        if (this.sortBy === 'name') {
          filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.sortBy === 'postCount') {
          filteredUsers.sort((a, b) => b.postCount - a.postCount);
        }
  
        return filteredUsers;
      },
    },
  };
  </script>
  
  <style scoped>
  .images{
    width:130px;
  }
  </style>
  