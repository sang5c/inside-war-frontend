<template>
  <div>
    <ul>
      <li v-for="(user, index) in users1" v-bind:key="user" class="shadow"
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false">
        {{ user }}
        <span class="removeBtn"
              @click="removeUser(user, index)"
              v-bind:class="{hovering: isMouseOver, leave: !isMouseOver}">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
    <ul>
      <li v-for="user in users2" v-bind:key="user" class="shadow">
        {{ user }}
        <span class="removeBtn">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10"],
      users1: [],
      users2: [],
      isMouseOver: false,
    }
  },
  created: function () {
    this.users1 = this.users.slice(0, 5);
    this.users2 = (this.users.slice(5));
  },
  methods: {
    removeUser(user, index) {
      console.log(user, index);
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  margin-top: 0;
  margin-left: 6px;
  padding-left: 2px;
}

li {
  /*display: flex;*/
  /*justify-content: space-between;*/
  width: 200px;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  background: white;
  border-radius: 5px;
}

.hovering {
  opacity: 1;
}

.leave {
  opacity: 0;
}

/*.test {*/
/*  flex-grow: 1;*/
/*}*/

.removeBtn {
  display: block;
  float: right;
  cursor: pointer;
  color: #de4343;
}

</style>