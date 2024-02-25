
const state = {
    user: null,
    userRole: null,
    token: localStorage.getItem('jwt') || null,
    isAdmin: null,
  };
  
  const getters = {
    user: state => state.user,
    role: state => state.userRole,
    isLoggedIn: state => state.token !== null,
    isAdmin: state => state.userRole=== 'admin',
  };
  
  const mutations = {
    setUser: (state, { user, userRole }) => {
      state.user = user;
      state.userRole = userRole;
    },
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem('jwt', token);
    },
  };
  
  const actions = {};
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };
  