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
              <th>Role</th>
              <th class="col-md-3">Actions</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.first_name }}  {{ user.last_name }}</td>
              <td>{{ user.role.name }}</td> 
              <td class="d-flex gap-4">
                <!-- Block/Unblock Button -->
                <button v-if="!user.is_blocked" @click="blockUser(user.id)" class="btn btn-danger">Block</button>
                <button v-else @click="blockUser(user.id)" class="btn btn-success">Unblock</button>
                <!-- Edit Button -->
                <button @click="openEditModal(user)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editRoleModal">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit Role Modal -->
    <div class="modal fade" id="editRoleModal" tabindex="-1" aria-labelledby="editRoleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editRoleModalLabel">Edit Role</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label for="roleSelect" class="form-label">Select Role:</label>
            <select v-model="selectedRole" class="form-select" id="roleSelect">
              <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="updateRole" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppUsers',
  data() {
    return {
      users: [],
      roles: [],
      selectedUserId: null,
      selectedRole: null,
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

    async fetchRoles() {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://127.0.0.1:8000/api/roles', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.roles = response.data;
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    },

    openEditModal(user) {
      this.selectedUserId = user.id;
      
    },

    async updateRole() {
      try {
        const token = localStorage.getItem('jwt');
        await axios.put(`http://127.0.0.1:8000/api/users/${this.selectedUserId}/role`, { role_id: this.selectedRole }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        window.location.reload();
        this.fetchUsers();
      } catch (error) {
        console.error('Error updating role:', error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchRoles();
  },
};
</script>

<style scoped>
</style>
