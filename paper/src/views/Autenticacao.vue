<template>
  <div class="container-autenticacao-registo d-flex justify-content-center align-items-center">
    <div class="autenticacao animacao-opacidade-sombra-forte fundo-dd borda-fina borda-70 borda-r10 sombra-forte">
      <div class="container-formulario-autenticacao-registo">
        <form @submit.prevent="autenticacao">
          <svg id="logo-grande" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" xmlns:v="https://vecta.io/nano"><path d="M6.93 29v16H0V.71h6.93v2.35a9 9 0 0 1 1-.85A12.79 12.79 0 0 1 10.8.85 13.62 13.62 0 0 1 15.61 0 13.56 13.56 0 0 1 26 4.5 16.26 16.26 0 0 1 30.14 16 16.27 16.27 0 0 1 26 27.58a13.53 13.53 0 0 1-10.36 4.51 14.24 14.24 0 0 1-4.71-.74 10.39 10.39 0 0 1-3.07-1.53zM9 9.41a9.16 9.16 0 0 0-2.35 6.66A9.17 9.17 0 0 0 9 22.73a7.87 7.87 0 0 0 5.92 2.45 7.87 7.87 0 0 0 5.92-2.45 9.18 9.18 0 0 0 2.37-6.66 9.16 9.16 0 0 0-2.37-6.66A7.87 7.87 0 0 0 14.93 7 7.91 7.91 0 0 0 9 9.41zM58.33 30v-2.27a11.06 11.06 0 0 1-1 .81 13.94 13.94 0 0 1-2.9 1.29 14.63 14.63 0 0 1-15.16-3.49 15.12 15.12 0 0 1-4.18-11 15.12 15.12 0 0 1 4.18-11A13.8 13.8 0 0 1 49.64 0a14.24 14.24 0 0 1 4.71.74 10.76 10.76 0 0 1 3 1.43l.91.73V.68h6.93V30zm-2.08-8.3a8.52 8.52 0 0 0 2.35-6.4 8.52 8.52 0 0 0-2.35-6.36 8.68 8.68 0 0 0-11.86 0A8.5 8.5 0 0 0 42 15.3a8.52 8.52 0 0 0 2.35 6.36 8.67 8.67 0 0 0 11.9 0zM80.73 29v16H73.8V.71h6.93v2.35a9 9 0 0 1 1-.85A12.79 12.79 0 0 1 84.6.85 14.17 14.17 0 0 1 99.77 4.5 16.31 16.31 0 0 1 104 16a16.29 16.29 0 0 1-4.17 11.54 13.53 13.53 0 0 1-10.36 4.51 14.24 14.24 0 0 1-4.71-.74 10.31 10.31 0 0 1-3.1-1.53zm2.08-19.59a9.16 9.16 0 0 0-2.35 6.66 9.16 9.16 0 0 0 2.35 6.66 8.38 8.38 0 0 0 11.85 0A9.17 9.17 0 0 0 97 16.07a9.21 9.21 0 0 0-2.36-6.66 8.38 8.38 0 0 0-11.83 0zm57.69 5.64L118 19.38a8.05 8.05 0 0 0 3.16 3.38 8.66 8.66 0 0 0 4.52 1.24 8.11 8.11 0 0 0 4-1 6.34 6.34 0 0 0 2.32-2l.67-.95 6 3.11c-.08.18-.24.45-.43.78a13.47 13.47 0 0 1-1.45 1.82 15.09 15.09 0 0 1-2.43 2.24 14.49 14.49 0 0 1-3.78 1.82 15.67 15.67 0 0 1-5.08.82A14.89 14.89 0 0 1 110 16.36v-1a14.86 14.86 0 0 1 4.38-10.91c5.987-5.884 15.568-5.937 21.62-.12a15.06 15.06 0 0 1 4.5 10.72zm-15.22-8.4a8 8 0 0 0-8.22 7.48l15.55-3a7.47 7.47 0 0 0-7.33-4.48zM160 6.58c-2.92 0-5.07.6-6.45 1.82s-2.08 3.35-2.09 6.43V30h-6.93V.68h6.93v2.24C153.39 1 156.23 0 160 0z"/><defs/></svg>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5" for="correio">Correio eletrónico</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="email" name="correio"  v-model='autenticacao_utilizador.correio' autocomplete="off"><br>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="passe">Palavra-passe</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" :type="type" name="passe" v-model='autenticacao_utilizador.passe'>
          <div class="ver-helper d-flex justify-content-end sem-margens">
            <svg @click="mostrar" class="ver cursor-pointer sem-margens" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" xmlns:v="https://vecta.io/nano"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449S19.748 19 12.015 19C4.835 19 0 11.551 0 11.551S4.446 5 12.015 5C19.709 5 24 11.551 24 11.551zM17 12a5 5 0 1 0-10 0 5 5 0 1 0 10 0z"/><defs /></svg>
          </div>
          <label class="conteudo-checkbox d-flex justify-content-start align-items-center cursor-pointer cor-20 fonte-10 mukta-r sem-margens margem-t15">
            <input class="checkbox" type="checkbox" v-model="autenticacao_utilizador.manter_conectado">Manter conectado
            <span class="checkbox-marcado sem-margens"></span>
          </label>
          <button class="botao-autenticacao-registo fundo-aa borda-r5 cor-20 fonte-16 mukta-sb cursor-pointer margem-t15" type="submit">Entrar</button>
        </form>
        <div class="separador d-flex justify-content-start">
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
            <span class="texto-separador cor-80 fonte-10 mukta-el sem-margens margem-t7 margem-x5 padding-t8">ou</span>
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
        </div>
        <p class="link-autenticao-registo fonte-12 mukta-l sem-margens"><router-link :to="{name:'Registo'}">Criar um utilizador</router-link></p>
      </div>
    </div>
  </div>
</template>
<style>
/* Estilização específica a esta página: */
  .autenticacao {height: 420px; width: 320px;}
  .linha-separador {width: 110px;}
</style>
<script>
  export default {
    name:'Autenticacao',
    data(){
        return{
          autenticacao_utilizador:{
            correio: '',
            passe: '',
            manter_conectado: null
          },
          type: 'password'
        }
    },
    methods:{
      autenticacao(){
        const autenticacao = {
          correio: this.autenticacao_utilizador.correio,
          passe: this.autenticacao_utilizador.passe,
          manter_conectado: this.autenticacao_utilizador.manter_conectado
        }
        try {
          this.$store.dispatch('autenticacao', autenticacao)
          this.$router.push({name: 'Home'});
        }
        catch(error){
          alert(error)                                     
        }
      },
      mostrar(){
        this.type==='password'?this.type='text':this.type='password';
      }
    }
  }
</script>