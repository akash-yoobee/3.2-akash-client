import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  name: 'home',
  path: '/',
  component: Home
},
{
  name: 'projects',
  path: '/projects',
  component: Projects
},
{
  name: 'projectdetails',
  path: '/projectdetails',
  component: ProjectDetail
}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
