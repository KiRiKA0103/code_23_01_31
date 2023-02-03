<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="goMovie1">push跳转到电影1</button>
    <button @click="goMovie2">replace跳转到电影2</button>
    <button @click="go">go跳转</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goMovie1() {
      this.$router.push('/movie/1')
    },
    goMovie2() {
      this.$router.replace('/movie/2')
    },
    go() {
      // 后退一层
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
