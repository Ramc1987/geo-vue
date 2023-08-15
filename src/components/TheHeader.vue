<template>
  <header class="header">
    <router-link class="nav-link" to="/">
      <img class="logo" src="../assets/logo.png" width="50" height="50" alt="" />
    </router-link>
    <nav>
      <!-- <router-link class="nav-link" to="/">Главная</router-link> -->
      <!-- <router-link class="nav-link" to="/">Home</router-link> -->
      <router-link class="nav-link" :to="'/about'">О нас</router-link>
      <router-link class="nav-link" :to="'/new'">New</router-link>
      <router-link class="nav-link" :to="'/signup'">signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  // Логика компонента может быть добавлена здесь
}
</script>

<style>
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 200px;
}

.nav-link {
  font-size: 2vw; /* Используем vw для размера шрифта */
  margin-right: 20px;
}

/* Адаптивные стили для маленьких экранов (например, ширина менее 768px) */
@media screen and (max-width: 768px) {
  .nav-link {
    font-size: 3vw; /* Увеличиваем размер шрифта на маленьких экранах */
    margin-right: 10px;
  }
}
@media screen and (min-width: 1024px) {
  .nav-link {
    font-size: min(14px, 2vw);
  }
}
</style>
