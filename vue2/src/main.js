import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import uav from "@/uav";
import router from "@/router";
import '@/style/index.css'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(uav)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
