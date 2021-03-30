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
        <div class="area-conteudo-se-navegador animacao-opacidade-sombra-ligeira d-flex justify-content-start fundo-f4 borda-r5 sombra-ligeira">
          <div class="area-tabela">
            <select id="typeSelect" v-model="select">
              <option value="utilizadores">Utilizadores</option>
              <option value="propostas">Propostas</option>
            </select>
            <div v-if="(select == 'utilizadores')">
              <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
                <tr>
                  <th>ID</th>
                  <th>Tipo de utilizador</th>
                  <th>Nome</th>
                  <th>Correio eletrónico</th>
                  <th>Complementar</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="(user) in obterTabelaAprovarUsers" :key="user.id">              
                  <td>{{user.id}}</td>
                  <td>{{user.tipo}}</td>
                  <td>{{user.nome}}</td>
                  <td>{{user.correio}}</td>
                  <td>{{user.complementar}}</td>
                  <td><button @click="aprovarUtilizador(user.id)">Aprovar</button><button @click="negarUtilizador(user.id)">Negar</button></td>
                </tr>
              </table>
            </div>
            <div v-else>
              <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
                <tr>
                  <th>ID</th>
                  <th>Submetido por</th>
                  <th>Nome</th>
                  <th>Tipo de proposta</th>
                  <th>Detalhes</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="(proposta) in obterTabelaAprovarPropostas" :key="proposta.id">              
                  <td>{{proposta.id}}</td>
                  <td>{{proposta.tipo_criador}}</td>
                  <td>{{proposta.nome_criador}}</td>
                  <td>{{proposta.tipo_proposta}}</td>
                  <td><a v-b-modal.modalDetalhes @click="obterModalVerDetalhes(proposta.id)">Ver detalhes</a></td>
                  <td><button @click="aprovarProposta(proposta.id)">Aprovar</button><button @click="negarProposta(proposta.id)">Negar</button></td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <b-modal id="modalDetalhes" :title="dadosModal[0].titulo">
              <p>Objetivos: {{dadosModal[0].objetivos}}</p>
              <p>Plano Provisório: {{dadosModal[0].planos}}</p>
              <p>Resultados Esperados: {{dadosModal[0].resultados}}</p>
              <p>Perfil Desejado: {{dadosModal[0].perfil}}</p>
              <p>Dados Relevantes: {{dadosModal[0].dados}}</p>
              <p>Recursos Necessários: {{dadosModal[0].recursos}}</p>
              <template v-if="dadosModal[0].id_tipo == 1">
                <p>Empresa: {{dadosModal[2]}}</p>
                <p>Nome Tutor: {{dadosModal[1].nome_tutor}}</p>
                <p>Cargo Tutor: {{dadosModal[1].cargo_tutor}}</p>
                <p>Contacto Tutor: {{dadosModal[1].contacto_tutor}}</p>
                <p>Correio Tutor: {{dadosModal[1].correio_tutor}}</p>
              </template>
            </b-modal>
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
      select: "utilizadores",
      dadosModal: [{titulo:""}]
    };
  },
  computed: {
    obterTabelaAprovarUsers() {
      return this.$store.getters.obterTabelaAprovarUsers;
    },
    obterTabelaAprovarPropostas() {
      return this.$store.getters.obterTabelaAprovarPropostas;
    },
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  },
  methods: {
    aprovarUtilizador(id) {
      this.$store.dispatch("aprovarUtilizador", id);
    },
    negarUtilizador(id) {
      this.$store.dispatch("negarUtilizador", id);
    },
    aprovarProposta(id) {
      this.$store.dispatch("aprovarProposta", id);
    },
    negarProposta(id) {
      this.$store.dispatch("negarProposta", id);
    },
    obterModalVerDetalhes(id) {
      this.dadosModal = this.$store.getters.obterModalVerDetalhes(id);
    }
  },
};
</script>


