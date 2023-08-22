<template>
  <div class="category-cossaks">
    <h2>ksdjfnkjsffv</h2>
    <Article class="article" v-for="(article, index) in articles" :key="index" :title="article.title" :content="article.content" />
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
      const articlesSnapshot = await getDocs(collection(db, "articlesCossaks"))
      this.articles = articlesSnapshot.docs.map((doc) => doc.data())
    } catch (error) {
      console.error("Error fetching articlesCossaks:", error)
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
