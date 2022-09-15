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

 <Footer :isfull="fullstate" :amount="amt" @full-change="newfullchange"></Footer>
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
      list: []
    }
  },
  created() {
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
     fullstate() {
      return this.list.every(item => item.goods_state)
     },
     //已勾选商品的总价格
     amt() {
      return this.list.filter(item => item.goods_state)
      .reduce((total,item) => (total += item.goods_count * item.goods_price),0)
     }
  },
  methods: {
    async initCartList() {
      const {data : res} = await axios.get('https://www.escook.cn/api/cart')
      console.log(res);
     if(res.status === 200) {
       this.list = res.list
     }
    
    },
    getNewState(val) {
      this.list.some(item => {
        if(item.id === val.id) {
          item.goods_state = val.value
            return true
        }
      })
    },
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
