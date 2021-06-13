<template>
  <div>
    <span>
      <button class="fun-btn"
              @click="fixTeam"
              v-show="!isFixed"
      >
        RANDOM !
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: ['isFixed'],
  methods: {
    onClickClear() {
      console.log("CLEAR");
      this.$emit('clearAll');
    },
    fixTeam() {
      console.log("RANDOM");
      this.$emit('fix');
      this.$emit('shuffle');
    }
  }
}
</script>

<style lang="scss" scoped>

span {
  padding: 40px;
  padding-bottom: 100px;
}

@import "src/assets/scss/random_button";
</style>