<template>
  <div id = "top">
  <div class = "oya">
    <hr class="bar" id = "right">
    <div id = "moji">Skills</div>
    <hr class="bar" id = "left">
  <div class="container">
    <b-card no-body class="card">
    <b-card-img v-bind:src="image_cpp" alt="Image" top class= "img"></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>

   
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      image_cpp:require("../assets/logo.png"),
    }
  }

}
</script>

<style>
    #top{
        position: relative;
        width: 100vw;
        height: 100vh;
        background: #ffffff;
    }
    .bar{
        position: absolute;
        border: 1vh solid #00a0bc;
        width: 44.3vw;
        height: 0;
    }
    #left{
        left: 16.8vw;
        top: 9.8vh;
    }
    #right{
        left: 38.2vw;
        top:23.44vh;
    }
    #moji{
        position: absolute;
        width: 22.9vw;
        height: 13.6vh;
        left: 38.2vw;
        top: 10.8vh;

        font-family: 'Righteous',cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 6vw;
        line-height: 7.4vh;
        text-align: center;
        color: #F0821E;

    }
    .oya{
        position: relative;
    }

    #group{
      position: absolute;
      width: 62.13vw;
      left: 18.6vw;
      top: 35.5vh;
    }
    .card{
      width: 20rem;
      margin: 0.5vw;;
    }
    .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    position: absolute;
    width: 82.13vw;
    left: 10.6vw;
    top: 35.5vh;
    text-align: center;
    }
    .img{
      width: 5rem;
      height: 7rem;
      margin: 0 auto;
    }

</style>