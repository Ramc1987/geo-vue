<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="registerUser">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <SuccessModal v-if="showSuccessModal" @close="closeSuccessModal" />
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../firebase.js"
import SuccessModal from "./SuccessModal.vue"

export default {
  data() {
    return {
      email: "",
      password: "",
      showSuccessModal: false,
    }
  },
  methods: {
    async registerUser() {
      try {
        // Используем функцию createUserWithEmailAndPassword для регистрации пользователя
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        // Регистрация успешна, обрабатываем данные пользователя
        this.showSuccessModal = true
        // Добавьте здесь редирект или другую логику после успешной регистрации
      } catch (error) {
        // В случае ошибки выводим сообщение об ошибке
        const errorCode = error.code
        const errorMessage = error.message
        console.error("Ошибка регистрации:", errorCode, errorMessage)
      }
    },
    closeSuccessModal() {
      this.showSuccessModal = false
    },
  },
  components: {
    SuccessModal, // Регистрируем компонент
  },
}
</script>
