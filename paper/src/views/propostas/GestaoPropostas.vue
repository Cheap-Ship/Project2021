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
               <table class="tabela borda-grossa">
                <tr>
                  <th class="mukta-r fonte-14 cor-20">Tipo</th>
                  <th class="mukta-r fonte-14 cor-20">Título</th>
                  <th class="mukta-r fonte-14 cor-20">Entidade acolhedora</th>
                  <th class="mukta-r fonte-14 cor-20">Tutor</th>
                  <th class="mukta-r fonte-14 cor-20">Estado</th>
                  <th class="mukta-r fonte-14 cor-20">Ações</th>
                </tr>
                  <tr v-for="(proposta) in obterTabelaPropostasCriadas" :key="proposta.id">              
                    <td class="opensans-l fonte-12 cor-40">{{proposta.tipo}}</td>
                    <td class="opensans-l fonte-12 cor-40">{{proposta.titulo}}</td>
                    <td class="opensans-l fonte-12 cor-40">{{proposta.entidade}}</td>
                    <td class="opensans-l fonte-12 cor-40">{{proposta.tutor}}</td>
                    <td class="opensans-l fonte-12 cor-40">{{proposta.estado}}</td>
                    <td class="opensans-l fonte-12 cor-40">
                      <button @click="removerProposta(proposta.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" xmlns:v="https://vecta.io/nano"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.151 17.943l-4.143-4.102L7.891 18l-1.833-1.833 4.104-4.157L6 7.891l1.833-1.833 4.155 4.102L16.094 6l1.849 1.849-4.1 4.141L18 16.094l-1.849 1.849z"/></svg>
                        <a>Remover</a>
                      </button>
                    </td>
                  </tr>
              </table>
            </div>
          </div>
           <div class="zona-tabela-propostas" v-if="obterInfoUtilizador.id_tipo == 1">
            <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens">Propostas inscritas pelo utilizador</label>
            <table class="tabela borda-grossa">
              <tr>
                <th class="mukta-r fonte-14 cor-20">Preferência</th>
                <th class="mukta-r fonte-14 cor-20">Tipo</th>
                <th class="mukta-r fonte-14 cor-20">Título</th>
                <th class="mukta-r fonte-14 cor-20">Entidade acolhedora</th>
                <th class="mukta-r fonte-14 cor-20">Tutor</th>
                <th class="mukta-r fonte-14 cor-20">Estado</th>
                <th class="mukta-r fonte-14 cor-20">Ações</th>
              </tr>
                <tr v-for="(proposta) in obterTabelaPropostasInscritas" :key="proposta.ordem">
                  <td class="opensans-l fonte-12 cor-40">{{proposta.ordem}}</td>
                  <td class="opensans-l fonte-12 cor-40">{{proposta.tipo}}</td>
                  <td class="opensans-l fonte-12 cor-40">{{proposta.titulo}}</td>
                  <td class="opensans-l fonte-12 cor-40">{{proposta.entidade}}</td>
                  <td class="opensans-l fonte-12 cor-40">{{proposta.tutor}}</td>
                  <td class="opensans-l fonte-12 cor-40">{{proposta.estado}}</td>
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
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    },
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