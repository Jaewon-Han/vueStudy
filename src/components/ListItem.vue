<script>
export default {
  created() {
    const name = this.$route.name
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS')
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASKS')
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS')
    }
  },
  computed : {
    listItems() {
      const name = this.$route.name
      if (name === 'news') {
        return this.$store.state.news
      } else if (name === 'ask') {
        return this.$store.state.asks
      } else if (name === 'jobs') {
        return this.$store.state.jobs
      }
    }
  },
}
</script>

<template>
<div>
  <ul class="news-list">
    <li v-for="news in listItems" class="post-list">
      <div class="points">
        {{ news.points  || 0 }}
      </div>
      <div>
        <!-- 타이틀 -->
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">
              {{ news.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${news.id}`">
              {{ news.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{ news.item_ago }}by
          <template v-if="news.user">
            <router-link class="link-text" :to="`/user/${news.user}`"> {{ news.user }} </router-link>
          </template>
          <template v-else>
            {{ news.domain }}
          </template>
        </small>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post-list {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width : 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin : 0;
}
.link-text {
  color : #828282
}
</style>
