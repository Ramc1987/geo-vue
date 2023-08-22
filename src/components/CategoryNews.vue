<!-- <template>
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
</style> -->

<template>
  <div class="category-news">
    <Article class="article" v-for="(article, index) in articles" :key="index" :title="article.title" :content="article.content" />
  </div>
</template>

<script>
import Article from "./TheArticle.vue" // Подключите компонент статьи
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { firebaseConfig } from "../firebase"

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default {
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
    }
  },
  async created() {
    try {
      const articlesSnapshot = await getDocs(collection(db, "articles-news"))
      this.articles = articlesSnapshot.docs.map((doc) => doc.data())
    } catch (error) {
      console.error("Error fetching articles-news:", error)
    }
  },
}
</script>
<style>
.category-news {
  display: grid;
  grid-template-columns: repeat(4, 250px);
}

.article {
  width: 200px;
  height: 100px;
  margin: 0;
  padding: 0;
}
</style>
