<template>
<div class="view d-flex">
    <SideBar/>
    <div class="area-visivel d-flex animacao-opacidade-sombra-ligeira">
      <div class="area-conteudo">
        <!-- Navegador superior -->
        <div class="navegador-superior d-flex justify-content-between animacao-opacidade-sombra-ligeira fundo-f4 margem-b20 borda-r5 sombra-ligeira">
          <!-- Área relativa a pesquisa de propostas (filtro de texto e de selecionar) -->
          <div class="area-pesquisa-propostas">
            <!-- Filtro de texto -->
            <input class="input-pesquisa-proposta fundo-fa opensans-l fonte-12 cor-60 borda-r5" type="text" placeholder="Escreva alguma coisa...">
            <!-- Filtro de seleção do tipo de proposta -->
            <select v-model="select" class="selecionar-tipo-proposta fundo-fa opensans-l fonte-12 cor-60 borda-r5 margem-all4" name="selecionar-tipo-proposta">
              <option value="-1" for="selecionar-tipo-proposta">Tipo de Proposta</option>
              <option value="1" for="selecionar-tipo-proposta">Projetos</option>
              <option value="0" for="selecionar-tipo-proposta">Estágio</option>
            </select>
          </div>
          <!-- Área relativa a outros componentes relacionados com propostas -->
          <div class="area-outros-componentes-propostas d-flex justify-content-start align-items-center">
            <!-- Link para a página de gerir propostas -->
            <router-link :to="{name:'GerirPropostas'}">
              <button class="link-gerir-propostas-btn d-flex align-items-center fundo-40 borda-fina borda-20 borda-r5 opensans-sb fonte-14 margem-all4">
                <svg id="gerir-propostas-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19.67"  width="22px" xmlns:v="https://vecta.io/nano"><path d="M18 6.66H1a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V7.66a1 1 0 0 0-1-1zM2.32 10.74a.41.41 0 0 1-.41.41H1.4a.41.41 0 0 1-.41-.41V8.89a.41.41 0 0 1 .41-.41h.51a.41.41 0 0 1 .41.41zm3.69 0a.41.41 0 0 1-.41.41H3.75a.41.41 0 0 1-.41-.41V8.92a.42.42 0 0 1 .41-.41H5.6a.41.41 0 0 1 .41.41zM18 13.33H1a1 1 0 0 0-1 1v4.33a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-4.33a1 1 0 0 0-1-1zM2.32 17.41a.4.4 0 0 1-.41.4H1.4a.4.4 0 0 1-.41-.4v-1.85a.41.41 0 0 1 .41-.41h.51a.41.41 0 0 1 .41.41zm3.69 0a.41.41 0 0 1-.41.42H3.75a.42.42 0 0 1-.41-.41v-1.83a.41.41 0 0 1 .41-.41H5.6a.41.41 0 0 1 .41.41zM18 0H1a1 1 0 0 0-1 1v4.33a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2.32 4.07a.41.41 0 0 1-.41.41H1.4a.41.41 0 0 1-.41-.41V2.22a.41.41 0 0 1 .41-.39h.51a.41.41 0 0 1 .41.41zm3.69 0a.41.41 0 0 1-.41.41H3.75a.41.41 0 0 1-.41-.41V2.25a.41.41 0 0 1 .41-.42H5.6a.4.4 0 0 1 .41.4z"/><defs /></svg>
                <a>Gerir propostas</a>
              </button>
            </router-link>
            <!-- Link para a página de criar uma proposta -->
            <router-link :to="{name:'CriarProposta'}" class="criar-proposta-link-a">
              <button class="link-criar-proposta-btn d-flex align-items-center fundo-0084c0 borda-fina borda-004666 borda-r5 opensans-sb fonte-14">
                <svg id="criar-proposta-svg" xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 23.31 23.41"  xmlns:v="https://vecta.io/nano"><path d="M14.51 4.5a1 1 0 0 0-1.4 0L1.41 16.3a2.19 2.19 0 0 0-.3.5l-1.1 5.4a1.06 1.06 0 0 0 1.2 1.2l5.4-1.1a.55.55 0 0 0 .5-.3l11.7-11.7a1 1 0 0 0 0-1.4zm.4 3L4.21 18.2a.48.48 0 0 1-.7 0l-.2-.2a.48.48 0 0 1 0-.7l10.7-10.7a.48.48 0 0 1 .7 0l.2.2a.48.48 0 0 1 0 .7zm8.1-2.9L18.71.3a1 1 0 0 0-1.4 0l-1.4 1.4a1 1 0 0 0 0 1.4l4.3 4.3a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4z"/><defs /></svg>
                <a>Criar uma proposta</a>
              </button>
            </router-link>
          </div>
        </div>
        <!-- Área de conteúdo de propostas -->
        <div class="area-conteudo-com-navegador animacao-opacidade-sombra-ligeira fundo-f4 borda-r5 sombra-ligeira">
          <div class="area-de-propostas d-flex justify-content-start">
            <!-- Área de seleção da proposta (lado esquerdo) -->
            <div class="area-selecao-proposta margem-all8 width-50">
              <!-- Cards das propostas -->
              <b-card class="d-flex justify-content-start" v-for="(proposta) in propostas[counter]" :key="proposta.id" @click="displayProposta = proposta">
                <!-- Nesta fase a imagem é por defeito -->
                <div class="imagem-proposta d-flex justify-content-center align-items-center fundo-dd borda-fina borda-aa borda-r5 sem-margens">
                  <svg id="icone-proposta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="cls-1" d="M18,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2A2,2,0,0,0,18,0ZM11.49,15h-7a.5.5,0,0,1,0-1h7a.5.5,0,1,1,0,1Zm4-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Zm0-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/></svg>
                </div>
                <div class="texto-proposta d-flex align-items-center flex-wrap">
                  <p class="texto-proposta-titulo align-left">{{proposta.titulo}}</p>
                  <p class="texto-proposta-tipo align-left">{{proposta.tipo}}</p>
                </div>
              </b-card>
            </div>
            <!-- Área da proposta selecionada (lado direito) -->
            <div class="area-proposta-selecionada d-flex flex-wrap width-50 margem-all8">
              <!-- Dados principais da proposta -->
              <div class="info-proposta-principal fundo-ff borda-fina borda-aa borda-r5 padding-all12">
                <template v-if="displayProposta != null">
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Objetivos e descrição</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.objetivos}}</p>
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Plano provisório de trabalho</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.planos}}</p>
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Resultados esperados</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.resultados}}</p>
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Perfil do candidato desejado</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.perfil}}</p>
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Outros dados relevantes</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.dados}}</p>
                  <h5 class="mukta-r fonte-20 cor-20 align-left">Recursos necessários</h5>
                  <p class="info-proposta-texto opensans-l fonte-16 cor-20 align-left">{{displayProposta.recursos}}</p>
                </template>
              </div>
              <!-- Dados secundários da proposta -->
              <div class="info-proposta-secundaria d-flex flex-wrap fundo-ff borda-fina borda-aa borda-r5">
                <!-- Nome da empresa -->
                <div class="dados-empresa fundo-f4 borda-r5">
                  <template v-if="displayProposta != null && displayProposta.empresa != null">
                    <p class="fonte-14 sem-margens">Empresa</p><p class="fonte-14 sem-margens">{{displayProposta.empresa}}</p>
                  </template>
                </div>
                <!-- Morada da empresa -->
                <div class="dados-empresa fundo-f4 borda-r5">
                  <template v-if="displayProposta != null && displayProposta.empresa != null">
                    <p class="fonte-14 sem-margens">Morada</p><p class="fonte-14 sem-margens">{{displayProposta.morada}}</p>
                  </template>
                </div>
                <!-- Website -->
                <div class="dados-empresa fundo-f4 borda-r5">
                  <template v-if="displayProposta != null && displayProposta.empresa != null">
                    <p class="fonte-14 sem-margens">Website</p><p class="fonte-14 sem-margens">{{displayProposta.website}}</p>
                  </template>
                </div>
              </div>
              <!-- Dados terciários da proposta -->
              <div class="info-proposta-terciaria d-flex flex-wrap fundo-ff borda-r5 borda-fina borda-aa">
                <div class="info-proposta-e-tutor fundo-f4 borda-r5">
                  <div class="info-tutor-selecionada"> 
                    <template v-if="displayProposta != null && displayProposta.empresa != null">
                      <label for="info-tutor-selecionada">Tutor</label>
                      <p class="sem-margens">{{displayProposta.tutor}}</p>
                      <p class="sem-margens">{{displayProposta.cargo}}</p>
                      <p class="sem-margens">{{displayProposta.contacto}}</p>
                      <p class="sem-margens">{{displayProposta.correio}}</p>
                    </template>
                  </div>
                </div>
                  <button :disabled="displayProposta == null" @click="inscreverProposta">Inscrever na Proposta</button>
              </div>
            </div>
          </div>
          <div class="selecionar-paginas">
              <button v-for="(proposta, index) in propostas" :key="index" @click="counter = index" style="background: red; width: 20px; height: 20px;"></button>
          </div>
        </div>
      </div>
    </div>
