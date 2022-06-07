<template>
  <div class="BarraNavegacaoDeslogado">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/novoUsuario" class="nav-link"> Registre-se </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarraNavegacaoDeslogado",
};
</script>

<style></style>
