<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '//imgs.qunarzz.com/vs_ceph_b2c_001/4ec8fb8b-573a-4f2d-b08e-0ee57a103c30.jpg_r_480x320x95_387c477c.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/3b551931-6b89-41db-b9dc-73b7385c6fa0.jpg_r_480x320x95_2cf96eef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 33.9%;
}
.item-img {
  width: 100%;
  height: 3rem;
}
.item-info {
  padding: 0.1rem;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
