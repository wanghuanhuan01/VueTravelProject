<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiperImg" :src="item.url" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          id: '0001',
          url: 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
        },
        {
          id: '0002',
          url: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active
      background-color #fff
  .wrapper
    width 100%
    height 0
    padding-bottom 32.8%
    overflow hidden
    .swiperImg
      width 100%
</style>
