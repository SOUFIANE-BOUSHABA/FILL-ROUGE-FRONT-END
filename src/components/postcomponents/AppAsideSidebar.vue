<template>
  <div>
    <div class="sidebar">
      <router-link :to="{ path: '/' }" class="sidebar-link" :class="{ 'active-link': isLinkActive('/') }">
        <font-awesome-icon :icon="['fas', 'house']" />
        Home
      </router-link>

      <router-link :to="{ path: '/explore' }" class="sidebar-link" :class="{ 'active-link': isLinkActive('/explore') }">
        <font-awesome-icon :icon="['fas', 'chart-line']" />
        Explore Topics
      </router-link>

      <router-link :to="{ path: '/MyTopics' }" class="sidebar-link" :class="{ 'active-link': isLinkActive('/MyTopics') }">
        <font-awesome-icon :icon="['fas', 'list']" />
        My Topics
      </router-link>

      <router-link :to="{ path: '/personel/MyAnswers' }" class="sidebar-link" :class="{ 'active-link': isLinkActive('/personel/MyAnswers') }">
        <font-awesome-icon :icon="['fas', 'message']" />
        My Answers
      </router-link>

      <router-link :to="{ path: '/personel/allusers' }" class="sidebar-link" :class="{ 'active-link': isLinkActive('/personel/allusers') }">
        <font-awesome-icon :icon="['fas', 'users']" />
        Users
      </router-link>   
      <router-link to="/addtopics" class="add"> <button type="button" class="color-btn w-100" >
       + Add Topics
      </button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAsideSidebar',
  methods: {
    isLinkActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #ffffff;
  height: 100vh;
  padding-top: 20px;
}

.sidebar-link {
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  color: #495057;
  text-decoration: none;
  transition: background-color 0.3s;
}
.add{
    display: none;
  } 

.sidebar-link i {
  margin-right: 10px;
}

.sidebar-link:hover {
  background-color: #425ff126;
  color: #425EF1;
  border-left: 4px solid;
}

.sidebar-link.active-link {
  background-color: #425ff126;
  color: #425EF1;
  border-left: 4px solid;
}
@media (max-width: 1200px) {
  .sidebar {
    height: 300px;
  }
  .add{
    display: block;
  margin-top: 10px;
  } 
}
</style>
