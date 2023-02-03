<template>
  <div class="movie-container">
    <!-- this.$route路由参数对象 -->
    <h3>Movie 组件--{{ $route.params.id }}--{{ id }}</h3>
    <button @click="showThis">打印this</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id'],
  methods: {
    showThis() {
      console.log(this)
      console.log(this.$route.query)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
