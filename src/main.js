import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Field,
  NavBar,
  Form,
  CountDown,
  Toast,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Image as VanImage,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Dialog
} from 'vant'
import './styles/index.less'
import 'vant/lib/index.css'
import 'amfe-flexible'

Vue.use(Dialog)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(GridItem)
Vue.use(Grid)
Vue.use(VanImage)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(TabbarItem)
Vue.use(Tabbar)
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
