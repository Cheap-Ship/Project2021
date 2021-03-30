<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-visivel animacao-opacidade-sombra-ligeira d-flex">
      <div class="area-conteudo">
        <!-- Barra de navegação da gestão -->
        <div class="navegador-superior opcoes-gestao animacao-opacidade-sombra-ligeira d-flex justify-content-start align-items-center fundo-f4 margem-b20 borda-r5 sombra-ligeira">
          <!-- Aprovações de utilizadores e propostas -->
          <router-link :to="{name:'Aprovacoes'}" v-if="obterInfoUtilizador.id_tipo === 0">
            <div class="opcao-gestao d-flex justify-content-start align-items-center fundo-cc borda-aa borda-fina margem-l8 borda-r5 opensans-sb fonte-14">
              <a id="a-gestao">Aprovações</a>
            </div>
          </router-link>
          <!-- Gestão de utilizadores - estudantes, entidades externas e docentes -->
          <router-link :to="{name:'Utilizadores'}" v-if="obterInfoUtilizador.id_tipo === 0">
            <div class="opcao-gestao d-flex justify-content-start align-items-center fundo-cc borda-aa borda-fina margem-l8 borda-r5 opensans-sb fonte-14">
              <a id="a-gestao">Utilizadores</a>
            </div>
          </router-link>
          <!-- Gestão das inscrições -->
          <router-link :to="{name:'Inscricoes'}">
            <div class="opcao-gestao d-flex justify-content-start align-items-center fundo-cc borda-aa borda-fina margem-l8 borda-r5 opensans-sb fonte-14">
              <a id="a-gestao">Inscrições</a>
            </div>
          </router-link>
          <!-- Criar um novo docente no sistema - apenas os membros do CCA o podem fazer -->
          <router-link :to="{name:'AdicionarDocentes'}" v-if="obterInfoUtilizador.cca">
            <div class="opcao-gestao d-flex justify-content-start align-items-center fundo-cc borda-aa borda-fina margem-l8 borda-r5 opensans-sb fonte-14">
              <a id="a-gestao">Adicionar Docente</a>
            </div>
          </router-link>
        </div>
        <div class="area-conteudo-com-navegador animacao-opacidade-sombra-ligeira d-flex justify-content-start fundo-f4 borda-r5 sombra-ligeira">
          <div class="area-tabela">
            <!-- O select já está com a opção do Estudantes já selecionada -->
            <select id="typeSelect" v-model="select">
              <option value="Estudante">Estudantes</option>
              <option value="Docente">Docentes</option>
              <option value="Entidade Externa">Entidades Externas</option>
            </select>
            <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Correio eletrónico</th>
                <th v-if="select == 'Estudante'">Número de Estudante</th>
                <th v-else-if="select == 'Docente'">Docente CCA</th>
                <th v-else>Nome da Empresa</th>
                <th v-if="select != 'Docente'">Ações</th>
                <th v-else-if="select == 'Docente' && obterInfoUtilizador.cca">Ações</th>
              </tr>
              <tr v-for="(user) in obterTabelaUtilizadores" :key="user.id">              
                <td>{{user.id}}</td>
                <td>{{user.nome}}</td>
                <td>{{user.correio}}</td>
                <td>{{user.complementar}}</td>
                <td v-if="select == 'Docente' && obterInfoUtilizador.cca">
                  <button v-if="!user.cca" @click="adicionarCCA(user.id)">Adicionar ao CCA</button>
                  <button v-else @click="removerCCA(user.id)">Remover do CCA</button>
                  <button v-if="user.id_estado != 2" @click="banirUtilizador(user.id)">Banir</button>
                  <button v-else @click="reverterBan(user.id)">Reverter</button>
                </td>
                <td v-else-if="select != 'Docente'">
                  <button v-if="user.id_estado != 2" @click="banirUtilizador(user.id)">Banir</button>
                  <button v-else @click="reverterBan(user.id)">Reverter</button>
                </td>
              </tr> 
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      select: 'Estudante',
    };
  },
  computed: {
    obterTabelaUtilizadores() {
      return this.$store.getters.obterTabelaUtilizadores(this.select);
    },
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  },
  methods: {
    banirUtilizador(id) {
      this.$store.dispatch("banirUtilizador", id);
    },
    reverterBan(id) {
      this.$store.dispatch("reverterBan", id);
    },
    adicionarCCA(id) {
      this.$store.dispatch("adicionarCCA", id);
    },
    removerCCA(id) {
      this.$store.dispatch("removerCCA", id);
    }
  }
};
</script>
