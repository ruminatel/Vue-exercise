<template>
  <el-page-header @back="goBack" content="后台主页"> </el-page-header>
</template>

<script>
export default {
  methods: {
    goBack() {
      // eslint-disable-next-line quotes, semi
      localStorage.removeItem("tokin");
      // eslint-disable-next-line quotes, semi
      this.$router.push("login");
      // eslint-disable-next-line comma-dangle
    },
    // eslint-disable-next-line comma-dangle
  },
  // eslint-disable-next-line semi
};
</script>

<style>
</style>
