<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
     </ol>
     <draggable tag="ul">
       <li v-for="i in counts" :key=i.counts>
         {{i.couts}}
       </li>
     </draggable>
     <div class="hi">call of duty</div>
     <button class="btn btn-danger">bootstrap</button>
    <b-button variant="primary">bootstrap</b-button>
    <button class="btn btn-primary btn-lg btn-block" id="you" type="submit">Button</button>
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
ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

.hi{
  color:black;
}
#you{
  color:brown;
  background-color:blueviolet
}
</style>
