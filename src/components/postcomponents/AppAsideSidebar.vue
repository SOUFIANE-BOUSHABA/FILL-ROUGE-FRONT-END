<template>
    <div>
      <div class="sidebar ">
        <router-link to="/" class="sidebar-link" active-class="active-link">
            <font-awesome-icon :icon="['fas', 'house']" />
             Home
        </router-link>


        <router-link to="/explore" class="sidebar-link" active-class="active-link">
          <font-awesome-icon :icon="['fas', 'chart-line']" />
          Explore Topics
        </router-link>


        <router-link to="/MyTopics" class="sidebar-link" active-class="active-link">
          <font-awesome-icon :icon="['fas', 'list']" />
          My Topics
        </router-link>


        <router-link to="/dashboard" class="sidebar-link" active-class="active-link">
          <font-awesome-icon :icon="['fas', 'message']" />
          My Answers
        </router-link>


        <router-link to="/dashboard" class="sidebar-link" active-class="active-link">
          <font-awesome-icon :icon="['fas', 'users']" />
          Users
        </router-link>
  
       
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppAsideSidebar',
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
    gap:15px;
    align-items: center;
    padding: 10px;
    color: #495057; 
    text-decoration: none;
    transition: background-color 0.3s;
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
  </style>
  