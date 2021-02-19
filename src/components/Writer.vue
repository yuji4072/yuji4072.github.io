<template>
  <div id="novel">
    <div class="oya">
      <hr class="bar" id="right" />
      <div id="moji">Novels</div>
      <hr class="bar" id="left" />
      
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <router-link to = 'Novel_seisai'>
        <b-carousel-slide
          caption="制裁:もう僕は君と付き合えない"
          img-src="https://picsum.photos/1024/480/?image=52"
        >
          <p></p>
        </b-carousel-slide>
        </router-link>

        <b-carousel-slide
          caption="月が消えた夏に"
          img-src="https://picsum.photos/1024/480/?image=54"
        >
          <p></p>
        </b-carousel-slide>

        <b-carousel-slide
          caption="神様に触れた一週間"
          img-src="https://picsum.photos/1024/480/?image=58"
        >
          <p></p>
        </b-carousel-slide>

        <b-carousel-slide
          caption="神様に触れた一週間"
          img-src="https://picsum.photos/1024/480/?image=58"
        >
          <p></p>
        </b-carousel-slide>

        <b-carousel-slide
          caption="神様に触れた一週間"
          img-src="https://picsum.photos/1024/480/?image=58"
        >
          <p></p>
        </b-carousel-slide>

        <p class="mt-4">
          Slide #: {{ slide }}<br />
          Sliding: {{ sliding }}
        </p>
      </b-carousel>
    </div>
    <div id ="tama">
      PN: Hanai Tama
      <b-link src = "https://kakuyomu.jp/users/hanaitama">
      https://kakuyomu.jp/users/hanaitama
      </b-link>
    </div>
  </div>
</template>

<script>
import Novel_seisai from './Novel_seisai.vue'

export default {

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
#novel {
  position: relative;
  background: #ffffff;
}
.bar {
  position: absolute;
  border: 1vh solid #00a0bc;
  width: 44.3vw;
  height: 0;
}
/* #left {
  left: 16.8vw;
  top: 9.8vh;
}
#right {
  left: 38.2vw;
  top: 23.44vh;
}
#moji {
  position: absolute;
  width: 22.9vw;
  height: 13.6vh;
  left: 38.2vw;
  top: 10.8vh;

  font-family: "Righteous", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 6vw;
  line-height: 18.4vh;
  text-align: center;
  color: #f0821e;
} */
.oya {
  position: relative;
}
#carousel-1 {
    position:absolute;
    margin: 40vh 6vw 20vh 16vw;
    text-align: center;
}
</style>