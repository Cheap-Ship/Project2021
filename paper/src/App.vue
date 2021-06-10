<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
/* 
  De modo a reduzir a quantidade de CSS escrito, tudo o que for escrito no
  style da App.vue é comum a toda a plataforma. Desta forma nenhum outro ficheiro
  do tipo .vue tem o style definido como scoped, visto que maioria da estilização
  provém deste mesmo ficheiro.

  Índice/Organização:
    - Fundo das páginas;
    - Margens;
    - Paddings;
    - Paleta de cores;
    - Fontes de texto e tamanhos;
    - Larguras;
    - Bordas;
    - Sombras;
    - Checkboxes;
    - Selects e Inputs;
    - Botões;
    - Animações e transições;
    - Logo;
    - Áreas de conteúdo;
    - Tabelas;
    - Scrollbar;
    - Outros.

    /!\ Tudo que tenha router-link tem de ser estilizado atravês do nome da classe + a /!\
*/
/* Fundo das páginas */ 
  html, body, #app, .container-autenticacao, .container-registo, .view {
    height: 100%; 
    background-color: #e7e7e7; 
    text-align: center; 
    min-height: 600px;
  }
/* Margens */
  .sem-margens {margin: 0px;}
  .margem-l5 {margin-left: 5px;}
  .margem-l8 {margin-left: 8px;}
  .margem-l16 {margin-left: 16px;}
  .margem-l32 {margin-left: 32px;}
  .margem-t5 {margin-top: 5px;}
  .margem-t7 {margin-top: 7px;}
  .margem-t15 {margin-top: 15px;}
  .margem-t32 {margin-top: 32px;}
  .margem-b10 {margin-bottom: 10px;}
  .margem-b20 {margin-bottom: 20px;}
  .margem-b26 {margin-bottom: 26px;}
  .margem-b30 {margin-bottom: 30px;}
  .margem-x5 {margin: 0px 5px;}
  .margem-x10 {margin: 0px 10px;}
  .margem-y8 {margin: 8px 0px;}
  .margem-all4 {margin: 4px;}
  .margem-all8 {margin: 8px;}
  .margem-all50 {margin: 50px;}
/* Paddings */
  .padding-t8 {padding-top: 8px;}
  .padding-l4 {padding-left: 4px;}
  .padding-l8 {padding-left: 8px;}
  .padding-all4 {padding: 4px 4px;}
  .padding-all8 {padding: 8px 8px;}
  .padding-all12 {padding: 12px 12px;}
  .sem-padding {padding: 0px !important;}
