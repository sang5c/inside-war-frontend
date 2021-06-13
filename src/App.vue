<template>
  <div>
    <war-header></war-header>
    <war-input v-on:add="addOneUser"></war-input>
    <war-list v-bind:redTeam="redTeam"
              v-bind:blueTeam="blueTeam"
              v-on:remove="removeOneUser"
    ></war-list>
    <war-button v-on:clearAll="clearAll"
                v-on:shuffle="shuffle"
    ></war-button>
<!--    <war-footer></war-footer>-->
  </div>
</template>

<script>
import WarHeader from "@/components/WarHeader";
import WarInput from "@/components/WarInput";
import WarList from "@/components/WarList";
import WarButton from "@/components/WarButton";
// import WarFooter from "@/components/WarFooter";

export default {
  data() {
    return {
      users: [],
      redTeam: [],
      blueTeam: [],
    }
  },
  methods: {
    addOneUser(username) {
      let userCount = this.redTeam.length + this.blueTeam.length;

      if (userCount >= 10) {
        alert("10명임");
        return
      }

      if (this.redTeam.length < 5) {
        this.redTeam.push(username);
      } else {
        this.blueTeam.push(username)
      }
    },
    sliceTeam() {
      this.redTeam = this.users.slice(0, (this.users.length+1) / 2);
      this.blueTeam = this.users.slice((this.users.length+1) / 2);
    },
    removeOneUser(username, index) {
      console.log("delete", username, index);
      index >= 5 ? this.blueTeam.splice(index - 5, 1) : this.redTeam.splice(index, 1);
    },
    clearAll() {
      this.users = [];
      this.sliceTeam();
    },
    shuffle() {
      this.users = this.redTeam.concat(this.blueTeam);

      // fisherYatesShuffle
      for (let i = this.users.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //random index
        [this.users[i], this.users[j]] = [this.users[j], this.users[i]]; // swap
      }
      this.sliceTeam();
    }
  },
  components: {
    WarButton,
    // WarFooter,
    WarList,
    WarInput,
    WarHeader
  },
  // dev test
  // created() {
  //   for (let i = 0; i < 10; i++) {
  //     this.users.push("" + i);
  //   }
  //   this.sliceTeam();
  // }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  text-align: center;
  background-image: url("./assets/background.png"), repeating-linear-gradient(to right, darkblue, darkred);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  height: 100vh;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
