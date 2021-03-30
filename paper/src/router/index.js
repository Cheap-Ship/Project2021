import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Autenticacao from "../views/Autenticacao.vue";
import Registo from "../views/Registo.vue";
import Propostas from "../views/Propostas.vue";
import Gestao from "../views/Gestao.vue";
import Agenda from "../views/Agenda.vue";
import Perfil from "../views/Perfil.vue";
import GerirPropostas from "../views/propostas/GestaoPropostas.vue";
import CriarProposta from "../views/propostas/CriarProposta.vue";
import Aprovacoes from "../views/gestao/Aprovacoes.vue";
import Utilizadores from "../views/gestao/Utilizadores.vue";
import Inscricoes from "../views/gestao/Inscricoes.vue";
import AdicionarDocentes from "../views/gestao/AdicionarDocentes.vue";
import Erro from "../views/Erro.vue"
import Store from "../store";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      requerAutenticacao: true,
      redirecionarUtilizadorAtivo: true
    }
  },
  {
    path: "/autenticacao",
    name: "Autenticacao",
    component: Autenticacao,
    meta: {
      redirecionarUtilizadorAtivo: true
    }
  },
  {
    path: "/registo",
    name: "Registo",
    component: Registo,
    meta: {
      redirecionarUtilizadorAtivo: true
    }
  },
  {
    path: "/propostas",
    name: "Propostas",
    component: Propostas,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/gestao",
    name: "Gestao",
    component: Gestao,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
    meta: {
      requerAutenticacao: true,
      redirecionarDesconexao: true
    }
  },
  {
    path: "/propostas/gestao",
    name: "GerirPropostas",
    component: GerirPropostas,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/propostas/criar",
    name: "CriarProposta",
    component: CriarProposta,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/gestao/aprovacoes",
    name: "Aprovacoes",
    component: Aprovacoes,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/gestao/utilizadores",
    name: "Utilizadores",
    component: Utilizadores,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/gestao/incricoes",
    name: "Inscricoes",
    component: Inscricoes,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "/gestao/adicionardocentes",
    name: "AdicionarDocentes",
    component: AdicionarDocentes,
    meta: {
      requerAutenticacao: true
    }
  },
  {
    path: "*",
    mame: "Erro",
    component: Erro,
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.redirecionarUtilizadorAtivo && Store.getters.ativoUtilizadorAutenticado){
    next({name: 'Propostas'});
  }
  else {
    next();
  }
  if(to.meta.requerAutenticacao && !Store.getters.ativoUtilizadorAutenticado){
    next({name: 'Autenticacao'});
  }
  else {
    next();
  }
});

export default router;