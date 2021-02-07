<template>
  <div id = "top">
    <div class = "oya">
      <img src="../assets/Medium_toppage_test3.png" id = "back">
      <div id = "title">WHO AM I ?</div>
      <b-button id = "im">
          I'M ...
      </b-button>
      <div id = "try"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#top{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #F0821E, #F0821E), 
  linear-gradient(180deg, #FFF000 0%, rgba(255, 255, 255, 0) 0.01%, 
  rgba(255, 240, 0, 0.979167) 100%);
}
#back{

  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #F0821E, #F0821E), 
  linear-gradient(180deg, #FFF000 0%, rgba(255, 255, 255, 0) 0.01%,
   rgba(255, 240, 0, 0.979167) 100%);
   object-fit: cover;
}
#title{
  position: absolute;
  left: 3.7vw;
  top: 15.7vh;
  width: 90vw;
  height: 35vh;

  font-style: normal;
  font-weight: normal;
  font-size: 9vw;
  line-height: 45vh;
  text-align: center;
  font-family: 'Righteous', cursive;

  color: #00a0bc;
}
#im{
  position: absolute;
  width: 33vw;
  height: 11.8vh;
  left: 30.4vw;
  top: 55vh;

  background: #00a0bc;
  border-radius: 1rem;

  font-size: 5vw;
  font-family: 'Righteous',cursive;
  font-style:normal;
  font-weight: normal;
  line-height: 4.43vw;
  text-align: center;

  color: #FFF000;
}
#try{
  position: absolute;
  left: 63.125rem;
  top: 55.625rem;

  background: #00a0bc;
  border-top: 3.125rem;
  border-right: 3.125rem;
  border-left: 3.125rem;
}
.oya{
  position: relative;
}
</style>