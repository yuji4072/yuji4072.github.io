<template>
  <div id="top">
      <div class="oya">
        <hr class="bar" id = "right">
        <div id = "moji">Novels</div>
        <hr class="bar" id = "left">
      </div>
  </div>
</template>

<script>
export default {

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
        line-height: 18.4vh;
        text-align: center;
        color: #F0821E;

    }
    .oya{
        position: relative;
    }
</style>