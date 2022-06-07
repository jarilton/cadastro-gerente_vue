<template>
  <div class="BarraNavegacaoLogado">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gerentes" class="nav-link"> Gerentes </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="efetuarLogout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarraNavegacaoLogado",
  methods: {
    efetuarLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style></style>
