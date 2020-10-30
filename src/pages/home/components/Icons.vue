<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url" />
          </div>
          <p class="icon-desc">{{ item.text }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: false
      },
      iconList: [
        {
          id: '0001',
          text: '民宿客栈',
          url: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png'
        },
        {
          id: '0002',
          text: '专车自驾',
          url: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png'
        },
        {
          id: '0003',
          text: '信用卡',
          url: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png'
        },
        {
          id: '0004',
          text: '旅游团购',
          url: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png'
        },
        {
          id: '0005',
          text: '一日游',
          url: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png'
        },
        {
          id: '0006',
          text: '特惠酒店',
          url: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png'
        },
        {
          id: '0007',
          text: '借钱',
          url: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png'
        },
        {
          id: '0008',
          text: '白金卡',
          url: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png'
        },
        {
          id: '0009',
          text: '行程设计',
          url: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png'
        },
        {
          id: '0010',
          text: '周边短途',
          url: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png'
        },
        {
          id: '0011',
          text: '周边短途',
          url: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png'
        }
      ]
    };
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }

};
</script>

<style lang="scss" scoped>
.icons {
  height: 0;
  padding-bottom: 36%;
  overflow: hidden;
  margin-top: 0.1rem;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 20%;
  height: 0;
  padding-bottom: 18%;
}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
