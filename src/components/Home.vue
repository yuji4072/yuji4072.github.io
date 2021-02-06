<template>
  <div id = "top">
      <img src="../assets/Medium_toppage_test3.png" id = "back">
      <div id = "title">WHO AM I?</div>
      <button type = "button" id_button = "im">
          <div id ="im">I'M ...</div>
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

#back{

  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #F0821E, #F0821E), 
  linear-gradient(180deg, #FFF000 0%, rgba(255, 255, 255, 0) 0.01%,
   rgba(255, 240, 0, 0.979167) 100%);
}
#title{
  position: absolute;
  left: 3.7vw;
  top: 24.7vh;
  width: 90vw;
  height: 35vh;

  font-style: normal;
  font-weight: normal;
  font-size: 18rem;
  line-height: 22.375rem;
  text-align: center;
  font-family: 'Righteous', cursive;

  color: #00a0bc;
}

</style>