<template>
  <div class="box">
    {{ username }}
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style scoped>
.box {
  border: 5px solid #8763fb;
  background-color: white;
  border-radius: 50%;
  /*opacity: 0.8;*/
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  /*vertical-align: middle;*/
}
</style>