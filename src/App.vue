<template>
  <div>
    <war-header></war-header>
    <war-input v-on:add="addOneUser"></war-input>
    <war-list v-bind:propsdata="users"></war-list>
    <war-footer></war-footer>
  </div>
</template>

<script>
import WarHeader from "@/components/WarHeader";
import WarInput from "@/components/WarInput";
import WarList from "@/components/WarList";
import WarFooter from "@/components/WarFooter";

export default {
  data() {
    return {
      users: ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10"],
    }
  },
  methods: {
    addOneUser(username) {
      this.users.push(username);
      console.log(this.users);
    }
  },
  components: {
    WarFooter,
    WarList,
    WarInput,
    WarHeader
  }
}
</script>

<style>
body {
  text-align: center;
  background: linear-gradient(to right, darkred, darkblue);
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
