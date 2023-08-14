<template>
  <div class="article-card" @click="openArticle">
    <h3>{{ article.title }}</h3>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  methods: {
    openArticle() {
      // Перенаправление на страницу статьи при клике
      this.$router.push(`/article/${this.article.id}`)
    },
  },
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
</style>
