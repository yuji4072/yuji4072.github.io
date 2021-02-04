<template>
  <div id = "home">
    <div id = "title">
      <div class="hello">Hello</div>
      <div id = "put"></div>
      <div class="hello">!</div>
    </div>
    <v-sheet class="next" id = "hobby" @click = "hobby">Hobby</v-sheet>
    <v-sheet class="next" id = "history" @click = "history">History</v-sheet>
    <v-sheet class="next" id = "writer" @click = "writer">Writer</v-sheet>
    <v-sheet class="next" id = "skill" @click = "skill">Skill</v-sheet>
    <v-sheet class="next" id = "world" @click = "world">World</v-sheet>
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
      items:[
        {title: "hobby", path: '/hobby'},
        {title: "history", path: '/history'},
        {title: "writer", path: '/writer'},
        {title: "skill", path: '/skill'},
        {title: "world", path: '/world'}
      ],
      hobby: document.getElementById("hobby"),
      history: document.getElementById("history"),
      skill: document.getElementById("skill"),
      writer: document.getElementById("writer"),
      world: document.getElementById("world"),
    }
  },
  methods:{
    hobby: function(event){
      document.addEventListener("mousemove",HobbyonMouseMove);
    },
    HobbyonMouseMove: function(event){
      var x = event.clientX;
      var y = event.clientY;
      var width = this.hobby.offsetWidth;
      var height = this.hobby.offsetHeight;
      this.hobby.top = (y - height/2) + "px";
      this.hobby.top = (x - width/2) + "px";
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
  -khtml-user-drag: element;
}
.hello{
  font-size:9rem;
  display: inline;
}
#title{
  position: relative;
  top: 35vh;  
}
.next{
  font-size: 6rem;
  position: absolute;
  z-index: 3;
  top: 0;
}
.next#hobby{
  margin-left:0;
}
</style>