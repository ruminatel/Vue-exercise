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

    <hr>
    <input type="text" v-if="inputshow" @blur="showbutton" ref="iptRef">
    <button v-else @click="showinput">点击显示 input</button>
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
      // 定义 countFromSon 来接收子组件传递过来的数据
      countfromson: 0,
      inputshow : false
    }
  },
  components: {
    Left,
    Right
  },
  methods: {
     // 获取子组件传递过来的数据
    getnewcount(val) {
      this.countfromson = val
    },
    showinput() {
      this.inputshow = true
      this.$nextTick(() => {
       this.$refs.iptRef.focus()
      })
    },
    showbutton() {
      this.inputshow = false
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
