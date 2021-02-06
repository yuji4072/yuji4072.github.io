<template>
  <div id = "top">
      <img src="../assets/myimg.png" id = "myimg">
      <div id = "yuji">Yuji Morishima</div>
      <div id = "age">Age: 20</div>
      <hr id = "bar">
      <b-button class="buttons" id ="Profile">Profile</b-button>
      <b-button class="buttons" id ="Skills">Skills</b-button>
      <b-button class="buttons" id ="Hobbies">Hobbies</b-button>
      <b-button class="buttons" id ="Novels">Novels</b-button>
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
        background: linear-gradient(180deg, rgba(240, 130, 30, 0.75) 28.65%,
         rgba(249, 204, 163, 0.26619) 80.73%, #FFFFFF 95.31%);
    }
    #myimg{
        position: absolute;
        width: 28rem;
        height: 28rem;
        left: 17.25rem;
        top: 11rem;
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
        font-size: 4rem;
        line-height: 4.9rem;
        text-align: center;
        color: #fff000;
    }
    #yuji{
        position: absolute;
        width: 25vw;
        height: 6.5vh;
        left: 53.25rem;
        top: 13rem;

        font-family:'Righteous',cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3.375rem;
        line-height: 4.1rem;
        text-align: center;

        color: #00a0bc;
    }
    #age{
        position: absolute;
        width: 14.6vw;
        height: 6.6vh;
        left: 77.7rem;
        top: 13.3rem;
        font-family:'Righteous',cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3rem;
        line-height: 3.7rem;
        text-align: center;

        color: #00a0bc;
    }
    #bar{
        position: absolute;
        width: 38vw;
        height: 0;
        left: 52.5rem;
        top: 19rem;
        border: 2px solid #193278;
    }
    #Profile{
        left: 49.5rem;
        top: 22.0625rem;
    }
    #Skills{
        left: 75.75rem;
        top: 22.0625rem;
    }
    #Hobbies{
        left: 49.5rem;
        top: 31.4375rem;
    }
    #Novels{
        left: 75.75rem;
        top: 31.4375rem;
    }
</style>