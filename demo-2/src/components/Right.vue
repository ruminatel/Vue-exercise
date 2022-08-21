<template>
  <div class="right-container">
    <h3>Right 组件 --- {{ count }}</h3>
    <button @click="add">点击</button>
    <hr>
    <p>{{ msgfromleft }}</p>
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
  data() {
    return { 
      count: 0,
      msgfromleft : ''
      }
  },
  methods: {
    add() {
      //console.log(this);
      // 让子组件的 count 值自增 +1
      this.count += 1,
      // 把自增的结果，传给父组件
      this.$emit('numchangs',this.count)
    }
  },
  created() {
    bus.$on('share',(val) => {
       this.msgfromleft = val
    })
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
