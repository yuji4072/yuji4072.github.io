<template>
  <div id="hob">
    <div class="oya">
      <hr class="bar" id="right" />
      <div id="moji">Hobby</div>
      <hr class="bar" id="left" />
    </div>
    <div class="contain">
    <div class="titleskill">Write Lyrics</div>
      <b-card-group deck class="mb">
        <iframe
          class = "aonatu"
          src="https://www.youtube.com/embed/7LX9MHDBsDk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <b-card border-variant="light" header="青夏" class="text-center">
          <b-card-text
            >夏の青さ故に青夏</b-card-text
          >
        </b-card>
      </b-card-group>
      <b-card-group deck class="mb">
        <b-card border-variant="light" header="After the Rain" class="text-center">
          <b-card-text
            >雨上がりの一瞬</b-card-text
          >
        </b-card>
        <iframe
          class="aonatu"
          src="https://www.youtube.com/embed/Ov15o_DAIYs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#hob {
  position: relative;

  width: 100vw;
  /* height: 100vh; */
  background: #ffffff;
  display: flex;
  text-align: center;
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
.titleskill {
  font-family: "Righteous", cursive;
  color: #f0821e;
  font-size: 4vw;
  margin: 40vh auto 10vh auto;
}
.contain {
  justify-content: space-around; /* margin: 0 10vw; */
  flex-wrap: wrap;
  margin: 0 auto 0 auto;
  text-align: center;

  /* position: relative; 
  width: 82.13vw;
  top: 40.5vh;
  left: 10.6vw;
  text-align: center; */
}
.mb{
    margin: 0 auto;
}
.text-center{
    color: #f0821e;
    font-size: 2vw;
    font-family: "Kosugi", cursive;
}
.aonatu{
    width: 50.1vw;
    height: 50.8vh;
    margin: 0 5vw 10vh 5vw;
}
</style>