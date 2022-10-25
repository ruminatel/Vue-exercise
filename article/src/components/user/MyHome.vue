<template>
  <div class="home-container">
    <MyHeader></MyHeader>
    <br />
    <div class="home-main-box">
      <!-- 左侧侧边栏 -->
      <MyAside></MyAside>
      <!-- 右侧主体区域 -->
      <div class="home-main-body">123</div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line spaced-comment
//头部区域组件
// eslint-disable-next-line no-unused-vars, quotes, semi
import MyHeader from "@/subcomponents/MyHeader.vue";
// eslint-disable-next-line spaced-comment
//左侧边栏组件
// eslint-disable-next-line no-unused-vars, quotes, semi
import MyAside from "@/subcomponents/MyAside.vue";
// eslint-disable-next-line semi
export default {
  // eslint-disable-next-line spaced-comment
  //注册组件
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MyHeader,
    // eslint-disable-next-line vue/no-unused-components, comma-dangle
    MyAside,
    // eslint-disable-next-line comma-dangle
  },
  // eslint-disable-next-line semi
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
