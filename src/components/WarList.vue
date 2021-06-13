<template>
  <div>
    <ul>
      <li v-for="(user, index) in test" v-bind:key="index" class="shadow"
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false">
        <span style="flex-grow: 0.7">
          img
        </span>
        <span style="flex-grow: 0.7">
          {{ user.name }}
        </span>
        <span class="removeBtn"
              @click="removeUser(user, index)"
              v-bind:class="{hovering: isMouseOver, leave: !isMouseOver}"
        >
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
    <ul>
      <li v-for="(user, index) in users2" v-bind:key="user" class="shadow"
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false">
        <span style="flex-grow: 0.7">
          img
        </span>
        <span style="flex-grow: 0.7">
          {{ user }}
        </span>
        <span class="removeBtn"
              @click="removeUser(user, index)"
              v-bind:class="{hovering: isMouseOver, leave: !isMouseOver}"
        >
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  data() {
    return {
      users1: [],
      users2: [],
      isMouseOver: false,
      test: [],
    }
  },
  created: function () {
    let user = {
      name: '',
      rank: '',
    };
    this.users1 = this.propsdata.slice(0, 5);
    this.users2 = (this.propsdata.slice(5));
    console.log(this.users1, this.users2);

    this.test = Array(5).fill(Object.create(user))
  },
  methods: {
    removeUser(user, index) {
      console.log(user, index);
      this.propsdata.splice(index, 1);
      // users1, 2 배열을 동적으로 변경해줘야 한다.
    },
    addUser(username) {
      // 왼쪽라인 채우고 다찼으면 오른쪽 라인을 채워주는 형태로 구현
      console.log(username);
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
  padding-left: 1px;
  padding-right: 1px;
}

li {
  display: flex;
  justify-content: space-between;
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