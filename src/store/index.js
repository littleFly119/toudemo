import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storeage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token_key: getItem('token_key')
  },
  getters: {},
  mutations: {
    update_token_key (state, data) {
      this.state.token_key = data
      setItem('token_key', data)
    }
  },
  actions: {},
  modules: {}
})
