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
          url: 'https://bpic.588ku.com/back_list_pic/20/08/04/1281535610fe1b16cdb1853780e4a06b.jpg!/fh/300/quality/90/unsharp/true/compress/true'
        },
        {
          id: '0002',
          url: 'https://bpic.588ku.com/back_list_pic/20/08/04/a079c7f9b7942b537e0e6e4c30c16c62.jpg!/fh/300/quality/90/unsharp/true/compress/true'
        }, {
          id: '0003',
          url: '//bpic.588ku.com/back_list_pic/20/08/04/38d1625d6b861de622009c57a258a18a.jpg!/fh/300/quality/90/unsharp/true/compress/true'
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
