<template>
    
  <div class="article-container">
    <h1 v-color="'red'">全局自定义指令使用</h1>

    <!-- 标题 -->
    <div class="header-box">
        <slot name="title"></slot>
    </div>
    <!-- 内容 -->
    <div class="content-box" >
        <slot name="content" msg="hello vue"></slot>
    </div>
    <!-- 作者 -->
    <div class="footer-box">
        <slot name="zuozhe"></slot>
    </div>
    
    
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.article-container {
    > div {
        height: 150px ;
    }
    .header-box {
        background-color: aqua;
    }
    .content-box {
        background-color: yellow;
    }
    .footer-box {
        background-color: aquamarine;
    }
}

</style>
