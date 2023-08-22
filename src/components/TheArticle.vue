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
  margin: 0;
  padding: 0;
  border: 1px solid #a55151;
  width: 100%;
  height: 100px;
}
</style>
