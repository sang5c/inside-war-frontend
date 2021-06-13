<template>
  <div class="toolbar">
    <router-link to="/main">MAIN</router-link>
    |
    <router-link to="/users">인력풀</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.toolbar {
  color: white;
  background-color: #6a84ff;
  display: block;
  position: absolute;
  padding: 8px;
  border-radius: 0 0 8px;
  opacity: 0.9;
  width: fit-content;
}

.toolbar .router-link-exact-active {
  color: #35495e;
}

.toolbar a {
  color: white;
  text-decoration: none;

}
</style>
