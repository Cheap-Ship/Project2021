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
        <!-- Área de adição de um novo docente -->
        <div class="area-conteudo-se-navegador animacao-opacidade-sombra-ligeira d-flex justify-content-start fundo-f4 borda-r5 sombra-ligeira padding-all8">
          <div class="form-docente fundo-ff borda-fina borda-r5 borda-aa">
            <!-- Formulário para a introdução de dados do novo docente a ser criado -->
            <form @submit.prevent="register">
              <!-- Introdução do nome do docente -->
              <label class="area-label fonte-14 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="nome_docente">
                Nome
              </label>
              <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" id="nome_docente" 
              v-model="utilizador.nome" required="required" autocomplete="off"/>
              <!-- Introdução do apelido do docente -->
              <label class="area-label fonte-14 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="apelido">
                Apelido
              </label>
              <input type="text" id="apelido" class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" 
              v-model="utilizador.apelido" required="required" autocomplete="off"/>
              <!-- Introdução do correio eletrónico institucional do docente -->
              <label class="area-label fonte-14 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="correio">
                Correio eletrónico
              </label>
              <input type="email" id="correio" class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens"
              v-model="utilizador.correio" required="required" autocomplete="off"/>
              <!-- Introdução da palavra-passe do docente -->
              <label class="area-label fonte-14 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="passe">
                Palavra-passe
              </label>
              <input :type="type" id="passe" class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens"
              v-model="utilizador.passe" required="required" autocomplete="off"/>
              <div class="ver-helper d-flex justify-content-end sem-margens">
                <svg @click="mostrar" class="ver cursor-pointer sem-margens ajuste-mostrar-passe-docente" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"/></svg>
              </div>
              <!-- Checkbox para definir o docente como membro do CCA ou não -->
              <label class="conteudo-checkbox cca-cb d-flex justify-content-start align-items-center cursor-pointer cor-20 fonte-10 mukta-r sem-margens margem-t15">
                <input class="checkbox" type="checkbox" v-model="utilizador.cca">
                Membro do CCA
                <span class="checkbox-marcado sem-margens"></span>
              </label>
              <!-- Submissão do formulário -->
              <button class="botao-criar-docente fundo-40 borda-20 borda-fina borda-r5 cor-ee fonte-16 opensans-sb margem-t15" type="submit">
                Criar o docente
              </button>
            </form>
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
  data(){
    return{
      utilizador:{
        nome: "",
        apelido: "",
        correio: "",
        passe: "",
        cca: false,
      },
      type: 'password'
    }
  },
  methods:{
    register(){
      let utilizador = {
        id_utilizador: this.$store.getters.proximoIDUtilizador,
        id_estado: 1,
        nome: this.utilizador.nome,
        apelido: this.utilizador.apelido,
        correio: this.utilizador.correio,
        passe: this.utilizador.passe,
        id_tipo: 0,
        numero_estudante: null,
        nome_empresa: null,
        cca: this.utilizador.cca,
        foto: "https://lh3.googleusercontent.com/-4yFaWmS7-Pg/X_xzGKwqwHI/AAAAAAAAAAY/L78mg1HQzvELjdvv5xiLqZT6keuBmoGSACMICGAYYCw/s83-c/foto_default.png",
        inscricao: null,
        cv: null,
        portfolio: null,
        facebook: null,
        instagram: null,
        github: null,
        discord: null,
        ano: ""
      }
      const dados = {
        utilizador: utilizador,
        empresa: null
      }
      try {
        this.$store.dispatch("registo", dados)
      }
      catch(error){
        alert("Tente novamente.")                                
      }
    },
    mostrar(){
      this.type==='password'?this.type='text':this.type='password';
    }
  },
  computed:{
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  }
};
</script>
<style>
.form-docente{width: 256px;}
.cca-cb{margin-left: 8px;}
.botao-criar-docente{height: 42px; width: calc(100% - 16px); outline: none; transition: color 0.4s ease-in-out;}
.botao-criar-docente:hover{color: #707070;}
.ajuste-mostrar-passe-docente{right: 18px;}
</style>
