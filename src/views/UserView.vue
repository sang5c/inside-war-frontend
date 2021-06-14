<template>
  <div class="outer">
    <div class="boxContainer">
      <user-box v-for="n in defaultUsers"
                v-bind:key="n"
                v-bind:username="n"
      />
    </div>
  </div>
</template>

<script>
import UserBox from "@/components/UserBox";

export default {
  data() {
    return {
      defaultUsers: [
          '짱잘해', '팀보이', '송하린', '희유리', 'GOAT Hyuk',
          '반역자', '김리', '만지니이', '테스트', '테스트2'
      ]
    }
  },
  components: {
    UserBox
  }
}
</script>

<style scoped>
.outer {
  display: none;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.boxContainer {
  border: 10px solid;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px;
  font-size: 20px;
}
</style>