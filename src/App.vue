<template>
  <div>
    <war-header></war-header>
    <war-input></war-input>
    <war-list></war-list>
    <war-footer></war-footer>
  </div>
</template>

<script>
import WarHeader from "@/components/WarHeader";
import WarInput from "@/components/WarInput";
import WarList from "@/components/WarList";
import WarFooter from "@/components/WarFooter";

export default {
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
  background-color: #f6f6f6;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
