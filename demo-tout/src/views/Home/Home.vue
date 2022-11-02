<template>
  <div class="home-container">
    <van-nav-bar title="头条" fixed />
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'HoMe',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页展示的数据条数
      limit: 10
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList () {
      // 发起get 请求，获取文章的列表数据
      const { data: res } = await request.get('/articles', {
        // 请求的参数
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: aquamarine;
    /deep/ .van-nav-bar__title {
      color: white;
    }
  }
}
</style>
