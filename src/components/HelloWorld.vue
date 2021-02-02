<template>
  <div id = "home">
    <div id = "title">
      <div class="hello">Hello</div>
      <div id = "put"></div>
      <div class="hello">!</div>
    </div>
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
  display: inline-block;
  height : 9rem;
  width: 27rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: azure;
}
.hello{
  font-size:10.5rem;
  display: inline;
}
#title{
  position: absolute;
  top: 32%;
  left: 26%;

}
</style>
