<template>
  <div id = "home">
    <div class="hello">Hello</div>
    <div id = "put"></div>
    <div class="hello">!</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  components:{
    'draggable':draggable,
  },
  data () {
    return {
      items:[
        {title: "top", path: '/'},
        {title: "profile", path: '/progile'},
        {title: "skills", path: '/skills'},
        {title: "outputs", path: '/outputs'}
      ],
      counts:[
        {counts:1},
        {counts:2},
        {counts:3}
      ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  height: 100vh;
  width: 100vw;
  background-color: aqua;
  padding: 0;
  margin: 0;
}
#put{
  display: inline;
}
.hello{
  font-size:8rem;
  display: inline;
}
</style>
