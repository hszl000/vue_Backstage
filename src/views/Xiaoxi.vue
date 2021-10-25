<template>
  <div>
    <div v-html="this.$route.query.List"></div>
  </div>
</template>

<script>
export default {
name: "Xiaoxi",
  mounted(){
  console.log(this.$route.query.List)
  }
}
</script>

<style scoped>

</style>