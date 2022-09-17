<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <button @click="comName = 'Left'">展示</button>
    <button @click="comName = 'Right'">展示</button>

    <div class="box">
      

      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3. 以标签形式，使用注册好的组件 -->
      <!-- <Left></Left>
      <Right></Right> -->
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的 .vue 组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
    return {
      comName: Left
    }
  },
  // 2. 注册组件
  components : {
    Left,
    Right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
