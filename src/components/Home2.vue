<template>
  <div id = "home2">
      <div class = "oya">
      <img src="../assets/myimg.png" id = "myimg">
      <div id = "yuji">Yuji Morishima</div>
      <div id = "age">Age: 20</div>
      <hr id = "bar">
      <router-link to="#prof">
      <b-button class="buttons" id ="Profile">Profile</b-button>
      </router-link>
      <router-link to="#skill">
      <b-button class="buttons" id ="Skills">Skills</b-button>
      </router-link>
      <router-link to="#hob">
      <b-button class="buttons" id ="Hobbies">Hobbies</b-button>
      </router-link>
      <router-link to="#novel">
      <b-button class="buttons" id ="Novels">Novels</b-button>
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  watch: {
    '$route': function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, '')).scrollIntoView()
      }
      console.log('new, old', [n.hash, o.hash])
    }
  },
  mounted () {
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  }
}
</script>

<style>
    #home2{
        position: relative;
        width: 100vw;
        height: 100vh;
        background: #ffffff;
    }
    #myimg{
        position: absolute;
        width: 26.53vw;
        height: auto;
        left: 12.5vw;
        top: 15vh;
        border-radius: 320px;
    }
    .buttons{
        position: absolute;
        background:#00a0bc;
        border-radius: 1.25rem;
        font-family:'Righteous',cursive;
        width: 20.6vw;
        height: 10.63vh;
        
        font-style: normal;
        font-weight: normal;
        font-size: 4vw;
        line-height: 5vh;
        text-align: center;
        color: #fff000;
    }
    #yuji{
        position: absolute;
        width: 25vw;
        height: 6.5vh;
        left: 50.4vw;
        top: 21.6vh;

        font-family:'Righteous',cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3.4vw;
        line-height: 9vh;
        text-align: center;

        color: #00a0bc;
    }
    #age{
        position: absolute;
        width: 14.6vw;
        height: 6.6vh;
        left: 73.6vw;
        top: 22.29vh;
        font-family:'Righteous',cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3vw;
        line-height: 8vh;
        text-align: center;

        color: #00a0bc;
    }
    #bar{
        position: absolute;
        width: 38vw;
        height: 0;
        left: 49.7vw;
        top: 30.6vh;
        border: 2px solid #193278;
    }
    #Profile{
        left: 46.86vw;
        top: 36.77vh;
    }
    #Skills{
        left: 71.72vw;
        top: 36.77vh;
    }
    #Hobbies{
        left: 46.86vw;
        top: 52.4vh;
    }
    #Novels{
        left: 71.72vw;
        top: 52.4vh;
    }
    .oya{
        position: relative;
    }
</style>