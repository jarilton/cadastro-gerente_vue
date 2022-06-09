<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: [
        {
          nome: 'Paulo',
          agencia: 1000
        },
        {
          nome: 'Guilherme',
          agencia: 2000
        },
        {
          nome: 'Ricardo',
          agencia: 3000
        }
      ]
    }
  },
  mounted() {
    this.$http.get('gerentes')
      .then(reponse => this.gerentes = reponse.data)
      .catch(err => console.log(err))
  },
  beforeRouteEnter (to, from, next) {
    if(!this.$store.state.token) {
      next({ name: 'login' })
    }
    next()
  }
}
</script>

<style>

</style>