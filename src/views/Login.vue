<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin"> 
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email"/>
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.password"/>
      </div>
      <button type="submit" class="btn btn-primary brn-block">Login</button>
      <router-link :to="{ name: 'novo.usuario' }"> Cadastre-se aqui! </router-link>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",

  data() {
    return {
      usuario: {}
    }
  },
  methods: {
    efetuarLogin() { 
      this.$http.post('auth/login', this.usuario)
        .then(resposta => {
            console.log(resposta)
            localStorage.setItem('token', resposta.token.acess.token);
            this.$router.push({ name: "gerentes"})
          })
        .catch(erro => console.log(erro))
    }
  }
};
</script>

<style></style>