/* Paleta de cores */
  /* Fundos */ 
  .fundo-30 {background-color: #303030;}
  .fundo-40 {background-color: #404040;}
  .fundo-80 {background-color: #808080;}
  .fundo-aa {background-color: #aaaaaa;}
  .fundo-cc {background-color: #cccccc;}
  .fundo-dd {background-color: #dddddd;}
  .fundo-f4 {background-color: #f4f4f4;}
  .fundo-fa {background-color: #fafafa;}
  .fundo-ff {background-color: #ffffff;}
  .fundo-004666 {background-color: #004666;}
  .fundo-0084c0 {background-color: #0084c0;}
  .fundo-b4ddf0 {background-color: #b4ddf0;}
  .fundo-e4f7ff {background-color: #e4f7ff;}
  .fundo-6eea37 {background-color: #6eea37;}
  .fundo-ffb300 {background-color: #ffb300;}
  .fundo-e33131 {background-color: #e33131;}
  /* Textos e outros */
  .cor-20 {color: #202020;}
  .cor-40 {color: #404040;}
  .cor-60 {color: #606060;}
  .cor-80 {color: #808080;}
  .cor-ee {color: #eeeeee;}
  .cor-004666 {color: #004666;}
  .cor-3586aa {color: #3586aa;} /* Nova cor */
  .cor-0084c0 {color: #0084c0;}
  .cor-e33131 {color: #e33131;}
  .cor-ff8a8a {color: #ff8a8a;}
  .cor-ffdcdc {color: #ffdcdc;}
/* Fontes de texto e tamanhos */
  /* Fontes */
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600&display=swap');
  .mukta-el {font-family: 'Mukta', sans-serif; font-weight: 200;}
  .mukta-l {font-family: 'Mukta', sans-serif; font-weight: 300;}
  .mukta-r {font-family: 'Mukta', sans-serif; font-weight: 400;}
  .mukta-m {font-family: 'Mukta', sans-serif; font-weight: 500;}
  .mukta-sb {font-family: 'Mukta', sans-serif; font-weight: 600;}
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
  .opensans-l {font-family: 'Open Sans', sans-serif; font-weight: 300;}
  .opensans-r {font-family: 'Open Sans', sans-serif; font-weight: 400;}
  .opensans-sb {font-family: 'Open Sans', sans-serif; font-weight: 600;}
  /* Tamanhos */
  .fonte-10 {font-size: 10px;}
  .fonte-12 {font-size: 12px;}
  .fonte-14 {font-size: 14px;}
  .fonte-16 {font-size: 16px;}
  .fonte-18 {font-size: 18px;}
  .fonte-24 {font-size: 24px;}
  /* Alinhamento */
  .align-left {text-align: left;}
  /* Bold */
  .texto-bold {font-weight: 500;}
  /* Height */
  .height-2 {height: 2px !important;}
  .height-42 {height: 42px !important;}
  .height-165 {height: 165px !important;}
  /* Placeholder */
  ::placeholder {font-size: 12px;}
/* Larguras */
  .width-25 {width: 25%;}
  .width-30 {width: 30%;}
  .width-35 {width: 35%;}
  .width-42 {width: 42%;}
  .width-45 {width: 45%;}
  .width-48 {width: 48%;}
  .width-50 {width: 50%;}
  .width-55 {width: 55%;}
  .width-100 {width: 100% !important;}
/* Bordas */
  /* Estilo e espessura*/ 
  .borda-fina {border: 0.5px solid;}
  .borda-grossa {border: 1px solid;}
  /* Cor */
  .borda-20 {border-color: #202020;}
  .borda-70 {border-color: #707070;}
  .borda-aa {border-color: #aaaaaa;}
  .borda-bb {border-color: #bbbbbb;}
  .borda-004666 {border-color: #004666;}
  /* Raio */
  .borda-r5 {border-radius: 5px;}
  .borda-r10 {border-radius: 10px;}
/* Sombras */
  .sombra-forte {box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}
  .sombra-ligeira {box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);}
/* Checkboxes */
  .checkbox {width: 20px; height: 20px;}
  .conteudo-checkbox {display: block; position: relative; padding-left: 25px; user-select: none; height: 20px;}
  .conteudo-checkbox input {position: absolute; opacity: 0; height: 0; width: 0;}
  .checkbox-marcado {position: absolute; top: 0; left: 0; height: 20px; width: 20px; border: 0.5px solid #aaaaaa; border-radius: 5px; background: #ffffff;}
  .checkbox-marcado:after {content: ''; position: absolute; display: none;}
  .conteudo-checkbox input:checked ~ .checkbox-marcado:after {display: block;}
  .conteudo-checkbox .checkbox-marcado:after {top: 5%; left: 5%; width: 90%; height: 90%; background: #aaaaaa; border-radius: 3px;}
/* Selects e Inputs */
  select {background: url(./assets/selecionar.svg) no-repeat right; appearance: none; background-position-x: 218px;}
  select, input[type=email], input[type=text], input[type=password], input[type=number], input[type=link] 
  {height: 42px; width: 240px; border: 0.5px solid #aaaaaa; outline: none; padding-left: 10px;}
  /* Efeito da borda ao dar focus ou hover */
  select:focus, input[type=email]:focus, input[type=text]:focus, input[type=password]:focus,
  input[type=number]:focus, input[type=link]:focus, select:hover, input[type=email]:hover, 
  input[type=text]:hover, input[type=password]:hover, input[type=number]:hover, input[type=link]:hover
  {background-color: #ffffff; border: 0.5px solid #0084c0 !important;}
  /* Remover setas do input[type=number] */
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {appearance: none; margin: 0;}
/* Botões */
  /* Para a página de autenticação e de registo */
  .botao-autenticacao-registo {height: 42px; width: 100%; border: none; outline: none;}
  .botao-autenticacao-registo a {color: #202020; text-decoration: none;}
  .botao-autenticacao-registo:focus, .botao-autenticacao-registo:hover {background-color: #0084c0;}
/* Animações */
  .animacao-opacidade-sombra-forte {animation: 0.6s ease-in-out 0s 1 aosf;}
  @keyframes aosf {
    from {opacity: 0; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}
    to {opacity: 1; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}
  }
  .animacao-opacidade-sombra-ligeira {animation: 1s ease-in-out 0s 1 aosl;}
  @keyframes aosl {
    0% {opacity: 0; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);}
    60% {opacity: 1;}
    100% {box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);}
  }
  .will-change {
    will-change: opacity;
  }
/* Logo */
  #logo-grande {fill: #202020; height: 45px; width: 160px; margin: 35px 0px;}
  #logo-barra-navegacao {fill: #cccccc; height: 30px; width: 108px; margin: 20px 0px;}
/* Áreas de conteúdo */
  .area-visivel {width: 100%; min-height: 600px;} /* Necessário em qualquer página */
  /* Caso não tenha navegação superior: */
  .area-conteudo {width: 100%; margin: 70px 40px 40px 40px;}
  /* Caso tenha navegação superior (usar também o anterior, sendo que os dois abaixo ficam dentro desse div): */
  .navegador-superior {height: 50px;}
  .area-conteudo-com-navegador {height: calc(100% - 70px);}
  /* Para as tabelas: */
  .area-tabela{width: 100%; padding: 8px 8px;}
/* Tabelas */
  .tabela {width: 100%; border-radius: 5px; border-collapse: collapse; overflow: hidden; box-shadow: 0px 0px 0.5px 0.5px rgba(20, 20, 20, 0.5)}
  th {background-color: #d2d2d2; font-family: Mukta Light; font-size: 14px; border: 1px solid #707070; height: 36px;}
  td {background-color: #f4f4f4; font-family: Open Sans Light; font-size: 12px; border: 1px solid #707070; height: 36px;}
/* Scrollbar */
  ::-webkit-scrollbar {width: 10px;}
  ::-webkit-scrollbar-track {background: #eeeeee; border-radius: 5px; padding-right: 3px;}
  ::-webkit-scrollbar-thumb {background: rgba(128, 128, 128, 0.5); border-radius: 5px; border: 2px solid #eeeeee;}
  ::-webkit-scrollbar-thumb:hover {background: rgba(112, 112, 112, 0.5);}
/* Outros */
  /* {outline: none;}*/
  button:focus {outline: none;}
  .cursor-pointer {cursor: pointer;}
  /* Container para o formulário de autenticação/registo */
  .container-formulario-autenticacao-registo {width: 240px; margin: 0px 40px;}
  /* Ícone de visualização da palavra-passe */
  .ver-helper {height: 0px;}
  .ver {height: 16px; fill: #aaaaaa; position: relative; bottom: 29px; right: 10px;}
  .ver:hover {fill: #909090;}
  /* Link de Autenticação -> Registo e vice-versa */
  .link-autenticao-registo a {color: #606060;}
  .link-autenticao-registo a:hover {color: #0084c0;}
</style>