<template>
  <div class="article">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
}
</script>

<style scoped>
.article {
  margin: 20px;
  padding: 20px;
  border: 1px solid #a55151;
}
</style>
