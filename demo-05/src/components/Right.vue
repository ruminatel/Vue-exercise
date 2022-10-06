<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />
    <button @click="postInfo">POST请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post("/api/post", {
        name: "zs",
        age: 20,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
