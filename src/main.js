import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

import Home from './components/Home';

const routes = [{
  name: "home",
  path: "/",
  component: Home
}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')