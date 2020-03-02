import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

import Home from './components/Home';
import Projects from './components/Projects';

const routes = [{
  name: "home",
  path: "/",
  component: Home
},
{
  name: "projects",
  path: "/projects",
  component: Projects
}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')