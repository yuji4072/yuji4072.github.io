<template>
  <div  id = "pop">
      <div class = "oya">
        <hr class="bar" id = "right">
        <div id = "moji">Profile</div>
        <hr class="bar" id = "left">
        <b-table striped :items="items" id = "table"></b-table>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { year: 2000, event: '生まれる' },
          { year: 2013, event: '『変態王子と笑わない猫』にハマる'},
          { year: 2016, event: '豊田工業高等専門学校 入学'},
          { year: 2016, event: '全国高等専門学校サッカー選手権大会 メンバー' },
          { year: 2018, event: '休学 ドイツへ留学' },
          { year: 2019, event: '帰国後アートクリエイト同好会へ所属'},
          { year: '', event: ':'},
          { year: '', event: ':'},
          { year: 20 + '??', event: '最強になる'}
        ]
      }
    }
}
</script>

<style>
    #pop{
        position: relative;
        width: 100vw;
        height: 150vh;
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
    #table{
        position: absolute;
        width: 62.13vw;
        height: 100vh;
        left: 18.6vw;
        top: 35.5vh;
      
        font-style: normal;
        font-weight: normal;
        font-size: 1.2vw;
        line-height: 3.5vh;
        text-align: center;
        color: #F0821E;
    }

</style>