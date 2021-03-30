<template>
  <div class="container-autenticacao-registo d-flex justify-content-center align-items-center">
    <div class="registo animacao-opacidade-sombra-forte fundo-dd borda-fina borda-70 borda-r10 sombra-forte">
      <div class="container-formulario-autenticacao-registo">
        <form @submit.prevent="registo">
          <svg id="logo-grande" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45"><path id="Caminho_1" data-name="Caminho 1" class="cls-1" d="M6.93,29V45H0V.71H6.93V3.06a9,9,0,0,1,1-.85A12.79,12.79,0,0,1,10.8.85,13.62,13.62,0,0,1,15.61,0,13.56,13.56,0,0,1,26,4.5,16.26,16.26,0,0,1,30.14,16,16.27,16.27,0,0,1,26,27.58a13.53,13.53,0,0,1-10.36,4.51,14.24,14.24,0,0,1-4.71-.74,10.39,10.39,0,0,1-3.07-1.53ZM9,9.41a9.16,9.16,0,0,0-2.35,6.66A9.17,9.17,0,0,0,9,22.73a7.87,7.87,0,0,0,5.92,2.45,7.87,7.87,0,0,0,5.92-2.45,9.18,9.18,0,0,0,2.37-6.66,9.16,9.16,0,0,0-2.37-6.66A7.87,7.87,0,0,0,14.93,7,7.91,7.91,0,0,0,9,9.41Z" transform="translate(0 0)"/><path id="Caminho_2" data-name="Caminho 2" class="cls-1" d="M58.33,30V27.73a11.06,11.06,0,0,1-1,.81,13.94,13.94,0,0,1-2.9,1.29,14.63,14.63,0,0,1-15.16-3.49,15.12,15.12,0,0,1-4.18-11,15.12,15.12,0,0,1,4.18-11A13.8,13.8,0,0,1,49.64,0a14.24,14.24,0,0,1,4.71.74,10.76,10.76,0,0,1,3,1.43l.91.73V.68h6.93V30Zm-2.08-8.3a8.52,8.52,0,0,0,2.35-6.4,8.52,8.52,0,0,0-2.35-6.36,8.68,8.68,0,0,0-11.86,0A8.5,8.5,0,0,0,42,15.3a8.52,8.52,0,0,0,2.35,6.36,8.67,8.67,0,0,0,11.9,0Z" transform="translate(0 0)"/><path id="Caminho_3" data-name="Caminho 3" class="cls-1" d="M80.73,29V45H73.8V.71h6.93V3.06a9,9,0,0,1,1-.85A12.79,12.79,0,0,1,84.6.85,14.17,14.17,0,0,1,99.77,4.5,16.31,16.31,0,0,1,104,16a16.29,16.29,0,0,1-4.17,11.54,13.53,13.53,0,0,1-10.36,4.51,14.24,14.24,0,0,1-4.71-.74,10.31,10.31,0,0,1-3.1-1.53ZM82.81,9.41a9.16,9.16,0,0,0-2.35,6.66,9.16,9.16,0,0,0,2.35,6.66,8.38,8.38,0,0,0,11.85,0A9.17,9.17,0,0,0,97,16.07a9.21,9.21,0,0,0-2.36-6.66A8.38,8.38,0,0,0,82.81,9.41Z" transform="translate(0 0)"/><path id="Caminho_4" data-name="Caminho 4" class="cls-1" d="M140.5,15.05,118,19.38a8.05,8.05,0,0,0,3.16,3.38A8.66,8.66,0,0,0,125.68,24a8.11,8.11,0,0,0,4-1A6.34,6.34,0,0,0,132,21l.67-.95,6,3.11c-.08.18-.24.45-.43.78a13.47,13.47,0,0,1-1.45,1.82A15.09,15.09,0,0,1,134.36,28a14.49,14.49,0,0,1-3.78,1.82,15.67,15.67,0,0,1-5.08.82A14.89,14.89,0,0,1,110,16.36c0-.34,0-.67,0-1a14.86,14.86,0,0,1,4.38-10.91A15.51,15.51,0,0,1,136,4.33,15.06,15.06,0,0,1,140.5,15.05Zm-15.22-8.4a8,8,0,0,0-8.22,7.48l15.55-3A7.47,7.47,0,0,0,125.28,6.65Z" transform="translate(0 0)"/><path id="Caminho_5" data-name="Caminho 5" class="cls-1" d="M160,6.58c-2.92,0-5.07.6-6.45,1.82s-2.08,3.35-2.09,6.43V30h-6.93V.68h6.93V2.92C153.39,1,156.23,0,160,0Z" transform="translate(0 0)"/></svg>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5" for="nome">Nome</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" name="nome" v-model='utilizador.nome' required="required" autocomplete="off" pattern="[^0-9]*"><br>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="apelido">Apelido</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" name="apelido" v-model='utilizador.apelido' required="required" autocomplete="off" pattern="[^0-9]*"><br>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="correio-eletronico">Correio eletrónico</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" name="correio-eletronico" v-model='utilizador.correio' required="required" autocomplete="off"><br>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="palavra-passe">Palavra-passe</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" :type="type" name="palavra-passe" v-model='utilizador.passe' required="required">
          <div class="ver-helper d-flex justify-content-end sem-margens">
          <svg @click="mostrar" class="ver cursor-pointer sem-margens" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"/></svg>
          </div>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="tipo-utilizador">Tipo de utilizador</label>
          <b-select class="b-selecionar-tipo-utilizador" name="tipo-utilizador" v-model="utilizador.tipo_utilizador" :options="$store.getters.obterTipoUtilizadores" @change="clear" required="required"></b-select>
          <!-- -->
          <div v-if="utilizador.tipo_utilizador==2">
            <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="numero-estudante">Dados da empresa</label>
            <div class="preencher-dados-empresa d-flex justify-content-center align-items-center cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" v-b-modal.dados-empresa>Clique para preencher os dados</div>
          </div>
          <div v-else>
            <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="numero-estudante">Número do estudante</label>
            <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="number" minlength="1" maxlength="8" name="numero-estudante" v-model.number='utilizador.numero_estudante' required="required" autocomplete="off">
          </div>    
          <!-- Caso seja selecionado "Entidade Externa", em vez de um input, teremos um botão para ativar uma modal com 4 inputs referentes a empresa da entidade. -->
          <button class="botao-autenticacao-registo fundo-aa borda-r5 cor-20 fonte-16 mukta-sb cursor-pointer margem-t15" type="submit">Criar utilizador</button>
        </form>
        <div class="separador d-flex justify-content-start">
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
            <span class="texto-separador cor-80 fonte-10 mukta-el sem-margens margem-t7 margem-x5 padding-t8">ou</span>
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
        </div>
        <p class="link-autenticao-registo fonte-12 mukta-l sem-margens"><router-link :to="{name: 'Autenticacao'}">Retornar</router-link></p>
      </div>
    </div>
    <!-- Modal para introduzir dados da empresa -->
    <b-modal id="dados-empresa" hide-header class="fundo-aa">
      <form action="">
        <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens" for="">Nome da empresa</label>
        <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" v-model="utilizador.nome_empresa" required="required" autocomplete="off"><br>
        <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens" for="">Correio eletrónico da empresa</label>
        <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="email" v-model="utilizador.correio_empresa" required="required" autocomplete="off"><br>
        <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens" for="">Morada Empresa</label>
        <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" v-model="utilizador.morada_empresa" required="required" autocomplete="off"><br>
        <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens" for="">Website Empresa</label>
        <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="link" v-model="utilizador.website_empresa" required="required" autocomplete="off"><br>
      </form>
    </b-modal>
  </div>
