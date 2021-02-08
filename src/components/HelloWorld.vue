<template>
  <div>
    <div class="container" style="margin: 0; padding: 0;">
    <Home></Home>
    <Home2></Home2>
    <Profile></Profile>
    <Skill></Skill>
    <Hobby></Hobby>
    <Writer></Writer>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
import Home2 from './Home2.vue'
import Profile from './Profile.vue'
import Writer from './Writer.vue'
import Skill from './Skill.vue'
import Hobby from './Hobby.vue'

export default {
  name: 'HelloWorld',

  components: {
     Home,
     Home2,
    Profile,
    Skill,
    Writer, 
    Hobby,
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->