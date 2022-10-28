<template>
  <div>
    <button @click="$router.back()">后退</button>
    <h3>详情页面 --- {{ $route.params.id }}</h3>
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {};
</script>

<style lang="less" scoped>
div {
  button {
    display: inline-block;
  }
  h3 {
    display: inline-block;
    margin: 0;
  }
}
</style>