</div>  
</template>
<style>
/* Estilização específica a esta página: */
  .texto-proposta-titulo {width: 100%;}
  .imagem-proposta {height: 100%; aspect-ratio: 1/1;}
  #icone-proposta {height: 50%; fill: #aaaaaa}
  .area-de-propostas {width: 100%; height: calc(100% - 20px);}
  .selecionar-paginas {background: grey; width: 50%; height: 12px;}
  .area-selecao-proposta .card {border: 0.5px solid #aaaaaa; margin-bottom: 12px; border-radius: 5px; height: calc((100% - 36px) / 4);}
  .area-selecao-proposta .card:hover {background: #f9f9f9; border-color:#707070; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);}
  .area-selecao-proposta .card:hover .imagem-proposta {border-color:#707070; background: #cccccc;}
  .area-selecao-proposta .card:hover #icone-proposta {fill: #707070;}
  .area-selecao-proposta .card .card-body {padding: 1% 1%; display: flex;}
  .input-pesquisa-proposta {margin: 4px 4px 4px 8px;}
  .link-criar-proposta-btn {margin: 4px 8px 4px 4px;}
  .area-outros-componentes-propostas a {color: #eeeeee !important; text-decoration: none;}
  .selecionar-tipo-proposta {width: 152px; background-position-x: 128px; margin: 4px 4px;}
  .link-gerir-propostas-btn, .link-criar-proposta-btn{height: 42px; padding: 0px 10px;}
  .area-outros-componentes-propostas button a{text-decoration: none; padding-left: 10px;}
  #gerir-propostas-svg, #criar-proposta-svg{fill: #eeeeee;}
  .link-gerir-propostas-btn:hover a{color: #707070 !important;}
  .link-gerir-propostas-btn:hover #gerir-propostas-svg{fill: #707070;}
  .link-criar-proposta-btn:hover a{color: #004666 !important;}
  .link-criar-proposta-btn:hover #criar-proposta-svg{fill: #004666;}
  .info-proposta-principal{height: 60%; width: 100%; margin-bottom: 16px; overflow-y: auto; overflow-x: hidden;}
  .info-proposta-secundaria{height: calc(40% - 16px); width: calc(50% - 8px); margin-right: 16px;}
  .info-proposta-terciaria{height: calc(40% - 16px); width: calc(50% - 8px);}
  .dados-empresa{height: auto; width: 100%; margin: 4px 4px;}
  .info-proposta-e-tutor{height: 72%; width: 100%; margin: 4px 4px;}
  .info-proposta-selecionada, .info-tutor-selecionada{height: 50%;}
  .info-proposta-texto {word-break: break-word;}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar
  },
  data() {
    return {
      select: -1,
      counter: 0,
      displayProposta: null,
      propostas: this.$store.getters.obterCardsPropostas(this.select)
    }
  },
  methods: {
    inscreverProposta() {
      try {
        this.$store.dispatch("inscreverProposta", this.displayProposta)
      } catch (error) {
        alert(error)
      }
    }
  }
};
</script>
