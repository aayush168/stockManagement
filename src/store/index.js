import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/module_auth'
import clients from './modules/module_clients'

import firebase from "../firebase/init"

Vue.use(Vuex)
Vue.use(firebase)

const store = new Vuex.Store({
  modules: {
    auth,
    clients
  }
})

export default store
