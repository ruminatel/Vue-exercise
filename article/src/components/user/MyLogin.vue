<template>
  <div>
    <h3>登录页面</h3>
    <div class="from-login">
      <!-- 登录名称 -->
      <div class="from-grop">
        <label for="username">登录名称</label>
        <input
          type="text"
          id="username"
          placeholder="请输入登录名称"
          autocomplete="off"
          v-model.trim="usrename"
        />
      </div>
      <!-- 登录密码 -->
      <div class="from-grop">
        <label for="password">登录密码</label>
        <input
          type="password"
          id="password"
          placeholder="请输入登录名称"
          v-model.trim="password"
        />
      </div>
      <hr />
      <!-- 重置和登录按钮 -->
      <div class="from-grop">
        <button type="button" @click="reset">重置</button>
        <button type="button" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line quotes
      usrename: "",
      // eslint-disable-next-line quotes, comma-dangle
      password: "",
      // eslint-disable-next-line semi
    };
  },
  methods: {
    reset() {
      // eslint-disable-next-line quotes, semi
      this.usrename = "";
      // eslint-disable-next-line quotes, semi
      this.password = "";
    },
    login() {
      // eslint-disable-next-line quotes
      if (this.usrename === "admin" && this.password === "666666") {
        // eslint-disable-next-line quotes, semi
        localStorage.setItem("tokin", "bearer xxx");
        // eslint-disable-next-line semi, quotes
        this.$router.push("/home");
      } else {
        // 登录失败
        // eslint-disable-next-line semi, quotes
        localStorage.removeItem("tokin");
      }
      // eslint-disable-next-line comma-dangle
    },
    // eslint-disable-next-line comma-dangle
  },
  // eslint-disable-next-line semi
};
</script>

<style  lang='less' scoped>
.from-login {
  width: 300px;
  margin: 200px auto;
}
</style>
