<template>
  <div>
    <ul>
      <li v-for="user in users1" v-bind:key="user" class="shadow redTeam"
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false">
        {{ user }}
        <span class="removeBtn" v-show="isMouseOver">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
    <ul>
      <li v-for="user in users2" v-bind:key="user" class="shadow">
        {{ user }}
        <span class="removeBtn {hovering: isHovering}" v-on:mouseover="mouseover">
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
    mouseover() {
      this.isMouseOver = !this.isMouseOver;
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
  text-align: left;
}

li {
  text-align: center;
  width: 200px;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  background: white;
  border-radius: 5px;
}

.redTeam {
}

.removeBtn {
  float: right;
  cursor: pointer;
  margin-left: auto;
  color: #de4343;
}

</style>