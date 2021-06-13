<template>
  <div>
    <span>
      <button class="btn draw-border" @click="onClickClear">비우기</button>
    </span>
    <span>
      <button class="btn draw-border" @click="onClickRandom">섞기</button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    onClickClear() {
      console.log("CLEAR");
      this.$emit('clearAll');
    },
    onClickRandom() {
      console.log("RANDOM");
      this.$emit('shuffle');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/footer_button.scss';

span {
  padding: 5px;
}
</style>