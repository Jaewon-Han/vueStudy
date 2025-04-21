
<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<template>
  <p v-for="news in this.$store.state.news">
    <a :href="news.url"> {{ news.title }}</a>
    <small> {{ news.time_ago }} by
      <router-link :to="`/user/${news.user}`"> {{ news.user }} </router-link>
    </small>
  </p>

</template>

<style>

</style>
