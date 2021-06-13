<template>
  <div>
    <button @click="onClickClear">CLEAR ALL</button>
    <button @click="onClickRandom">RANDOM</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickClear() {
      console.log("CLICK");
      this.$emit('clearAll');
    },
    onClickRandom() {
      console.log("RANDOM");
      this.$emit('shuffle');
    }
  }
}
</script>

<style scoped>

</style>