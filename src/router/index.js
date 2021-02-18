import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import World from '@/components/World'
import Writer from '@/components/Writer'
import Hobby from '@/components/Hobby'
import Home from '@/components/Home'
import Home2 from '@/components/Home2'
import Novel_seisai from '@/components/Novel_seisai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home.vue',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home2.vue',
      name: 'Home2',
      component: Home2
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
    },
    {
      path: '/Writer.vue/Novel_seisai.vue',
      name: 'Novel_seisai',
      component: Novel_seisai
    },
  ]
})