</template>
<style>
/* Estilização específica a esta página: */
  .registo {height: 673px; width: 320px;}
  .b-selecionar-tipo-utilizador {background: url(../assets/selecionar.svg) no-repeat right; appearance: none; background-position-x: 218px; height: 42px; width: 240px; border: 0.5px solid #aaaaaa; outline: none; padding-left: 10px; background-color: #fafafa; color: #606060; font-family: opensans-light; font-size: 12px; border-radius: 5px; margin: 0px 0px; outline: none; box-shadow: none !important;}
  .preencher-dados-empresa {height: 42px; width: 100%; border: 0.5px solid #aaaaaa; outline: none;}
  .preencher-dados-empresa:focus, .preencher-dados-empresa:hover{color: #0084c0; border: 0.5px solid #0084c0;}
  #dados-empresa___BV_modal_content_ {background-color: #dddddd; border-radius: 10px; width: 320px;}
  .modal-dialog {width: 320px;}
</style>
<script>
export default {
  name:'Registo',
    data() {
        return {
          utilizador: {
            nome: '',
            apelido: '',
            correio: '',
            passe: '',
            tipo_utilizador: null,
            numero_estudante: null,
            nome_empresa: null,
            correio_empresa: null,
            morada_empresa: null,
            website_empresa: null
          },
          type: 'password'
        }
    },
    methods: {
      registo() {
        const utilizador = {
          id_utilizador: this.$store.getters.proximoIDUtilizador,
          id_estado: 0,
          nome: this.utilizador.nome,
          apelido: this.utilizador.apelido,
          correio: this.utilizador.correio,
          passe: this.utilizador.passe,
          id_tipo: this.utilizador.tipo_utilizador,
          numero_estudante: this.utilizador.numero_estudante,
          nome_empresa: this.utilizador.nome_empresa,
          cca: false,
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
        const empresa = this.utilizador.tipo_utilizador == 2 ? {
          id_empresa: this.$store.getters.proximoIDEmpresa,
          nome: this.utilizador.nome_empresa,
          correio: this.utilizador.correio_empresa,
          morada: this.utilizador.morada_empresa,
          website: this.utilizador.website_empresa,
        } : null;
        const dados = {
          utilizador: utilizador,
          empresa: empresa
        }
        try {
          this.$store.dispatch("registo", dados)
          this.$router.push({name: "Autenticacao"});
        }
        catch(error) {
          alert(error)                                     
        }
      },
      mostrar() {
        this.type==="password"?this.type="text":this.type="password";
      }
    }
}
</script>
