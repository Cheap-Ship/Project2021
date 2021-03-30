<template>
  <div class="view d-flex">
    <SideBar/>
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
          <div>Temos que fazer com que redirecione a outra página. Se for docente passem para Aprovações, se for Entidade Externa, para inscrições.</div>
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
  computed:{
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  }
};
</script>
<style>
.opcao-gestao{height: 40px;}
.opcoes-gestao a{color: #202020; text-decoration: none; transition: color 0.4s ease-in-out;}
.opcao-gestao:hover a, #a-gestao:hover{color: #707070;}
#a-gestao{padding: 0px 8px;}
.opcoes-gestao a.router-link-exact-active, .opcoes-gestao .router-link-exact-active:hover a, 
.opcoes-gestao .router-link-exact-active #a-gestao:hover, .opcoes-gestao .router-link-exact-active {color: #aaaaaa;}
.opcoes-gestao .router-link-exact-active .opcao-gestao{background-color: #606060;}
</style>
