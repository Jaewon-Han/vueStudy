<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: 'App',
  components : {
    ToolBar,
  }
}
</script>
<template>
  <div id="app">
   <ToolBar/>
   <RouterView/>
  </div>
</template>

<style>

body {
  padding: 0;
  margin: 0;
}
</style>
