import { createRouter, createWebHistory } from "vue-router"
import TheHome from "./components/TheHome.vue"
import TheAbout from "./components/TheAbout.vue"
import TheNew from "./components/TheNew.vue"
import SignUp from "./components/SignUp.vue"
import CategoryNews from "./components/CategoryNews.vue"

const routes = [
  { path: "/", component: TheHome },
  { path: "/about", component: TheAbout },
  { path: "/new", component: TheNew },
  { path: "/signup", component: SignUp },
  { path: "/category/:categoryName", component: CategoryNews },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
