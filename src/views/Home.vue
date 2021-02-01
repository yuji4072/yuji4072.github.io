<template>
  <div>
    <div v-bind:class = "type">
        aaaaa
    </div>
    <div>
      <button v-on:click = "changes">{{count}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      type :"red",
      count : 0
    }),
    methods:{
      changes: function(){
        if(this.type == "red")this.type = "blue"
        else this.type = "red"
        this.count += 1;
      }
    },
  }
</script>

<style scoped>
    .red{
      color: red;
    }
    .blue{
      color: blue;
    }
</style>