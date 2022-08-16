<template>
  <div>
    <p>{{username}}</p>
    <button @click="changName">点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        username : 'zx'
    }
  },
  methods : {
    changName () {
      console.log(this);
      this.username = 'pink'
    }
  }
}
</script>

<style>
div {
  height: 200px;
  background-color: aqua;
}
</style>
