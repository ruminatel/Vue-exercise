<template>
  <div class="right-container">
    <h3>Right 组件 --- {{ count }}</h3>
    <button @click="add">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0}
  },
  methods: {
    add() {
      //console.log(this);
      this.count += 1,
      this.$emit('numchangs',this.count)
    }
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
