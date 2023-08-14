<template>
  <div class="home">
    <Article v-for="(article, index) in articles" :key="index" :title="article.title" :content="article.content" />
  </div>
</template>

<script>
import Article from "./TheArticle.vue" // Подключите компонент статьи
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtMis8aJ_Y2k0uToVrY-6mi2JKBBStn7Y",
  authDomain: "vue-geo-904ff.firebaseapp.com",
  projectId: "vue-geo-904ff",
  storageBucket: "vue-geo-904ff.appspot.com",
  messagingSenderId: "1040094020120",
  appId: "1:1040094020120:web:d5e26a9e0ebda0531cf96d",
  measurementId: "G-FWBZ7WRBC7",
}

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
      const articlesSnapshot = await getDocs(collection(db, "articles"))
      this.articles = articlesSnapshot.docs.map((doc) => doc.data())
    } catch (error) {
      console.error("Error fetching articles:", error)
    }
  },
}
</script>
<style>
.home {
  display: flex;
}
</style>
