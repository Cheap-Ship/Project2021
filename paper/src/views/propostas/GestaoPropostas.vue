<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-visivel animacao-opacidade-sombra-ligeira d-flex">
      <div class="area-conteudo">
        <div class="navegador-superior animacao-opacidade-sombra-ligeira d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-ligeira">
          <div class="area-navegacao-propostas d-flex justify-content-start align-items-center"> 
            <router-link :to="{name:'Propostas'}" class="lista-propostas-link-a">
              <button class="lista-propostas-link-btn d-flex align-items-center fundo-dd borda-fina borda-aa borda-r5 opensans-sb fonte-14">
                <svg id="voltar2-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="14.667" viewBox="0 0 22 14.667"><path class="a" d="M7.334,15v3.667L0,11.333,7.334,4V7.667h8.185c8.3,0,6.54,8.728,5.806,10.467C20.6,15.892,19.066,15,16.4,15H7.334Z" transform="translate(0 -4)"/></svg>
                <a>Retornar</a>
              </button>
            </router-link>
          </div>
        </div>
        <div class="area-conteudo-com-navegador animacao-opacidade-sombra-ligeira d-flex justify-content-start flex-wrap fundo-f4 borda-r5 sombra-ligeira">
          <div class="zona-tabela-propostas">  
            <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens">Propostas criadas pelo utilizador</label>
            <div>
               <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
                <tr>
                  <th>Tipo</th>
                  <th>Título</th>
                  <th>Entidade acolhedora</th>
                  <th>Tutor</th>
                  <th>Estado</th>
                  <th>Ações</th>
                </tr>
                  <tr v-for="(proposta) in obterTabelaPropostasCriadas" :key="proposta.id">              
                    <td>{{proposta.tipo}}</td>
                    <td>{{proposta.titulo}}</td>
                    <td>{{proposta.entidade}}</td>
                    <td>{{proposta.tutor}}</td>
                    <td>{{proposta.estado}}</td>
                    <td><button @click="removerProposta(proposta.id)">Remover</button></td>
                  </tr>
              </table>
            </div>
          </div>
          <div class="zona-tabela-propostas">
            <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens">Propostas inscritas pelo utilizador</label>
            <table class="tabela">
              <tr>
                <th>Preferência</th>
                <th>Tipo</th>
                <th>Título</th>
                <th>Entidade acolhedora</th>
                <th>Tutor</th>
                <th>Estado</th>
                <th>Ações</th>
              </tr>
                <tr v-for="(proposta) in obterTabelaPropostasInscritas" :key="proposta.ordem">
                  <td>{{proposta.ordem}}</td>
                  <td>{{proposta.tipo}}</td>
                  <td>{{proposta.titulo}}</td>
                  <td>{{proposta.entidade}}</td>
                  <td>{{proposta.tutor}}</td>
                  <td>{{proposta.estado}}</td>
                  <td>
                    <button @click="aumentarOrdem(proposta.id)" :disabled="proposta.ordem == 1">^</button>
                    <button @click="diminuirOrdem(proposta.id)" :disabled="proposta.ordem == obterTabelaPropostasInscritas.length">v</button>
                    <button @click="removerInscricao(proposta.id)">Remover</button>
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
    SideBar
  },
  computed: {
    obterTabelaPropostasCriadas() {
      return this.$store.getters.obterTabelaPropostasCriadas;
    },
    obterTabelaPropostasInscritas() {
      return this.$store.getters.obterTabelaPropostasInscritas;
    }
  },
  methods: {
    removerProposta(id) {
      this.$store.dispatch("removerProposta", id)
    },
    removerInscricao(id) {
      this.$store.dispatch("removerInscricao", id)
    },
    aumentarOrdem(id) {
      this.$store.dispatch("aumentarOrdem", id)
    },
    diminuirOrdem(id) {
      this.$store.dispatch("diminuirOrdem", id)
    }
  }
};
</script>
<style>
.zona-tabela-propostas{width: 100%; margin: 8px 8px;}
</style>