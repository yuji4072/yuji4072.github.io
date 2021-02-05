<template>
  <div>
    <div id = "home">
      <div id = "title">
        <div class="hello">Hello</div>
        <div id = "put"></div>
        <div class="hello">!</div>
      </div>
      <v-sheet class="next" id = "hobby">Hobby</v-sheet>
      <v-sheet class="next" id = "history">History</v-sheet>
      <v-sheet class="next" id = "writer">Writer</v-sheet>
      <v-sheet class="next" id = "skill">Skill</v-sheet>
      <v-sheet class="next" id = "world">World</v-sheet>
    </div>
    <div id = "next_border">
      <div id = "next_home">
          
      </div>
    </div>
  </div>
</template>

<script>
// import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  // components:{
  //   'draggable':draggable,
  // },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
  
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  height: 100vh;
  width: 100vw;
  background-color: #00aaff;
  padding: 0;
  margin: 0;
}
#next_border{
  height: 100vh;
  width: 100vw;
  background-color: #f67690;
}
#next_home{
  position: relative;
  height: 95vh;
  width: 70vw;
  background-color: #ffffff;
  margin:auto;
  top:2.5vh;
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
  border-color: #f67690;
  -khtml-user-drag: element;
}
.hello{
  font-size:9rem;
  display: inline;
  color: #ffffff;
}
#title{
  position: relative;
  top: 30vh;  
}
.next{
  font-size: 6rem;
  position: absolute;
  z-index: 3;
  color: #ffffff;
  top: 0;
}
.next#hobby{
  margin-left:0;
}
</style>