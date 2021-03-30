<template>
    <div class="sidebar d-flex flex-wrap align-content-start fundo-40 mukta-sb fonte-14 sem-margens">
      <div class="logo-sb">
        <svg id="logo-barra-navegacao" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45"><path id="Caminho_1" data-name="Caminho 1" class="cls-1" d="M6.93,29V45H0V.71H6.93V3.06a9,9,0,0,1,1-.85A12.79,12.79,0,0,1,10.8.85,13.62,13.62,0,0,1,15.61,0,13.56,13.56,0,0,1,26,4.5,16.26,16.26,0,0,1,30.14,16,16.27,16.27,0,0,1,26,27.58a13.53,13.53,0,0,1-10.36,4.51,14.24,14.24,0,0,1-4.71-.74,10.39,10.39,0,0,1-3.07-1.53ZM9,9.41a9.16,9.16,0,0,0-2.35,6.66A9.17,9.17,0,0,0,9,22.73a7.87,7.87,0,0,0,5.92,2.45,7.87,7.87,0,0,0,5.92-2.45,9.18,9.18,0,0,0,2.37-6.66,9.16,9.16,0,0,0-2.37-6.66A7.87,7.87,0,0,0,14.93,7,7.91,7.91,0,0,0,9,9.41Z" transform="translate(0 0)"/><path id="Caminho_2" data-name="Caminho 2" class="cls-1" d="M58.33,30V27.73a11.06,11.06,0,0,1-1,.81,13.94,13.94,0,0,1-2.9,1.29,14.63,14.63,0,0,1-15.16-3.49,15.12,15.12,0,0,1-4.18-11,15.12,15.12,0,0,1,4.18-11A13.8,13.8,0,0,1,49.64,0a14.24,14.24,0,0,1,4.71.74,10.76,10.76,0,0,1,3,1.43l.91.73V.68h6.93V30Zm-2.08-8.3a8.52,8.52,0,0,0,2.35-6.4,8.52,8.52,0,0,0-2.35-6.36,8.68,8.68,0,0,0-11.86,0A8.5,8.5,0,0,0,42,15.3a8.52,8.52,0,0,0,2.35,6.36,8.67,8.67,0,0,0,11.9,0Z" transform="translate(0 0)"/><path id="Caminho_3" data-name="Caminho 3" class="cls-1" d="M80.73,29V45H73.8V.71h6.93V3.06a9,9,0,0,1,1-.85A12.79,12.79,0,0,1,84.6.85,14.17,14.17,0,0,1,99.77,4.5,16.31,16.31,0,0,1,104,16a16.29,16.29,0,0,1-4.17,11.54,13.53,13.53,0,0,1-10.36,4.51,14.24,14.24,0,0,1-4.71-.74,10.31,10.31,0,0,1-3.1-1.53ZM82.81,9.41a9.16,9.16,0,0,0-2.35,6.66,9.16,9.16,0,0,0,2.35,6.66,8.38,8.38,0,0,0,11.85,0A9.17,9.17,0,0,0,97,16.07a9.21,9.21,0,0,0-2.36-6.66A8.38,8.38,0,0,0,82.81,9.41Z" transform="translate(0 0)"/><path id="Caminho_4" data-name="Caminho 4" class="cls-1" d="M140.5,15.05,118,19.38a8.05,8.05,0,0,0,3.16,3.38A8.66,8.66,0,0,0,125.68,24a8.11,8.11,0,0,0,4-1A6.34,6.34,0,0,0,132,21l.67-.95,6,3.11c-.08.18-.24.45-.43.78a13.47,13.47,0,0,1-1.45,1.82A15.09,15.09,0,0,1,134.36,28a14.49,14.49,0,0,1-3.78,1.82,15.67,15.67,0,0,1-5.08.82A14.89,14.89,0,0,1,110,16.36c0-.34,0-.67,0-1a14.86,14.86,0,0,1,4.38-10.91A15.51,15.51,0,0,1,136,4.33,15.06,15.06,0,0,1,140.5,15.05Zm-15.22-8.4a8,8,0,0,0-8.22,7.48l15.55-3A7.47,7.47,0,0,0,125.28,6.65Z" transform="translate(0 0)"/><path id="Caminho_5" data-name="Caminho 5" class="cls-1" d="M160,6.58c-2.92,0-5.07.6-6.45,1.82s-2.08,3.35-2.09,6.43V30h-6.93V.68h6.93V2.92C153.39,1,156.23,0,160,0Z" transform="translate(0 0)"/></svg>
      </div>
      <div class="separador d-flex flex-wrap align-content-between">
        <div class="bloco-superior">
          <router-link :to="{name:'Propostas'}" class="opcoes"><div class="opcao d-flex justify-content-start align-items-center fundo-30 margem-x10 borda-r5">
            <svg id="icone-sb" xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 20 20"><path class="cls-1" d="M18,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2A2,2,0,0,0,18,0ZM11.49,15h-7a.5.5,0,0,1,0-1h7a.5.5,0,1,1,0,1Zm4-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Zm0-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/></svg>
            <a id="a-sb">Propostas</a>
          </div></router-link>
          <router-link :to="{name:'Gestao'}" class="opcoes" v-if="obterInfoUtilizador.id_tipo !== 1"><div class="opcao d-flex justify-content-start align-items-center fundo-30 margem-x10 borda-r5">
            <svg id="icone-sb" xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 20 20"><path class="cls-1" d="M18.5,6.83H1.5a1,1,0,0,0-1,1v4.34a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V7.83A1,1,0,0,0,18.5,6.83ZM2.82,10.91a.41.41,0,0,1-.41.41H1.9a.41.41,0,0,1-.41-.41V9.06a.41.41,0,0,1,.41-.41h.51a.41.41,0,0,1,.41.41Zm3.69,0a.41.41,0,0,1-.41.41H4.25a.41.41,0,0,1-.41-.41V9.09a.42.42,0,0,1,.41-.41H6.1a.41.41,0,0,1,.41.41Z" transform="translate(-0.5 -0.17)"/><path class="cls-1" d="M18.5,13.5H1.5a1,1,0,0,0-1,1v4.33a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V14.5A1,1,0,0,0,18.5,13.5ZM2.82,17.58a.4.4,0,0,1-.41.4H1.9a.4.4,0,0,1-.41-.4V15.73a.41.41,0,0,1,.41-.41h.51a.41.41,0,0,1,.41.41Zm3.69,0A.41.41,0,0,1,6.1,18H4.25a.42.42,0,0,1-.41-.41V15.76a.41.41,0,0,1,.41-.41H6.1a.41.41,0,0,1,.41.41Z" transform="translate(-0.5 -0.17)"/><path class="cls-1" d="M18.5.17H1.5a1,1,0,0,0-1,1V5.5a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V1.17A1,1,0,0,0,18.5.17ZM2.82,4.24a.41.41,0,0,1-.41.41H1.9a.41.41,0,0,1-.41-.41V2.39A.41.41,0,0,1,1.9,2h.51a.41.41,0,0,1,.41.41Zm3.69,0a.41.41,0,0,1-.41.41H4.25a.41.41,0,0,1-.41-.41V2.42A.41.41,0,0,1,4.25,2H6.1a.4.4,0,0,1,.41.4Z" transform="translate(-0.5 -0.17)"/></svg>
            <a id="a-sb">Gestão</a>
          </div></router-link>
          <router-link :to="{name:'Agenda'}" class="opcoes"><div class="opcao d-flex justify-content-start align-items-center fundo-30 margem-x10 borda-r5">
            <svg id="icone-sb" xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 20 20"><path class="cls-1" d="M18,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2A2,2,0,0,0,18,0ZM11.49,15h-7a.5.5,0,0,1,0-1h7a.5.5,0,1,1,0,1Zm4-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Zm0-3H4.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/></svg>
            <a id="a-sb">Agenda</a>
          </div></router-link>
          </div>
          <router-link :to="{name:'Perfil'}" class="opcoes margem-b30"><div class="opcao d-flex justify-content-start align-items-center fundo-30 margem-x10 borda-r5">
            <img :src="obterInfoUtilizador.foto" class="foto-perfil-sb borda-r5"/>
            <a class="limitar-texto-sb" id="a-sb">{{obterInfoUtilizador.nome + ' ' + obterInfoUtilizador.apelido}}</a>
          </div></router-link>
      </div>
    </div>
