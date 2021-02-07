import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import World from '@/components/World'
import Writer from '@/components/Writer'
import Hobby from '@/components/Hobby'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Profile.vue',
      name: 'Profile',
      component: Profile
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
    },
    {
      path: '/Hobby.vue',
      name: 'Hobby',
      component: Hobby
    }
  ]
})
