<template>
  <div class="icons">
    <swiper ref="mySwiper">
       <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="img">
              <img :src="item.url" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
       </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0002',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0003',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0004',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '0005',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0006',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0007',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0008',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '0009',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '热门景点'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.map((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    width 100%
    height 0
    padding-bottom 50%
    padding-top: .44rem
    .icon
      position relative
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      float left
    .img
      position absolute
      top 0
      left 0
      right 0
      bottom: 0.44rem
      img
        height: 85%
        width: 80%
        display: block
        margin: 0 auto
    .icon-desc
      position absolute
      left 0
      right 0
      bottom: 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      ellipsis ()
</style>
