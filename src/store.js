import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: localStorage.getItem('jwt') || null,
    userRole: localStorage.getItem('userRole') || null,
    email: '',
    password: '',
  }),
  getters: {
    isLoggedIn: (state) => state.token !== null,
    isAdmin: (state) => state.userRole === 'admin',
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem('jwt', token);
    },
    setUserRole(role) {
      this.userRole = role;
      localStorage.setItem('userRole', role);
    },
    setCredentials({ email, password }) {
      this.email = email;
      this.password = password;
    },
    logout() {
      this.user = null;
      this.token = null;
      this.userRole = null;
      localStorage.removeItem('jwt');
      localStorage.removeItem('userRole');
    },
  },
});
