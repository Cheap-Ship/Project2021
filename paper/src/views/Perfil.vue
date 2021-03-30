<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-visivel animacao-opacidade-sombra-ligeira d-flex">
      <div class="area-conteudo ajuste-f animacao-opacidade-sombra-ligeira d-flex justify-content-start fundo-f4 borda-r5 sombra-ligeira">    
          <div class="area-utilizador d-flex padding-all8">
            <div class="area-utilizador-perfilenotificacoes">
                <div class="area-perfil">
                  <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="perfil-conteudo">Perfil do utilizador</label>  
                  <div class="area-perfil-conteudo d-flex justify-content-between fundo-ff borda-fina borda-aa borda-r5" name="perfil-conteudo">
                    <div class="info-perfil-utilizador d-flex flex-wrap-start">
                      <div class="area-foto-perfil-utilizador">
                        <img :src="obterInfoUtilizador.foto" class="foto-perfil borda-grossa borda-70 borda-r5"/>
                      </div>
                      <div class="area-dados-perfil-utilizador d-flex flex-wrap align-content-between margem-y8">
                        <div class="nome-e-tipo-utilizador">
                          <p class="fonte-24 opensans-sb cor-20 sem-margens text-left">{{obterInfoUtilizador.nome + ' ' + obterInfoUtilizador.apelido}}</p>
                          <p class="fonte-14 mukta-l cor-40 sem-margens text-left">({{this.$store.getters.obterTipoUtilizadorePorId(obterInfoUtilizador.id_tipo)}})</p>
                        </div>
                        <div v-if="obterInfoUtilizador.id_tipo == 1" class="area-documentos">
                          <label class="d-flex justify-content-start fonte-16 mukta-m cor-20 sem-margens" for="documentos">Documentos</label>
                          <div class="documentos-utilizador fundo-f4 borda-r5" id="documentos">
                            <div class="opcao-documento d-flex flew-wrap align-items-center padding-all4">
                              <svg id="svg_documento" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="28px" viewBox="0 0 100 100"><path class="cls-1" d="M25.9,41.6H23.2v7.7h2.2a12.31,12.31,0,0,0,2-.2,3.82,3.82,0,0,0,1.6-.6,4.26,4.26,0,0,0,1.1-1.2,3.58,3.58,0,0,0,.4-1.9,3.24,3.24,0,0,0-1.3-2.9A5.6,5.6,0,0,0,25.9,41.6Z"/><path class="cls-1" d="M48.2,41.6H45.6V58.3h1.9a12.42,12.42,0,0,0,3.3-.4,8.18,8.18,0,0,0,2.8-1.4,7.72,7.72,0,0,0,1.9-2.7,10.75,10.75,0,0,0,.7-4.3c0-2.5-.7-4.5-2.2-5.8A7.94,7.94,0,0,0,48.2,41.6Z"/><path class="cls-1" d="M90,0H10A10,10,0,0,0,0,10V90a10,10,0,0,0,10,10H90a10,10,0,0,0,10-10V10A10,10,0,0,0,90,0ZM35.4,48.8a7.84,7.84,0,0,1-2.2,2.6A8.59,8.59,0,0,1,30,52.9a16,16,0,0,1-3.9.5H23.2v9.2H17.7V37.4h8.8a16.2,16.2,0,0,1,4,.5,8.45,8.45,0,0,1,3,1.5,6.34,6.34,0,0,1,1.9,2.4,8.05,8.05,0,0,1,.7,3.3A7,7,0,0,1,35.4,48.8Zm25.4,6.6a12.44,12.44,0,0,1-3,4.1,12.21,12.21,0,0,1-4.5,2.4,19.22,19.22,0,0,1-5.5.8H40.1V37.4h8.8a17.85,17.85,0,0,1,5.3.8,10.94,10.94,0,0,1,4.1,2.3A11.87,11.87,0,0,1,61,44.3a14.35,14.35,0,0,1,.9,5.3A12,12,0,0,1,60.8,55.4ZM82.3,41.6H71.8v6.7h9.6v4.2H71.8V62.6H66.3V37.4h16Z"/></svg>
                              <p class="fonte-12 mukta-r cor-40 sem-margens padding-l4">Currículo</p>
                            </div>
                            <div class="opcao-documento d-flex flew-wrap align-items-center padding-all4">
                              <svg id="svg_documento" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="28px" viewBox="0 0 100 100"><path class="cls-1" d="M25.9,41.6H23.2v7.7h2.2a12.31,12.31,0,0,0,2-.2,3.82,3.82,0,0,0,1.6-.6,4.26,4.26,0,0,0,1.1-1.2,3.58,3.58,0,0,0,.4-1.9,3.24,3.24,0,0,0-1.3-2.9A5.6,5.6,0,0,0,25.9,41.6Z"/><path class="cls-1" d="M48.2,41.6H45.6V58.3h1.9a12.42,12.42,0,0,0,3.3-.4,8.18,8.18,0,0,0,2.8-1.4,7.72,7.72,0,0,0,1.9-2.7,10.75,10.75,0,0,0,.7-4.3c0-2.5-.7-4.5-2.2-5.8A7.94,7.94,0,0,0,48.2,41.6Z"/><path class="cls-1" d="M90,0H10A10,10,0,0,0,0,10V90a10,10,0,0,0,10,10H90a10,10,0,0,0,10-10V10A10,10,0,0,0,90,0ZM35.4,48.8a7.84,7.84,0,0,1-2.2,2.6A8.59,8.59,0,0,1,30,52.9a16,16,0,0,1-3.9.5H23.2v9.2H17.7V37.4h8.8a16.2,16.2,0,0,1,4,.5,8.45,8.45,0,0,1,3,1.5,6.34,6.34,0,0,1,1.9,2.4,8.05,8.05,0,0,1,.7,3.3A7,7,0,0,1,35.4,48.8Zm25.4,6.6a12.44,12.44,0,0,1-3,4.1,12.21,12.21,0,0,1-4.5,2.4,19.22,19.22,0,0,1-5.5.8H40.1V37.4h8.8a17.85,17.85,0,0,1,5.3.8,10.94,10.94,0,0,1,4.1,2.3A11.87,11.87,0,0,1,61,44.3a14.35,14.35,0,0,1,.9,5.3A12,12,0,0,1,60.8,55.4ZM82.3,41.6H71.8v6.7h9.6v4.2H71.8V62.6H66.3V37.4h16Z"/></svg>
                              <p class="fonte-12 mukta-r cor-40 sem-margens padding-l4">Documentos de inscrição</p>
                            </div>
                          </div>
                        </div>
                        <div class="area-redes-sociais-e-portfolio">
                          <label class="d-flex justify-content-start fonte-16 mukta-m cor-20 sem-margens" for="botoes-rsep">Redes sociais e Portfólio</label>
                          <div class="botoes-redes-sociais-e-portfolio d-flex fundo-f4 borda-r5" id="botoes-rsep">
                            <a href=""><div class="botao-email d-flex justify-content-center align-items-center">
                            <svg id="svg_email" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20px" height="19px" viewBox="0 0 20 19"><path class="cls-1" d="M10,5" transform="translate(0 -0.5)"/><path class="cls-2" d="M10,9.4,0,6.3V4.5L10,7.6,20,4.5v-2a2,2,0,0,0-2-2H2a2,2,0,0,0-2,2v15a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V6.3Z" transform="translate(0 -0.5)"/></svg>  
                            </div></a>
                            <a href=""><div class="botao-facebook d-flex justify-content-center align-items-center">
                            <svg id="svg_facebook" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20"><title>facebook</title><path id="iconfinder_icon-02_2515845" data-name="iconfinder icon-02 2515845" d="M20,4.68a6.36,6.36,0,0,0-.1-1.07,4.15,4.15,0,0,0-1.24-2.36,4.12,4.12,0,0,0-1.81-1A7.81,7.81,0,0,0,14.9,0H5.1c-.37,0-.73,0-1.1,0A5.32,5.32,0,0,0,2.82.33,4.24,4.24,0,0,0,.22,3.17,7.18,7.18,0,0,0,0,5.07l0,9.84H0a10.05,10.05,0,0,0,.09,1.34A4.84,4.84,0,0,0,.5,17.59a4.36,4.36,0,0,0,1.2,1.46,3.68,3.68,0,0,0,1.2.65,6.33,6.33,0,0,0,2,.29c.42,0,.84,0,1.26,0h4.52V13.32H8.41V10.64h2.25V8.71a3.25,3.25,0,0,1,3-3.45H16V7.69H14.3a1.11,1.11,0,0,0-.86.84v2.06h2.48l-.28,2.57H13.4V20l1.89,0a6.78,6.78,0,0,0,1.2-.13,4.07,4.07,0,0,0,2-1,4.18,4.18,0,0,0,1.33-2.22A7.87,7.87,0,0,0,20,14.91V14.8C20,14.75,20,4.81,20,4.68Z" transform="translate(0 0)"/></svg>
                            </div></a>
                            <a href=""><div class="botao-instagram d-flex justify-content-center align-items-center">
                            <svg id="svg_instagram" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </div></a>
                            <a href=""><div class="botao-github d-flex justify-content-center align-items-center">
                            <svg id="svg_github" data-name="Layer 1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.51 20"><path id="Octicons-mark-github" class="cls-1" d="M10.25,0A10.25,10.25,0,0,0,7,20c.51.09.7-.22.7-.49s0-1,0-1.91c-2.58.48-3.25-.63-3.45-1.2a3.79,3.79,0,0,0-1-1.45c-.36-.19-.87-.67,0-.68A2.06,2.06,0,0,1,4.77,15.3a2.19,2.19,0,0,0,3,.85h0a2.2,2.2,0,0,1,.66-1.38c-2.28-.25-4.67-1.14-4.67-5.06A4,4,0,0,1,4.79,7a3.71,3.71,0,0,1,.1-2.72s.86-.27,2.82,1a9.71,9.71,0,0,1,5.13,0c2-1.33,2.82-1,2.82-1A3.71,3.71,0,0,1,15.76,7a3.94,3.94,0,0,1,1,2.75c0,3.94-2.4,4.81-4.68,5.07a2.39,2.39,0,0,1,.69,1.9c0,1.37,0,2.47,0,2.82s.19.59.7.48A10.26,10.26,0,0,0,10.25,0Z" transform="translate(0 0)"/></svg>  
                            </div></a>
                            <a href=""><div class="botao-discord d-flex justify-content-center align-items-center">
                            <svg id="svg_discord" data-name="Layer 1" width="17.5px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.5 20"><path d="M8.33,8.42a1.11,1.11,0,0,0,0,2.22,1.07,1.07,0,0,0,1-1.11A1.06,1.06,0,0,0,8.33,8.42Zm3.65,0a1.11,1.11,0,1,0,1,1.11A1.07,1.07,0,0,0,12,8.42Z" transform="translate(-1.39 -0.03)"/><path d="M16.84,0H3.44a2.05,2.05,0,0,0-2,2.06V15.61a2.05,2.05,0,0,0,2.05,2.06H14.78l-.53-1.85L15.53,17l1.21,1.12L18.89,20V2.09A2.05,2.05,0,0,0,16.84,0ZM13,13.09s-.36-.43-.66-.81a3.16,3.16,0,0,0,1.81-1.19,5.72,5.72,0,0,1-1.15.59,6.58,6.58,0,0,1-1.45.43,7,7,0,0,1-2.59,0,8.39,8.39,0,0,1-1.47-.43,5.86,5.86,0,0,1-.73-.34l-.09-.05,0,0-.28-.17a3.11,3.11,0,0,0,1.75,1.18l-.67.83a3.63,3.63,0,0,1-3-1.52A13.39,13.39,0,0,1,5.8,5.74a5,5,0,0,1,2.81-1l.1.12A6.75,6.75,0,0,0,6.08,6.12s.22-.12.59-.29A7.51,7.51,0,0,1,8.94,5.2l.17,0a8.46,8.46,0,0,1,2,0,8.15,8.15,0,0,1,3,1,6.66,6.66,0,0,0-2.49-1.27l.14-.16a5,5,0,0,1,2.81,1A13.39,13.39,0,0,1,16,11.57,3.66,3.66,0,0,1,13,13.09Z" transform="translate(-1.39 -0.03)"/></svg>
                            </div></a>
                            <a href="" class="link-portfolio fonte-16 mukta-m cor-20"><div class="botao-portfolio d-flex justify-content-center align-items-center">Portfólio</div></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="area-desconectar">
                      <router-link @click.native="desconectar" :to="{name:'Autenticacao'}" class="texto-desconectar fonte-16 opensans-sb"><div class="botao-desconectar d-flex align-items-center">Desconectar</div></router-link>
                    </div>
                  </div>
                </div>
              <div class="area-notificacoes">
                <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="notificacoes-conteudo">Notificações</label>
                <div class="area-notificacoes-conteudo fundo-ff borda-fina borda-aa borda-r5" name="notificacoes-conteudo">
                  <table class="tabela borda-grossa borda-70 borda-r5 cor-20">
                    <tr>
                      <th>Data e Hora</th>
                      <th>Tema</th>
                      <th>Mensagem</th>
                    </tr>
                    <tr v-for="(notificacao) in obterTabelaNotificacoes" :key="notificacao.id">              
                      <td>{{notificacao.data_hora}}</td>
                      <td>{{notificacao.tema}}</td>
                      <td>{{notificacao.texto}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="area-definicoes">
              <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="definicoes-conteudo">Definições</label>
              <div class="area-definicoes-conteudo fundo-ff borda-fina borda-aa borda-r5" name="definicoes-conteudo">
                <form @submit.prevent="editarPerfil" @reset="anular">
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Alterar a palavra passe</label>
                  <!-- Input para inserir a atual palavra-passe -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="password" v-model="dados.passe_atual" placeholder="Palavra-passe atual">
                  <!-- Inputs para inserir a nova palavra-passe -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="password" v-model="dados.passe_nova" placeholder="Nova palavra-passe">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="password" v-model="confirmar_passe_nova" placeholder="Repita a nova palavra-passe">
                  <!-- -->
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Redes sociais</label>
                  <!-- Input para inserir o link do Facebook do utilizador -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="link" v-model="dados.link_facebook" placeholder="Insira o link para o seu Facebook">
                  <!-- Input para inserir o link do GitHub do utilizador -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="link" v-model="dados.link_github" placeholder="Insira o link para o seu GitHub">
                  <!-- Input para inserir o link do Instagram do utilizador -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="link" v-model="dados.link_instagram" placeholder="Insira o link para o seu Instagram">
                  <!-- Input para inserir o nome de utilizador no Discord -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="text" v-model="dados.id_discord" placeholder="Insira o nome de utilizador Discord">
                  <!-- -->
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Portólio do utilizador</label>
                  <!-- Input para inserir o link do portfólio -->
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="link" v-model="dados.link_portfolio" placeholder="Insira o link do seu portfólio">
                  <!--<label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Currículo do utilizador</label>
                  <button type="button" class="botao-adicionar-cv">Adicione um ficheiro</button> Esta opção será ativada mais tarde-->
                  <div class="d-flex flex-wrap align-content-end">
                    <button type="submit" class="botao-guardar fundo-40 fonte-16 opensans-sb cor-ee borda-fina borda-20 borda-r5">Guardar</button>
                    <button type="reset" class="botao-anular fundo-dd fonte-16 opensans-sb cor-20 borda-fina borda-aa borda-r5">Anular</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style>
.area-utilizador{width: 100%; height: auto;}
.area-utilizador-perfilenotificacoes{width: calc(100% - 256px); height: auto; margin-right: 16px;}
.area-perfil{width: 100%; height: 50%;}
.area-notificacoes{width: 100%; height: 50%;}
.area-definicoes{width: 256px; height: auto;}
.area-perfil-conteudo{height: calc(100% - 36px);}
.area-notificacoes-conteudo{height: calc(100% - 36px); padding: 8px 8px;}
.area-definicoes-conteudo{height: calc(100% - 36px);}
.area-label{text-align: left; width: 100%;}
.ajuste-f{min-height: 644px;}
.info-perfil-utilizador{height: 100%;}
.area-foto-perfil-utilizador{height: 100%; padding: 8px 8px;}
.foto-perfil{height:100% ;}
.area-dados-perfil-utilizador{padding: 2px 2px; width: 338px;}
.nome-e-tipo-utilizador, .area-documentos, .area-redes-sociais-e-portfolio{width: 100%;}
.documentos-utilizador{width: 200px;}
#svg_documento{fill: #404040}
.opcao-documento{cursor: pointer;}
.opcao-documento #svg_documento {transition: fill 0.2s ease-in-out;}
.opcao-documento p {transition: color 0.2s ease-in-out;}
.opcao-documento:hover #svg_documento {fill: #606060;}
.opcao-documento:hover p {color: #606060}
.botoes-redes-sociais-e-portfolio{height: 50px; width: auto;}
.botao-email, .botao-facebook, .botao-instagram, .botao-github, .botao-discord{width: 42px; height: 42px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1); margin: 4px 4px; transition: background-color 0.4s ease-in-out;}
.botao-email:hover{background-color: #ea4335;}
#svg_email{fill: #ea4335; transition: fill 0.4s ease-in-out;}
.botao-facebook:hover{background-color: #3b5998;}
#svg_facebook{fill:  #3b5998; transition: fill 0.4s ease-in-out;}
.botao-instagram:hover{background-color: #dd2a7b;}
#svg_instagram{fill: #dd2a7b; transition: fill 0.4s ease-in-out;}
.botao-github:hover{background-color: #202020;}
#svg_github{fill: #202020; transition: fill 0.4s ease-in-out;}
.botao-discord:hover{background-color: #7289da;}
#svg_discord{fill: #7289da; transition: fill 0.4s ease-in-out;}
.botao-email:hover > #svg_email, .botao-facebook:hover > #svg_facebook, .botao-instagram:hover > #svg_instagram, .botao-github:hover > #svg_github, .botao-discord:hover > #svg_discord {fill: #ffffff;}
.botao-portfolio{height: 42px; background: #ffffff; border-radius: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1); margin: 4px 4px; padding: 0px 8px;}
.link-portfolio{text-decoration: none;}
.botao-desconectar{height: 42px; background-color: #e33131; margin: 8px 8px 0px 0px; padding: 0px 8px; border-radius: 5px; border: 0.5px solid #ffdcdc;}
a.texto-desconectar{text-decoration: none; color: #ffdcdc; transition: color 0.2s ease-in-out;}
a.texto-desconectar:hover{color: #ff8a8a;}
.botao-guardar, .botao-anular{height: 42px; padding: 0px 8px; transition: color 0.4s ease-in-out; margin: 8px 4px;}
.botao-guardar:hover, .botao-anular:hover{color:#707070;}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Perfil",
  data(){
    return {
      confirmar_passe_nova: "",
      passe_atual: "",
      dados: {
        passe_nova: "",
        link_facebook: "",
        link_github: "",
        link_instagram: "",
        id_discord: "",
        link_portfolio: ""
      }        
    }
  },
  methods:{
    desconectar(){
      this.$store.dispatch("desconectar")
    },
    anular(){
      this.passe_atual = "",
      this.dados =  {
        passe_nova: "",
        link_facebook: "",
        link_github: "",
        link_instagram: "",
        id_discord: "",
        link_portfolio: ""
      }
    },
    editarPerfil(){
      const dados = {
        id_utilizador: this.$store.getters.obterUtilizadorAutenticado.id_utilizador,
        passe_nova: this.dados.passe_nova,
        link_facebook: this.dados.link_facebook,
        link_github: this.dados.dadoslink_github,
        link_instagram: this.dados.link_instagram,
        id_discord: this.dados.id_discord,
        link_portfolio: this.dados.link_portfolio
      }
      if (this.dados.passe_nova == this.$data.confirmar_passe_nova && this.$data.dados.passe_atual == this.obterInfoUtilizador.passe){
        try {
          this.$store.dispatch("editarPerfil", dados);
          this.$router.go();
        } catch (error){
          alert (error)
        }
      } else {
        alert ("Tente novamente!")
      }
    }
  },
  components: {
    SideBar
  },
  computed:{
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    },
    obterTabelaNotificacoes() {
      const table = this.$store.getters.obterTabelaNotificacoes
      return table;
    }
  }
};
</script>
