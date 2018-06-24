import firebase from "../../firebase/init"

function initialState() {
  return {
    user: {},
    isLoggedIn: false,
    loginLoader: false
  }
}
const state = {
  ...initialState()
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  loginLoader: state => state.loginLoader,
  user: state => state.user
}
  
const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
}

const actions = {
  async login({commit}, payload) {
    try {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    } catch (error) {
      console.log(error)
    }
  },
  async logout() {
    await firebase.auth().signOut()
  }, 
  async signUp({ commit }, payload) {
    console.log(payload)
    await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
  }
 }

const auth = {
  state,
  getters,
  mutations,
  actions
};

export default auth;