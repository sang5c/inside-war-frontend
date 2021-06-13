<template>
  <div>
    <ul>
      <li v-for="(user, index) in redTeam" v-bind:key="index" class="shadow"
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
      <li v-for="n in 5-redTeam.length" v-bind:key="n+10" class="shadow">
        <span></span>
      </li>
    </ul>
    <ul>
      <li v-for="(user, index) in blueTeam" v-bind:key="index" class="shadow"
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false">
        <span style="flex-grow: 0.7">
          img
        </span>
        <span style="flex-grow: 0.7">
          {{ user }}
        </span>
        <span class="removeBtn"
              @click="removeUser(user, index+5)"
              v-bind:class="{hovering: isMouseOver, leave: !isMouseOver}"
        >
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
      <li v-for="n in 5-blueTeam.length" v-bind:key="n+20" class="shadow">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['redTeam', 'blueTeam'],
  data() {
    return {
      isMouseOver: false,
    }
  },
  methods: {
    removeUser(user, index) {
      console.log(user, index);
      this.$emit('remove', user, index);
    }
  },
  created() {
    console.log(this.redTeam.length);
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