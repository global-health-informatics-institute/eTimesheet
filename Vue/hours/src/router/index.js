import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hours from '@/components/Hours'
import AddProject from '@/components/AddProject'
import Team from '@/components/Team'
import Primary from '@/components/Primary'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/hours',
      name: 'Hours',
      component: Hours,
    },
    {
      path: '/add-project',
      name: 'AddProject',
      component: AddProject,
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
    },
    {
      path: '/primary/:id',
      name: 'Primary',
      // props:'projectId',
      alias: 'Primary',
      component: Primary,
      // query: 'select*from primay, where projectId=1'
    },
  ]
})
