import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { firebaseApp } from "./firebase.js"

const app = createApp(App)
app.use(router)
app.config.globalProperties.$firebase = firebaseApp

app.mount("#app")
