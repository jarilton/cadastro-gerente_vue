import Vuex from "vuex"
import Vue from "vue"
import http from "@/http"

Vue.use(Vuex)

const estado = {
      token: null,
      usuario: {}
}

const mutations = {
      DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
            state.token = token;
            state.usuario = usuario;
      },
      DESLOGAR_USUARIO(state) {
            state.token = null
            state.usuario = {}
      }
}

const actions = {
      efetuarLogin({ commit }, usuario) {
            return new Promise((resolve, reject) => {
                  http.post('auth/login', usuario)
                        .then((response) => {
                              commit('DEFINIR_USUARIO_LOGADO', {
                                    token: response.token.acess_token,
                                    usuario: response.token.acess_user
                              })
                              resolve(response.data)
                        })
                        .catch((err) => {
                              console.error(err)
                              reject(err)
                        })
            }
      )}

}

export default new Vuex.Store({
      state: estado,
      mutations,
      actions
})