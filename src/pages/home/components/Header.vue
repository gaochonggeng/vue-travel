<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont backicon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩/主题
      </div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header {
  line-height: 0.86rem;
  display: flex;
  background: #00bcd4;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
}
.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}
.header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
}
.backicon {
  text-align: center;
  font-size: 0.4rem;
}
.arrow-icon {
  font-size: 0.24rem;
}
</style>
