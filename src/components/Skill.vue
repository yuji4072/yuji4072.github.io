<template>
  <div id="sop">
    <div class="oya">
      <hr class="bar" id="right" />
      <div id="moji">Skills</div>
      <hr class="bar" id="left" />
      <div class="titleskill">Langage</div>
      <div class="containe">
        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_cpp"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body
            title="C++"
            sub-title="使用歴:半年未満"
            class="title_lng"
          >
            <b-card-text class="text_lng">
              競技プログラミングのコーディングに使用している。この言語を知ってからはもうCと遊んだ日々に戻れない。
            </b-card-text>
          </b-card-body>
        </b-card>

        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_python"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body
            title="Python"
            sub-title="使用歴:4年ちょっと"
            class="title_lng"
          >
            <b-card-text class="text_lng">
              一番始めに触れたプログラム言語。故に幼馴染ポジ、負けヒロイン。少しだけ分かるけど授業以外全然使ってない。
            </b-card-text>
          </b-card-body>
        </b-card>

        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_c"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body title="C" sub-title="使用歴:3年以上" class="title_lng">
            <b-card-text class="text_lng">
              妻。自分との間にc++やc#等沢山の子どもを産んだ。今は別居こそしているが散々お世話になった。
            </b-card-text>
          </b-card-body>
        </b-card>
        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_csharp"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body title="C#" sub-title="使用歴:半年未満" class="title_lng">
            <b-card-text class="text_lng">
              Unityのゲーム開発を行う為に使用している。3Dゲーム制作からも逃げずにやっていきたい。
            </b-card-text>
          </b-card-body>
        </b-card>

        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_html"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body
            title="HTML"
            sub-title="使用歴:半年未満"
            class="title_lng"
          >
            <b-card-text class="text_lng">
              元々授業のWebアプリ制作で使用した。縁の下の力持ちだと思ってる。多分。
            </b-card-text>
          </b-card-body>
        </b-card>

        <b-card no-body class="car">
          <b-card-img
            v-bind:src="image_css"
            alt="Image"
            top
            class="img"
          ></b-card-img>
          <b-card-body
            title="CSS"
            sub-title="使用歴:半年未満"
            class="title_lng"
          >
            <b-card-text class="text_lng">
              <span id="css">完全に理解した</span>
            </b-card-text>
          </b-card-body>
        </b-card>
      </div>
      <div class="titleskill">Atcoder</div>
      <div id="atcoder">{{ data }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_cpp: require("../assets/c-plusplus.svg"),
      image_python: require("../assets/python.svg"),
      image_csharp: require("../assets/c-sharp.svg"),
      image_html: require("../assets/html-5.svg"),
      image_c: require("../assets/c.svg"),
      image_css: require("../assets/css-3.svg"),
      data: null,
    };
  },
  methods() {
    axios
      .get("https://atcoder.jp/users/Hanai_Tama/history/json")
      .then((response) => (this.info = response));
  },
};
</script>

<style>
#sop {
  position: relative;
  width: 100vw;
  background: #ffffff;
  display: flex;
}
.bar {
  /* position: absolute; */
  border: 1vh solid #00a0bc;
  width: 44.3vw;
  height: 0;
}
#left {
  left: 16.8vw;
  top: 9.8vh;
}
#right {
  left: 38.2vw;
  top: 23.44vh;
}
#moji {
  /* position: absolute; */
  width: 22.9vw;
  height: 13.6vh;
  /* left: 38.2vw;
  top: 10.8vh; */

  font-family: "Righteous", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 6vw;
  line-height: 7.4vh;
  text-align: center;
  color: #f0821e;
}
.oya {
  position: relative;
}
.car {
  width: 20rem;
  margin: 0.5vw;
  border-width: 0.5rem;
  border-color: #00a0bc;
}
.containe {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* margin: 0 10vw; */

  /* position: relative; 
  width: 82.13vw;
  top: 40.5vh;
  left: 10.6vw;
  text-align: center; */
}
.img {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
#css {
  margin-left: 10vw;
  white-space: nowrap;
  font-size: 3rem;
  overflow: hidden;
}
.text_lng {
  color: #f0821e;
  font-family: "Kosugi", cursive;
}
.title_lng {
  color: #f0821e;
  font-family: "Righteous", cursive;
  font-style: normal;
  font-weight: normal;
}
.titleskill {
  font-family: "Righteous", cursive;
  color: #f0821e;
  font-size: 4vw;
  margin: 40vh auto 0 auto;
}
</style>