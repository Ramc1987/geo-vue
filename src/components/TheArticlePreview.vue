<template>
  <div class="article-preview">
    <CategoryNews />
  </div>
</template>
<script>
import CategoryNews from "./CategoryNews.vue"
export default {
  components: {
    CategoryNews,
  },
}
</script>
<style>
.article-preview {
  display: flex;
}
</style>
