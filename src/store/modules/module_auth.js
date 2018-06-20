
import * as Auth from "../services/Auth"
import firebase from "../../firebase/init"

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS'


function initialState() {
  return {
    isAuthenticated: false,
    loginLoader: false,
    username: '',
    userUid: ''
  }
}
const state = {
  ...initialState()
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  loginLoader: state => state.loginLoader,
  username: state => state.username
}
  
const mutations = {
  [LOGIN_SUCCESS](state, res) {
    state.isAuthenticated = true
    state.loginLoader = false
    state.username = res.email
    state.userUid = res.uid
  },
  [LOGIN_ERROR] (state) {
    state.loginLoader = false
  },
  [CHECK_LOGIN_SUCCESS] (state, firebaseUser) {
    state.isAuthenticated = true
    state.username = firebaseUser.email
    state.userUid = firebaseUser.uid
  }
}

const actions = {
  login ({ commit, state }, payload) {
    state.loginLoader = true
    return Auth.login(payload).then(res => {
      console.log(res)
      commit(LOGIN_SUCCESS, res)
    })
  },
  signUp ({ commit }, payload) {
    console.log(payload)
    return Auth.signUpUser(payload).then(res => {
    })
  },
  loginError ({ commit }) {
    commit(LOGIN_ERROR)
  },
  checkUserLogInStatus({commit}) {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        commit(CHECK_LOGIN_SUCCESS, firebaseUser)
      }
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