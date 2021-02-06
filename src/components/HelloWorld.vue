<template>
  <div>
    <Home></Home>
    <Home2></Home2>
  </div>
</template>

<script>
import Home from './Home.vue'
import Home2 from './Home2.vue'

export default {
  name: 'HelloWorld',

  components: {
     Home,
     Home2, 
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