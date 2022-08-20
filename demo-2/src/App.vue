<template>
  <div class="app-container">
    <h1>App 根组件 --- {{ countfromson }}</h1>
    <p>{{userinfo}}</p>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left :msg="message" :user="userinfo"></Left>
      <Right @numchangs="getnewcount"></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue"
export default {
  data() {
    return {
      message : 'hello 123',
      userinfo : {username : 'zx', age : 18},
      countfromson: 0
    }
  },
  components: {
    Left,
    Right
  },
  methods: {
    getnewcount(val) {
      this.countfromson = val
    }
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
