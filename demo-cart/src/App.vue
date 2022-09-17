<template>
  <div class="app-container">
  <Header></Header>
    <!-- <h1>App 根组件</h1> -->
    <!-- <p>{{ amt }}</p> -->
  <Goods
    v-for="item in list"
    :key="item.id"
    :pic="item.goods_img"
    :title="item.goods_name"
    :price="item.goods_price"
    :state="item.goods_state"
    :count="item.goods_count"
    :id="item.id"
    @state-change="getNewState"
  ></Goods>

 <Footer :isfull="fullstate" :amount="amt" :all="total" @full-change="newfullchange"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
// 导入 axios 请求库
import axios from 'axios'

import bus from '@/components/eventBus.js'

export default {
  data() {
    return {
       // 用来存储购物车的列表数据，默认为空数组
      list: []
    }
  },
  created() {
    // 调用请求数据的方法
    this.initCartList()

    bus.$on('share',val => {
      this.list.some(item => {
        if(item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  computed: {
    // 动态计算出全选的状态是 true 还是 false
     fullstate() {
      return this.list.every(item => item.goods_state)
     },
     //已勾选商品的总价格
     amt() {
      return this.list.filter(item => item.goods_state)
      .reduce((total,item) => (total += item.goods_count * item.goods_price),0)
     },
     // 已勾选商品的总数量
     total() {
      return this.list.filter(item => item.goods_state)
      .reduce((total,item) => (total += item.goods_count),0)
     }
  },
  methods: {
     // 封装请求列表数据的方法
    async initCartList() {
      const {data : res} = await axios.get('https://www.escook.cn/api/cart')
      console.log(res);
     if(res.status === 200) {
       this.list = res.list
     }
    
    },
    // 接收子组件传递过来的数据
    getNewState(val) {
      this.list.some(item => {
        if(item.id === val.id) {
          item.goods_state = val.value
            return true
        }
      })
    },
    // 接收 Footer 子组件传递过来的全选按钮的状态
    newfullchange(val) {
      this.list.filter(item => item.goods_state = val)
    }
  },
  components: {
    Header,
    Goods,
    Footer

  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