</template>
<style>
.sidebar {height: 100%; width: 160px; box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.1);}
.opcao{height: 40px; margin-bottom: 10px;}
.sidebar a{text-decoration: none; color: #aaaaaa;}
.opcao:hover a, #a-sb:hover{color: #707070;}
.logo-sb{width: 160px; height: 70px;}
.opcoes{width: 160px; height: 50px;}
.bloco-superior{width: 160px; height: 150px;}
.separador{height: calc(100% - 70px);}
a.router-link-exact-active, .router-link-exact-active:hover a, 
.router-link-exact-active #a-sb:hover, .router-link-exact-active .limitar-texto-sb{color: #3586aa;}
#icone-sb{fill: #aaaaaa; margin: 0px 10px;}
.foto-perfil-sb{margin: 0px 10px; width: 26px; height: 26px;}
.opcao:hover #icone-sb{fill: #707070;}
.opcao:hover .foto-perfil-sb, .router-link-exact-active .opcao .foto-perfil-sb, .router-link-exact-active:hover .opcao .foto-perfil-sb{opacity: 80%;}
.router-link-exact-active #icone-sb, .router-link-exact-active:hover #icone-sb{ fill: #3586aa;}
.router-link-exact-active .foto-perfil-sb, .router-link-exact-active:hover .foto-perfil-sb{opacity: 100%;}
.limitar-texto-sb{width: 90px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: left;}
</style>
<script>
export default {
  name: "Perfil",
  computed:{
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  }
}
</script>
