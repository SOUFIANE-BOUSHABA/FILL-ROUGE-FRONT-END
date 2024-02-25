
const state = {
    user: null,
  
  };
  
  const getters = {
    isAdmin: (state) => {
      return state.user && state.user.role === 'admin';
    },
   
  };
  
  const mutations = {
    setUser: (state, user) => {
      state.user = user;
    },
  };
  
  const actions = {
  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };
  