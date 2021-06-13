<template>
  <div class="inputBox"
       v-show="!isFixed"
  >
    <div class="inputContainer shadow">
      <input type="text"
             placeholder="소환사명"
             onblur="placeholder='소환사명'"
             onfocus="placeholder=''"
             v-model="newUsername"
             v-on:keypress.enter="addUser">
    </div>
    <span class="addContainer shadow" v-on:click="addUser">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['isFixed'],
  data() {
    return {
      newUsername: ""
    }
  },
  methods: {
    addUser() {
      if (this.newUsername !== '') {
        // 상위 컴포넌트로 이벤트 전달
        this.$emit('add', this.newUsername);
        console.log(this.newUsername);
        this.clearInput()
      }
    },
    clearInput() {
      this.newUsername = "";
    }
  }
}
</script>

<style scoped>

div {
  padding-bottom: 40px;
}

.inputContainer {
  background: white;
  border-radius: 5px 0 0 5px;
}

.inputBox {
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 1.2rem;
  margin-left: 5px;
  text-align: center;
  outline: none;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

</style>