<template>
  <div class="left-container">
    <h3>Left 组件 --- {{ count }}</h3>
    <hr />
    <button @click="count += 1">+1</button>
    
  </div>
</template>

<script>
export default {
   data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('Left组件被创建了');
  },
  activated() {
    console.log('left组件被激活了');
  }
}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

// h5[data-v-3c83f0b7]
// [data-v-3c83f0b7] h5

// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 /deep/
/deep/ h5 {
  color: pink;
}
</style>
