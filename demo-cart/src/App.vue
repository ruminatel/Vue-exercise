<template>
  <div class="app-container">
    <Header></Header>
    <!-- <h1>App 根组件</h1> -->
    <Goods v-for="item in List" :key="item.id" :title="item.goods_name" :pic="item.goods_img"></Goods>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import axios from 'axios'
export default {
  data() {
    return {
      List : []
    }
  },
  created() {
    this.initCartList()
  },
  methods: {
    async initCartList() {
      const {data : res} = await axios.get('https://www.escook.cn/api/cart')
      console.log(res);

      if(res.status === 200) {
        this.List = res.list
        // console.log(this.List);
      }
    }
  },
  components: {
    Header,
    Goods
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
