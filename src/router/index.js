import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import History from '@/components/History'
import Skill from '@/components/Skill'
import World from '@/components/World'
import Writer from '@/components/Writer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/History.vue',
      name: 'History',
      component: History
    },
    {
      path: '/Skill.vue',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/World.vue',
      name: 'World',
      component: World
    },
    {
      path: '/Writer.vue',
      name: 'Writer',
      component: Writer
    }
  ]
})
