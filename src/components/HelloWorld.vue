<template>
  <div id = "home">
    <div id = "title">
      <div class="hello">Hello</div>
      <div id = "put"></div>
      <div class="hello">!</div>
    </div>
    <v-sheet class="next" id = "hobby">Hobby</v-sheet>
    <div class="next" id = "history">History</div>
    <div class="next" id = "writer">Writer</div>
    <div class="next" id = "skill">Skill</div>
    <div class="next" id = "world">World</div>
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
        {title: "hobby", path: '/hobby'},
        {title: "history", path: '/history'},
        {title: "writer", path: '/writer'},
        {title: "skill", path: '/skill'},
        {title: "world", path: '/world'}
      ],
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
}
#put{
  display: inline-block;
  height : 8rem;
  width: 24rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: #ffffff;
  border-width: thick;
  border-style: solid;
  border-color: #00aaff;
}
.hello{
  font-size:9rem;
  display: inline;
}
#title{
  position: relative;
  top: 35vh;  
}
</style>