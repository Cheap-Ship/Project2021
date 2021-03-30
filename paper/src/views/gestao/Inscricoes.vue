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
            <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tipo de proposta</th>
                <th>Entidade acolhedora</th>
                <th>Tutor</th>
                <th>Detalhes</th>
                <th>Ações</th>
              </tr>
              <tr v-for="(inscricoes) in obterTabelaInscricoes" :key="inscricoes.id">              
                <td>{{inscricoes.id}}</td>
                <td>{{inscricoes.nome_inscrito}}</td>
                <td>{{inscricoes.tipo_proposta}}</td>
                <td>{{inscricoes.entidade}}</td>
                <td>{{inscricoes.tutor}}</td>
                <td><a v-b-modal.modalDetalhes @click="obterModalVerDetalhes(inscricoes.id_proposta)">Ver detalhes</a></td>
                <td><button @click="aprovarInscricao(inscricoes)">Aprovar</button><button @click="negarInscricao(inscricoes.id)">Negar</button></td>
              </tr>
            </table>
          </div>
            <b-modal id="modalDetalhes" :title="dadosModal[0].titulo">
              <p>Objetivos: {{dadosModal[0].objetivos}}</p>
              <p>Plano Provisório: {{dadosModal[0].planos}}</p>
              <p>Resultados Esperados: {{dadosModal[0].resultados}}</p>
              <p>Perfil Desejado: {{dadosModal[0].perfil}}</p>
              <p>Dados Relevantes: {{dadosModal[0].dados}}</p>
              <p>Recursos Necessários: {{dadosModal[0].recursos}}</p>
              <template v-if="dadosModal[0].id_tipo == 1">
                <p>Cargo Tutor: {{dadosModal[1].cargo_tutor}}</p>
                <p>Contacto Tutor: {{dadosModal[1].contacto_tutor}}</p>
                <p>Correio Tutor: {{dadosModal[1].correio_tutor}}</p>
              </template>
            </b-modal>
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
      dadosModal: [{titulo:""}]
    };
  },
  computed: {
    obterTabelaInscricoes() {
      return this.$store.getters.obterTabelaInscricoes;
    },
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  },
  methods: {
    aprovarInscricao(id) {
      this.$store.dispatch("aprovarInscricao", id)
    },
    negarInscricao(id) {
      this.$store.dispatch("negarInscricao", id)
    },
    obterModalVerDetalhes(id) {
      this.dadosModal = this.$store.getters.obterModalVerDetalhes(id);
    }
  }
};
</script>

