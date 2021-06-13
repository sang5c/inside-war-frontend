<template>
  <div>
    <img src="../assets/title_njg.png"
         alt="내 전 각"
         @click="backToMain"
    />
    <span class="back">
      <button class="myButton"
              v-show="isFixed"
              @click="backToMain"
      >
        <span>&#8249;</span>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: ['isFixed'],
  methods: {
    backToMain() {
      this.$emit('main');
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 20px 0 40px 0;
}

img {
  margin: 0 0 0;
  cursor: pointer;
}

.back {
  position: fixed;
  left: 20px;
  top: 50px;
}

@import "src/assets/scss/back_button";
</style>