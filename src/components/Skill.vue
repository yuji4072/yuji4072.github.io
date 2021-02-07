<template>
  <div id = "top">
  <div class = "oya">
    <hr class="bar" id = "right">
    <div id = "moji">Skills</div>
    <hr class="bar" id = "left">
  <b-card-group deck id="group">
    <b-card no-body>
    <b-card-img src="/src/assets/logo.png" alt="Image" top></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>

    <b-card no-body>
    <b-card-img img-src="../assets/python.svg" alt="Image" top></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>

    <b-card no-body>
    <b-card-img src="../assets/logo.png" alt="Image" top></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>

    <b-card no-body>
    <b-card-img src="../assets/logo.png" alt="Image" top></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>

    <b-card no-body>
    <b-card-img src="../assets/logo.png" alt="Image" top></b-card-img>
      <b-card-body title="C++" sub-title="使用歴:半年未満">
      <b-card-text>
        競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
      </b-card-text>
      </b-card-body>
    </b-card>
  </b-card-group>
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
        top: 9.8vh;

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
</style>