import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storeage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('token_key') || null
  },
  getters: {},
  mutations: {
    update_user (state, data) {
      this.state.user = data
      setItem('token_key', data)
    }
  },
  actions: {},
  modules: {}
})
