import firebase from "../../firebase/init"
import db from "../../firebase/db"
import router from "../../router"

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
  clearUserData(state){
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
}

const actions = {
  async checkUserLoginStatus({ commit }) {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.user) {
          user = user.user;
        }
        const setUser = {
          id: user.uid,
          username: user.email,
        };
        commit('setUser', setUser);
        router.push('/');
      } else {
        router.push('/login');        
      }
    });
  },
  async login({commit, dispatch}, payload) {
    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    dispatch('checkUserLoginStatus')
  },
  async logout({ commit }) {
    await firebase.auth().signOut().then(() => {
      commit('clearUserData')
      router.push('/login')
      }
    )
  }, 
  async signUp({ commit }, payload) {
    await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(() => {
      const setUser = {
        id: user.uid,
        username: user.email,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection('users').doc(setUser.id).set(setUser);
    })
  }
 }

const auth = {
  state,
  getters,
  mutations,
  actions
};

export default auth;