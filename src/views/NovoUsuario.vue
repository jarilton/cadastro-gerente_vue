 <template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>
 
 <script>
import axios from "axios";

export default {
  data: function() {
    return {
      usuario: {
        nome: "",
        senha: "",
        email: ""
      }
    };
  },
  methods: {
    enviarFormulario() {
      axios
        .post("http://localhost:8000/auth/register", this.usuario)
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(erro))
    }
  }
};
</script>
