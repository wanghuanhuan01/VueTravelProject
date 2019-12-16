<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.url" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          url: 'https://imgs.qunarzz.com/p/tts0/1912/67/eb80c74f0c34e002.jpg_256x144_c4c081ec.jpg',
          title: '上海出发一日游',
          desc: '上海迪士尼门票+车+园内导览'
        },
        {
          id: '0002',
          url: 'https://imgs.qunarzz.com/p/tts7/1912/83/91ec401af211eb02.jpg_256x144_0de6f257.jpg',
          title: '上海出发一日游',
          desc: '上海迪士尼门票+车+园内导览'
        },
        {
          id: '0003',
          url: 'https://imgs.qunarzz.com/p/tts3/1912/79/c31546479d110a02.jpg_256x144_8da836a2.jpg',
          title: '上海出发一日游',
          desc: '上海迪士尼门票+车+园内导览'
        },
        {
          id: '0004',
          url: 'https://imgs.qunarzz.com/p/tts8/1912/5e/2fadf8556bb30b02.jpg_256x144_637cbbe0.jpg',
          title: '上海出发一日游',
          desc: '上海迪士尼门票+车+园内导览'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-align left
    text-indent: .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      text-align left
      padding .1rem
    .item-title
      line-height .4rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    button
      background-color #ff9300
      padding .1rem
      border-radius .06rem
      margin-top .16rem
      color #fff
</style>
