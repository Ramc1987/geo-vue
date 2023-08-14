<template>
  <div class="category-news">
    <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue" // Импортируйте компонент карточки
import { db } from "../firebase" // Импортируйте базу данных

export default {
  components: {
    ArticleCard,
  },
  props: {
    category: String, // Принимает имя рубрики через роутер
  },
  data() {
    return {
      articles: [],
    }
  },
  async created() {
    try {
      const articlesSnapshot = await db
        .collection("articles")
        .where("category", "==", this.category) // Фильтруем статьи по рубрике
        .get()
      this.articles = articlesSnapshot.docs.map((doc) => {
        const data = doc.data()
        data.id = doc.id
        return data
      })
    } catch (error) {
      console.error("Error fetching articles:", error)
    }
  },
}
</script>

<style>
.category-news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
