<template>
  <main>
    <div class="card shadow-sm p-4">
      <div class="shadow-sm table-responsive p-3 mb-3 bg-body rounded">
        <table class="table align-middle pl-4 mb-4 mt-2 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.first_name }}  {{ user.last_name }}</td>
              <td > {{ user.role.name }}</td> 
              <td>
                <button v-if="!user.is_blocked" @click="blockUser(user.id)" class="btn btn-danger">Block</button>
                <button v-else @click="blockUser(user.id)" class="btn btn-success">Unblock</button>
                <button @click="editRole(user.id)" class="btn btn-primary">Edit Role</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });

        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },



      async blockUser(userId) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.post(`http://127.0.0.1:8000/api/users/${userId}/block`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.fetchUsers(); 
      } catch (error) {
        console.error('Error blocking user:', error);
      }
    },



    async editRole(userId) {
      console.log(`Editing role for user with ID ${userId}`);
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
