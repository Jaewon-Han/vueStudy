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
    <transition name="page">
     <RouterView/>
    </transition>
  </div>
</template>

<style>

body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color : #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
