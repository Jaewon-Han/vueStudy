<script>
import { mapGetters } from "vuex";

export default {
  computed : {
    ...mapGetters([
      'fetchedItems'
    ])
  },
  created() {
    const askId = this.$route.params.id
    this.$store.dispatch("FETCH_ITEMS", askId)
  }

}
</script>

<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div>
        사용자 프로필 : User
      </div>
      <div>
        <router-link :to="`/user/${fetchedItems.user}`">
          {{ fetchedItems.user }}
        </router-link>
        <div>
          {{ fetchedItems.time_ago }}
        </div>
      </div>
      <h2> {{ fetchedItems.title }} </h2>
    </section>
    <section>
      <div  v-html="fetchedItems.content">

      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
