<template>
  <div class="app-container">
    <Header></Header>
    <!-- <h1>App 根组件</h1> -->
    <!-- <p>{{ amt }}</p> -->
    <Goods 
       v-for="item in List" 
       :key="item.id" 
       :id="item.id"
       :title="item.goods_name" 
       :pic="item.goods_img"
       :price="item.goods_price"
       :state="item.goods_state"
       :count="item.goods_count"
       @state-change="getNewState"
    ></Goods>

    
    <Footer :isfull="fullState" :amount="amt" :all="total" @full-change="getFullChange"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import axios from 'axios'

import bus from '@/components/eventBus.js'
export default {
  data() {
    return {
      List : []
    }
  },
  computed: {
    fullState() {
      return this.List.every(item => item.goods_state)
    },
    amt() {
      return this.List
      .filter(item => item.goods_state)
      .reduce((total,item) => (total += item.goods_price * item.goods_count),0)
    },
    total() {
      return this.List.filter(item => item.goods_state).reduce((t , item) => {
        return t += item.goods_count
      },0)
    }
  },
  created() {
    this.initCartList()

    bus.$on('share',(val) => {
      // console.log(val);
      this.List.some(item => {
        if(item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  methods: {
    async initCartList() {
      const {data : res} = await axios.get('https://www.escook.cn/api/cart')
      console.log(res);

      if(res.status === 200) {
        this.List = res.list
        // console.log(this.List);
      }
    },
    getNewState(e) {
      // console.log(e);
      this.List.some(item => {
        if(item.id === e.id) {
          item.goods_state = e.value
          return true
        }
      })
    },
    getFullChange(val) {
      // console.log(val);
      this.List.forEach(item => item.goods_state = val)
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
