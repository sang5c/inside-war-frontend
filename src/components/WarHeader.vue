<template>
  <div>
    <h1>{{ k }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      k: '내 전 각'
    }
  },
}
</script>

<style scoped>
div {
  padding: 20px 0;
}
h1 {
  color: antiquewhite;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>