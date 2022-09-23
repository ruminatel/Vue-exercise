<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3. 以标签形式，使用注册好的组件 -->
      
        <Left>
          <template v-slot:default>
            <p>这里是在left组件的内容区域，声明的p标签</p>
          </template>
        </Left>
      
     
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的 .vue 组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
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
