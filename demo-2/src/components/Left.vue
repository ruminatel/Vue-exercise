<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是：{{ msg }}</p>
    <p>user 的值是：{{ user }}</p>
    <hr>
    <button @click="send">点击</button>
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
  props: ['msg','user'],
  data() {
    return {
      str : 'xongdigx'
    }
  },
  methods : {
    send() {
      bus.$emit('share',this.str)
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
