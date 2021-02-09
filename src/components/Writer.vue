<template>
  <div id="novel">
      <div class="oya">
        <hr class="bar" id = "right">
        <div class = "moji">Novels</div>
        <hr class="bar" id = "left">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #novel{
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
    .oya{
        position: relative;
    }
</style>