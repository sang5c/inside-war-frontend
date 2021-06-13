<template>
  <div>
    <ul>
      <li v-for="(user, index) in redTeam" v-bind:key="index" class="shadow"
          @mouseover="up(index)"
          @mouseleave="down(index)">
        <span style="flex-grow: 0.2">
          <img src="../assets/flamme.gif" alt="fire">
        </span>
        <span style="flex-grow: 0.7">
          {{ user }}
        </span>
        <span class="removeBtn"
              @click="removeUser(user, index)"
        >
          <i class="far fa-trash-alt"
             v-if="!isFixed"
             v-bind:class="{hovering: isMouseOver[index], leave: !isMouseOver[index]}"
          />
        </span>
      </li>
      <li v-for="n in 5-redTeam.length" v-bind:key="n+10" class="shadow empty">
        <span></span>
      </li>
    </ul>
    <span class="versus"
          v-show="isFixed"
    >
      <img src="../assets/vs.png" alt="VS" width="150px">
    </span>
    <ul>
      <li v-for="(user, index) in blueTeam" v-bind:key="index" class="shadow"
          @mouseover="up(index+5)"
          @mouseleave="down(index+5)">
        <span style="flex-grow: 0.2">
          <img src="../assets/flamme.gif" alt="fire">
        </span>
        <span style="flex-grow: 0.7">
          {{ user }}
        </span>
        <span class="removeBtn"
              @click="removeUser(user, index+5)"
        >
          <i class="far fa-trash-alt"
             v-if="!isFixed"
             v-bind:class="{hovering: isMouseOver[index+5], leave: !isMouseOver[index+5]}"
          />
        </span>
      </li>
      <li v-for="n in 5-blueTeam.length" v-bind:key="n+20" class="shadow empty">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['redTeam', 'blueTeam', 'isFixed'],
  data() {
    return {
      isMouseOver: [],
    }
  },
  methods: {
    removeUser(user, index) {
      console.log(user, index);
      this.$emit('remove', user, index);
    },
    up(index) {
      this.$set(this.isMouseOver, index, true)
    },
    down(index) {
      this.$set(this.isMouseOver, index, false)
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.isMouseOver.push(false);
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

ul {
  list-style-type: none;
  margin: 2px;
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

.removeBtn {
  display: block;
  float: right;
  cursor: pointer;
  color: #de4343;
}

.empty {
  opacity: 0.7;
}

.versus {
  display: flex;
  align-items: center;
  padding: 20px;
}


</style>