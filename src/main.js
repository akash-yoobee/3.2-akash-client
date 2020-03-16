import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleLeft,
  faFacebookSquare,
  faPlus
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export const EventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

import Site from './Site';
import Admin from './Admin';
import Home from './components/Home';
import Projects from './components/Projects';
import Pagespeed from './components/Pagespeed';
import ProjectDetails from './components/ProjectDetails'
import AdminLogin from './components/admin/AdminLogin'
import AdminProfile from './components/admin/AdminProfile'
import AdminProject from './components/admin/AdminProject'

const routes = [{
  path: '/',
  component: Site,
  children: [{
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'projects',
    path: '/projects',
    component: Projects,
    props: true //this enables route params
  },
  {
    name: "pagespeed",
    path: "/pagespeed",
    component: Pagespeed
  },
  {
    name: 'projectdetails',
    path: '/projectdetails',
    component: ProjectDetails
  }]
}, {
  path: '/admin',
  component: Admin,
  children: [
    {
      name: 'adminLogin',
      path: '/',
      component: AdminLogin
    },
    {
      name: 'adminProfile',
      path: 'profile',
      component: AdminProfile
    },
    {
      name: 'adminProject',
      path: 'project',
      component: AdminProject
    }
  ]
}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
