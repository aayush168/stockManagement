import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/module_auth'
import firebase from "../firebase/init"

Vue.use(Vuex)
Vue.use(firebase)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
