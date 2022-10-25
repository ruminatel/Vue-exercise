<template>
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <router-link><span>用户管理</span></router-link>
        </template>
      </el-submenu>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <router-link>权限管理</router-link>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <router-link>商品管理</router-link>
        </template>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <router-link>订单管理</router-link>
        </template>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <router-link>系统设置</router-link>
        </template>
      </el-submenu>
    </el-menu>
  </el-row>
</template>

<script>
// eslint-disable-next-line semi
export default {};
</script>

<style lang="less" scoped>
</style>
