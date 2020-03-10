import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleLeft, 
  faFacebookSquare
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

export const EventBus = new Vue()

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
  component: ProjectDetails
}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
