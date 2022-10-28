<!-- eslint-disable indent -->
<template>
  <div>
    <h3 class="userguanli">用户管理</h3>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头衔</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.position }}</td>
          <td>
            <a href="#" @click.prevent="gotoDetail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      // eslint-disable-next-line indent
      userlist: [
        // eslint-disable-next-line indent, object-curly-spacing, comma-spacing, quotes
        { id: 1, name: "战三", age: 18, position: "战神" },
        // eslint-disable-next-line comma-spacing, indent, object-curly-spacing, quotes, comma-dangle
        { id: 2, name: "战三", age: 18, position: "战神" },
        // eslint-disable-next-line indent, comma-dangle
      ],
      // eslint-disable-next-line indent, semi
    };
    // eslint-disable-next-line comma-dangle
  },
  methods: {
    gotoDetail(id) {
      // eslint-disable-next-line quotes, semi
      console.log("ok");
      // eslint-disable-next-line comma-dangle, quotes, semi
      this.$router.push("/home/userDetail/" + id);
      // eslint-disable-next-line comma-dangle
    },
    // eslint-disable-next-line comma-dangle
  },
  // eslint-disable-next-line semi
};
</script>

<style lang="less" scoped>
div .userguanli {
  text-align: center;
}
</style>
