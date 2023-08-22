<template>
  <div class="article-preview">
    <CategoryNews />
    <CategoryCossaks />
  </div>
</template>
<script>
import CategoryCossaks from "./CategoryCossaks.vue"
import CategoryNews from "./CategoryNews.vue"
export default {
  components: {
    CategoryNews,
    CategoryCossaks,
  },
}
</script>
<style>
.article-preview {
  display: flex;
  flex-direction: column;
}
</style>
