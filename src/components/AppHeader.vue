<template>
  <header> {{ str }}</header>
  <button @click="sendEvent">Send</button>
</template>

<script>
export default {
  name : "AppHeader",
  props : {
    str : String,
  },
  methods : {

    sendEvent : function() {
      return this.$emit('renew')
    }
  }

}
</script>

<style>

</style>