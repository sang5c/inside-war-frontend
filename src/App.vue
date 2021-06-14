<template>
  <div class="app">
    <tool-bar/>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";

export default {
  components: {
    ToolBar,
  },
};
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  text-align: center;
  height: 100vh;
  background: linear-gradient(to right, darkblue, darkred);
}

.app {
  height: 100%;
  min-height: 100%;
  background-image: url("./assets/background.png"), linear-gradient(to right, darkblue, darkred);
  background-repeat: no-repeat;
  background-position: center;
  /*background-attachment: fixed;*/
  background-size: 100%;
}
</style>