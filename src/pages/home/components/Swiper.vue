<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 小点
        loop: true // 支持循环
      },
      swiperList: [
        {
          id: '0001',
          url: 'https://imgs.qunarzz.com/p/p64/1809/46/ddb72937ac938a02.jpg_256x160_5f99ddba.jpg'
        },
        {
          id: '0002',
          url: 'https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg'
        }, {
          id: '0003',
          url: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 3rem;
}
.swiper-img {
  width: 100%;
  height: 3rem;
}
</style>

<style lang="scss">
.swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>
