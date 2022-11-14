import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Field, NavBar, Form, CountDown, Toast } from 'vant'
import './styles/index.less'
import 'vant/lib/index.css'
import 'amfe-flexible'

Vue.use(Button)
Vue.use(Field)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(CountDown)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
