<template>
  <div class="home-container">
    <van-nav-bar title="头条" fixed />
    <!-- <p>{{ article.length }}</p> -->
    <van-pull-refresh
      v-model="refreshing"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <artcileInfo
          v-for="item in article"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :com-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></artcileInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { getAritcleListAPI } from '@/api/articleAPI.js'
// 导入 article 组件
import artcileInfo from '@/components/article/articleInfo.vue'
export default {
  name: 'HoMe',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页展示的数据条数
      limit: 10,
      // 返回的数据
      article: [],
      // 是否正在加载下一页数据
      // loading 为true 表示load 事件正在被触发
      loading: true,
      // 所有数据已经加载完毕，把 finished 的值修改为true
      finished: false,
      // 下拉是否在加载下一页数据
      refreshing: false
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList (isrefreshing) {
      // 发起get 请求，获取文章的列表数据
      const { data: res } = await getAritcleListAPI(this.page, this.limit)
      // console.log(res)
      // this.article = res
      // 上拉加载更多，应该是[旧数据，新数据]
      // this.article = [...this.article, ...res]
      // this.loading = false
      if (isrefreshing) {
        // 表示用户触发 下拉刷新，新数据在前，旧数据在后
        // 下拉加载更多，应该是[新数据，旧数据]
        this.article = [...res, ...this.article]
        this.refreshing = false
      } else {
        // 表示用户触发  上滑刷新数据，旧数据在前，新数据在后
        // 上拉加载更多，应该是[旧数据，新数据]
        this.article = [...this.article, ...res]
        this.loading = false
      }

      // 所有数据加载完毕，把 finished 修改为true
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad () {
      // 1.让页码值加一
      this.page++
      // 2.发起请求拿到数据
      this.initArticleList()
    },
    onRefresh () {
      //  1.让页码值加1
      this.page++
      // 2.重新发起请求拿到数据
      this.initArticleList(this.refreshing)
    }
  },
  components: {
    artcileInfo
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
