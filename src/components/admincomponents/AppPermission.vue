<template>
  <main>
    <!-- User Table -->
    <div class="card shadow-sm p-4">
      <div class="shadow-sm table-responsive p-3 mb-3 bg-body rounded">
        <table class="table align-middle pl-4 mb-4 mt-2 bg-white">
          <!-- Table Header -->
          <thead class="bg-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>permission</th>
              <th class="col-md-3">Actions</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.first_name }}  {{ user.last_name }}</td>
              <td>
                <span v-for="permission in user.permissions" :key="permission.id" class="badge bg-primary ">{{ permission.name }} <span class="cursor-pointer" @click="removePermission(permission.name , user.id)">x</span> </span>
              </td>
              <td class="d-flex gap-4">
                <span v-for="permission in permissions" :key="permission.id" class="badge bg-success">{{ permission.name }} <span class="cursor-pointer" @click="AddPermission(permission.name , user.id)">+</span> </span>
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
  name: 'AppPermissions',
  data() {
    return {
      users: [],
      permissions: [],
      selectedUserId: null,
      selectedRole: null,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/getPermissionwithUsers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.users = response.data.users;
        console.log(this.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchPermissions() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/getPermission', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = response.data;
        console.log(this.permissions);
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }

    },

    async AddPermission(permission, user_id) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post(`http://127.0.0.1:8000/api/getPermissionto/${user_id}`,{ permission: permission, }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = response.data;
        console.log(this.permissions);
        this.fetchUsers();
        this.fetchPermissions();
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    },


    async removePermission(permission, user_id) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post(`http://127.0.0.1:8000/api/deletePermissionTo/${user_id}`,{ permission: permission, }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.permissions = response.data;
        console.log(this.permissions);
        this.fetchUsers();
        this.fetchPermissions();
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    },

   

   
  },
  mounted() {
    this.fetchUsers();
    this.fetchPermissions();
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
