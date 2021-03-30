import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estados: [
      {id_estado: 0, estado: "Em análise"},
      {id_estado: 1, estado: "Aprovado"},
      {id_estado: 2, estado: "Banido"},
      {id_estado: 3, estado: "Aprovado por Docente (1/2)"},
      {id_estado: 4, estado: "Aprovado por Entidade (1/2)"}
    ],
    tipo_utilizadores: [ 
      {id: 0, tipo: "Docente"},
      {id: 1, tipo: "Estudante"},
      {id: 2, tipo: "Entidade Externa"}
    ],
    tipo_propostas: [
      {id_tipo: 0, proposta: "Projeto"},
      {id_tipo: 1, proposta: "Estágio"}
    ],
    utilizadores: localStorage.getItem('utilizadores') ? JSON.parse(localStorage.getItem('utilizadores')) : [
      // Estudante
      { 
        id_utilizador: 0,
        id_estado: 0,
        nome: "João",
        apelido: "Silva",
        correio: "40190120@esmad.ipp.pt",
        passe: "123",
        id_tipo: 1,
        numero_estudante: 40190120,
        nome_empresa: null,
        cca: false,
        foto: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        inscricao: null,
        cv: null,
        portfolio: null,
        facebook: null,
        instagram: null,
        github: null,
        discord: null,
        ano: "2020/2021"
      },
      // Docente 
      { 
        id_utilizador: 1,
        id_estado: 1,
        nome: "Miguel",
        apelido: "Almeida",
        correio: "miguelalmeida@esmad.ipp.pt",
        passe: "123",
        id_tipo: 0,
        numero_estudante: null,
        nome_empresa: null,
        cca: true,
        foto: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        inscricao: null,
        cv: null,
        portfolio: null,
        facebook: null,
        instagram: null,
        github: null,
        discord: null,
        ano: "2020/2021"
      },
      // Entidade Externa
      {
        id_utilizador: 2,
        id_estado: 1,
        nome: "Samuel",
        apelido: "Ribeiro",
        correio: "samribas@gmail.com",
        passe: "123",
        id_tipo: 2,
        numero_estudante: null,
        nome_empresa: "MeetUp",
        cca: false,
        foto: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        inscricao: null,
        cv: null,
        portfolio: null,
        facebook: null,
        instagram: null,
        github: null,
        discord: null,
        ano: "2020/2021"
      }
    ],
    agenda: {
      id_utilizador: 0,
      id_convidado: 0,
      data: "",
      hora: "",
      detalhes: "",
    },
    propostas: localStorage.getItem('propostas') ? JSON.parse(localStorage.getItem('propostas')) : [
      {
        id_proposta: 0, 
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 0,
        titulo: "Paper",
        objetivos: "Passar",
        planos: "Plataforma Projetos",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 1,
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 1,
        titulo: "Swift",
        objetivos: "Completar",
        planos: "Plataforma Maratonas",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 2,
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 1,
        titulo: "Swift",
        objetivos: "Completar",
        planos: "Plataforma Maratonas",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 3,
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 1,
        titulo: "Swift",
        objetivos: "Completar",
        planos: "Plataforma Maratonas",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 4, 
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 0,
        titulo: "Paper",
        objetivos: "Passar",
        planos: "Plataforma Projetos",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 5, 
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 0,
        titulo: "Paper",
        objetivos: "Passar",
        planos: "Plataforma Projetos",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      },
      {
        id_proposta: 6, 
        id_estado: 1,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 0,
        titulo: "Paper",
        objetivos: "Passar",
        planos: "Plataforma Projetos",
        resultados: "Bons",
        perfil: "Qualquer um",
        dados: "Nada",
        recursos: "VSCode",
        data_hora: "",
        ano_letivo: ""
      }
    ],
    empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [
      {
        id_empresa: 0,
        nome: "MeetUp",
        correio: "meetup@contactos.pt",
        morada: "Rua Óscar da Silva, Porto, Portugal",
        website: "www.meetup.pt"
      }
    ],
    estagios: localStorage.getItem('estagios') ? JSON.parse(localStorage.getItem('estagios')) : [
      {
        id_proposta: 1,
        id_empresa: 0,
        nome_tutor: "Jorge Cunha",
        contacto_tutor: "936725846",
        cargo_tutor: "Manager",
        correio_tutor: "jc@meetup.com"
      }
    ],
    inscricoes: localStorage.getItem('inscricoes') ? JSON.parse(localStorage.getItem('inscricoes')) : [ 
      {
        id_inscricao: 0,
        id_utilizador: 0,
        id_proposta: 0,
        id_estado: 0,
        preferencia: 1,
        ano_letivo: ""
      },
      {
        id_inscricao: 1,
        id_utilizador: 0,
        id_proposta: 1,
        id_estado: 0,
        preferencia: 2,
        ano_letivo: ""
      }
    ],
    prazos: [
      {
        id_prazo: 0,
        ano_letivo: "",
        prazo: "",
        data_hora: ""
      }
    ],
    notificacoes: localStorage.getItem('notificacoes') ? JSON.parse(localStorage.getItem('notificacoes')) : [],
    temas: [
      {id_tema: 0, tema: "Inscrição"},
      {id_tema: 1, tema: "Propostas"}
    ],
    utilizadorAutenticado: localStorage.getItem('utilizadorAutenticado') 
      ? JSON.parse(localStorage.getItem('utilizadorAutenticado')) : ""
    },
  getters:{
    obterUtilizadorAutenticado: (state) => state.utilizadores.find(u => u.id_utilizador == state.utilizadorAutenticado),
    ativoUtilizadorAutenticado: (state) => (state.utilizadorAutenticado === "" ? false : true),
    proximoIDUtilizador: (state) =>  {
      return state.utilizadores.length > 0 ?
      state.utilizadores[state.utilizadores.length - 1].id_utilizador + 1
      : 0;
    },
    proximoIDEmpresa: (state) =>  {
      return state.empresas.length > 0 ?
      state.empresas[state.empresas.length - 1].id_empresa + 1
      : 0;
    },
    proximoIDNotificacao: (state) =>  {
      return state.notificacoes.length > 0 ?
      state.notificacoes[state.notificacoes.length - 1].id_notificacao + 1
      : 0;
    },
    proximoIDInscricao: (state) =>  {
      return state.inscricoes.length > 0 ?
      state.inscricoes[state.inscricoes.length - 1].id_inscricao + 1
      : 0;
    },
    obterTipoUtilizadorePorId: (state) => (id) => {
      return state.tipo_utilizadores.find(tu => id == tu.id).tipo
    },
    obterTipoPropostas: (state) => () => {
      return state.tipo_propostas
    },
    obterTabelaAprovarUsers: (state, getters) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (utilizador.id_estado == 0) {
          const dados = {
            id: utilizador.id_utilizador,
            tipo: getters.obterTipoUtilizadorePorId(utilizador.id_tipo),
            nome: utilizador.nome + " " + utilizador.apelido,
            correio: utilizador.correio,
            complementar: utilizador.nome_empresa == null ? utilizador.numero_estudante : utilizador.nome_empresa
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaAprovarPropostas: (state, getters) => {
      const tabela = [];
      state.propostas.forEach(proposta => {
        if (proposta.id_estado == 0) {
          const criador = state.utilizadores.find(u => proposta.id_criador == u.id_utilizador);
          const dados = {
            id: proposta.id_proposta,
            tipo_criador: criador != undefined ? getters.obterTipoUtilizadorePorId(criador.id_tipo) : "N/A",
            nome_criador: criador != undefined ? criador.nome + " " + criador.apelido : "N/A",
            tipo_proposta: state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaNotificacoes: (state) => {
      const tabela = [];
      state.notificacoes.forEach(notificacao => {
        try {
          if (notificacao.id_utilizador == state.utilizadorAutenticado) {
            const dados = {
              id: notificacao.id_notificacao,
              id_utilizador: notificacao.id_utilizador,
              data_hora: notificacao.data_hora,
              tema: state.temas.find(t => notificacao.id_tema == t.id_tema).tema,
              texto: notificacao.texto
            }
            tabela.push(dados);
            if (tabela.length >= 15) throw "";
          }
        } catch (error) {
          console.log()
        }
      });
      return tabela.sort(function(a, b) {return -(a.id - b.id);})
    },
    obterTabelaUtilizadores: (state, getters) => (tipo) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (getters.obterTipoUtilizadorePorId(utilizador.id_tipo) == tipo && utilizador.id_estado !== 0) {
          const dados = {
            id: utilizador.id_utilizador,
            nome: utilizador.nome + " " + utilizador.apelido,
            correio: utilizador.correio,
            complementar: tipo == 'Estudante' ? utilizador.numero_estudante :
            tipo == 'Docente' ? utilizador.cca : utilizador.nome_empresa,
            id_estado: utilizador.id_estado,
            cca: utilizador.cca
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaInscricoes: (state, getters) => {
      const tabela = [];
      state.inscricoes.forEach(inscricao => {
        if (inscricao.id_estado != 1) {
          const inscrito = state.utilizadores.find(u => inscricao.id_utilizador == u.id_utilizador);
          const proposta = state.propostas.find(p => inscricao.id_proposta == p.id_proposta);
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: inscricao.id_proposta,
            nome_inscrito: inscrito.nome + " " + inscrito.apelido,
            tipo_proposta: tipo_proposta,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---",
            id_proposta: proposta.id_proposta
          }
          const userAut = getters.obterUtilizadorAutenticado;
          if ((userAut.nome_empresa == null && inscricao.id_estado != 3)
            || (userAut.nome_empresa == dados.entidade && inscricao.id_estado != 4)) {
            tabela.push(dados);
          }
        }
      });
      return tabela;
    },
    obterTabelaPropostasCriadas: (state) => {
      const tabela = [];
      state.propostas.forEach(proposta => {
        if (proposta.id_criador == state.utilizadorAutenticado) {
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: proposta.id_proposta,
            tipo: tipo_proposta,
            titulo: proposta.titulo,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---",
            estado: state.estados.find(e => proposta.id_estado == e.id_estado).estado
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaPropostasInscritas: (state) => {
      const tabela = [];
      state.inscricoes.forEach(inscricao => {
        if (inscricao.id_utilizador == state.utilizadorAutenticado) {
          const proposta = state.propostas.find(p => inscricao.id_proposta == p.id_proposta);
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: inscricao.id_inscricao,
            ordem: inscricao.preferencia,
            tipo: tipo_proposta,
            titulo: proposta.titulo,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---",
            estado: state.estados.find(e => inscricao.id_estado == e.id_estado).estado
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterModalVerDetalhes: (state) => (id) => {
      const dados = []
      dados.push(state.propostas.find(p => p.id_proposta == id));
      if (dados[0].id_tipo == "1") {
        const estagio = state.estagios.find(e => e.id_proposta == id)
        dados.push(estagio);
        dados.push(state.empresas.find(e => e.id_empresa == estagio.id_empresa).nome);
      }
      return dados;
    },
    obterCardsPropostas: (state) => (select) => {
      const tabela = [];
      let counter = 0, ph = [];
      state.propostas.forEach(proposta => {
        if (proposta.id_tipo != select) {
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const empresa = estagio != null ? state.empresas.find(emp => emp.id_empresa == estagio.id_empresa) : null;
          if (proposta.id_estado == 1) {
            const dados = {
              id: proposta.id_proposta,
              titulo: proposta.titulo,
              tipo: tipo_proposta,
              objetivos: proposta.objetivos,
              planos: proposta.planos,
              resultados: proposta.resultados,
              perfil: proposta.perfil,
              dados: proposta.dados,
              recursos: proposta.recursos,
              id_empresa: estagio != null ? empresa.id_empresa : null,
              empresa: estagio != null ? empresa.nome : null,
              morada: estagio != null ? empresa.morada : null,
              website: estagio != null ? empresa.website : null,
              tutor: estagio != null ? estagio.nome_tutor : null,
              cargo: estagio != null ? estagio.cargo_tutor : null,
              contacto: estagio != null ? estagio.contacto_tutor : null,
              correio: estagio != null ? estagio.correio_tutor : null,
            }
            ph.push(dados);
            counter++;
            if (counter == 3) { 
              counter = 0; tabela.push(ph); ph = [];
            }
          }
        }
      });
      if (ph.length > 0) {
        tabela.push(ph);;
      }
      console.log(tabela)
      return tabela;
    }
  },
  mutations: {
    AUTENTICADO(state, utilizador){
      state.utilizadorAutenticado = utilizador;
    },
    DESCONECTAR(state){
      state.utilizadorAutenticado = "";
    },
    REGISTADO(state, payload){
      state.utilizadores.push(payload.utilizador);
      if (payload.empresa != null) { state.empresas.push(payload.empresa); }
    },
    EDITARPERFIL(state, payload){
      state.utilizadores = state.utilizadores.map(utilizador => {
        if(utilizador.id_utilizador == payload.id_utilizador){
          utilizador.passe = payload.passe_nova
          utilizador.facebook = payload.link_facebook
          utilizador.github = payload.link_github
          utilizador.instagram = payload.link_instagram
          utilizador.discord = payload.id_discord
          utilizador.portfolio = payload.link_portfolio
        }
        return utilizador;
      })
    },
    APROVARUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 1;
        }
        return utilizador;
      })
    },
    NEGARUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.filter(utilizador =>
        utilizador.id_utilizador != payload);
    },
    APROVARPROPOSTA(state, payload) {
      state.propostas = state.propostas.map(proposta => {
        if (proposta.id_proposta == payload) {
          proposta.id_estado = 1;
        }
        return proposta;
      })
    },
    NEGARPROPOSTA(state, payload) {
      state.propostas = state.propostas.filter(proposta =>
        proposta.id_proposta != payload);
    },
    BANIRUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 2;
        }
        return utilizador;
      })
    },
    REVERTERBAN(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 1;
        }
        return utilizador;
      })
    },
    ADCIONARCCA(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.cca = true;
        }
        return utilizador;
      })
    },
    REMOVERCCA(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.cca = false;
        }
        return utilizador;
      })
    },
    APROVARINSCRICAO(state, payload) {
      state.inscricoes = state.inscricoes.map(inscricao => {
        if (inscricao.id_inscricao == payload.id_inscricao) {
          if (payload.tipo == 0) {
            inscricao.id_estado = 1;
          } else {
            if (payload.id_useraut == 0) {
              inscricao.id_estado = inscricao.id_estado == 4 ? 1 : 3;
            } else if (payload.id_useraut == 2) {
              inscricao.id_estado = inscricao.id_estado == 3 ? 1 : 4;
            }
          }
        }
        return inscricao;
      })
    },
    NEGARINSCRICAO(state, payload) {
      state.inscricoes = state.inscricoes.filter(inscricao =>
        inscricao.id_inscricao != payload);
    },
    REMOVERPROPOSTA(state, payload) {
      state.propostas = state.propostas.filter(proposta =>
        proposta.id_proposta != payload);
    },
    REMOVERINSCRICAO(state, payload) {
      state.inscricoes = state.inscricoes.filter(inscricao =>
        inscricao.id_inscricao != payload);
    },
    AUMENTARORDEM(state, payload) {
      state.inscricoes = state.inscricoes.map(inscricao => {
        if (inscricao.id_inscricao == payload) {
          inscricao.preferencia--;
        }
        return inscricao;
      })
    },
    DIMINUIRORDEM(state, payload) {
      state.inscricoes = state.inscricoes.map(inscricao => {
        if (inscricao.id_inscricao == payload) {
          inscricao.preferencia++;
        }
        return inscricao;
      })
    },
    CRIARPROPOSTA(state, payload) {
      state.propostas.push(payload)
    },
    GERARNOTIFICACAO(state, payload) {
      state.notificacoes.push(payload)
    },
    INSCREVERPROPOSTA(state, payload) {
      state.inscricoes.push(payload)
    },
    INSCREVERESTAGIO(state, payload) {
      state.estagios.push(payload)
    }
  },
  actions: {
    autenticacao(context, payload) {
      const utilizador = context.state.utilizadores.find(
        (utilizador) => utilizador.correio === payload.correio && utilizador.passe === payload.passe).id_utilizador;
      if (utilizador != undefined){
        if (utilizador.id_estado === 0) {
          throw("Espere aprovação");
        } else if (utilizador.id_estado === 2) {
          throw("Foi banido da aplicação por tempo indefinido")
        } else {
          context.commit('AUTENTICADO', utilizador)
          if(payload.manter_conectado){
            localStorage.setItem('utilizadorAutenticado', JSON.stringify(utilizador))
            console.log(payload.manter_conectado)
          }
          else{
            sessionStorage.setItem('utilizadorAutenticado', JSON.stringify(utilizador))
          }
        }
      }
      else{
        throw Error ('Autenticação falhada, tente novamente.')
      }
    },
    registo(context, payload){
      const utilizador = context.state.utilizadores.find(
        (utilizador) => utilizador.correio === payload.utilizador.correio || (utilizador.numero_estudante === payload.utilizador.numero_estudante && payload.utilizador.numero_estudante != null))
      if(utilizador == undefined){
        if (payload.empresa != null) {
          const empresa = context.state.empresas.find(
            (empresa) => empresa.nome === payload.empresa.nome)
          payload.empresa = empresa == undefined ? payload.empresa : null;
        }
        context.commit('REGISTADO', payload);
        localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores))
        localStorage.setItem('empresas', JSON.stringify(context.state.empresas))
      } else{
        throw Error("Utilizador inválido")
      }
    },
    desconectar(context){
      context.commit("DESCONECTAR");
      localStorage.removeItem("utilizadorAutenticado");
    },
    editarPerfil(context, payload){
      context.commit('EDITARPERFIL', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    aprovarUtilizador(context, payload) {
      context.commit('APROVARUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    negarUtilizador(context, payload) {
      context.commit('NEGARUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    aprovarProposta(context, payload) {
      const notificacao = {
        id: context.state.propostas.find(p => p.id_proposta == payload).id_criador,
        tema: 1,
        texto: "A sua proposta foi aprovada."
      }
      context.commit('APROVARPROPOSTA', payload);
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
      context.dispatch("gerarNotificacao", notificacao);
    },
    negarProposta(context, payload) {
      const notificacao = {
        id: context.state.propostas.find(p => p.id_proposta == payload).id_criador,
        tema: 1,
        texto: "A sua proposta foi negada."
      }
      context.commit('NEGARPROPOSTA', payload);
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
      context.dispatch("gerarNotificacao", notificacao);
    },
    banirUtilizador(context, payload) {
      context.commit('BANIRUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    reverterBan(context, payload) {
      context.commit('REVERTERBAN', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    adicionarCCA(context, payload) {
      context.commit('ADCIONARCCA', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    removerCCA(context, payload) {
      if (payload !== context.state.utilizadorAutenticado) {
        context.commit('REMOVERCCA', payload);
      } else {
        alert("Não pode remover o seu próprio estatuto CCA")
      }
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    aprovarInscricao(context, payload) {
      const notificacao = {
        id: context.state.inscricoes.find(i => i.id_inscricao == payload.id).id_utilizador,
        tema: 0,
        texto: "A sua inscrição foi aprovada."
      }
      context.commit('APROVARINSCRICAO', {
        id_inscricao: payload.id,
        id_useraut: context.getters.obterUtilizadorAutenticado.id_tipo,
        tipo: context.state.tipo_propostas.find(tp => tp.proposta == payload.tipo_proposta).id_tipo
      });
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
      context.dispatch("gerarNotificacao", notificacao);
    },
    negarInscricao(context, payload) {
      const notificacao = {
        id: context.state.inscricoes.find(i => i.id_inscricao == payload).id_utilizador,
        tema: 0,
        texto: "A sua inscrição foi negada."
      }
      context.commit('NEGARINSCRICAO', payload);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
      context.dispatch("gerarNotificacao", notificacao);
    },
    removerProposta(context, payload) {
      context.commit('REMOVERPROPOSTA', payload);
      context.state.inscricoes.forEach(inscricao => {
        if (inscricao.id_proposta === payload) {
          context.dispatch("removerInscricao", inscricao.id_inscricao)
        }
      });
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
    },
    removerInscricao(context, payload) {
      const insc = context.state.inscricoes.find(i => i.id_inscricao == payload);
      context.commit('REMOVERINSCRICAO', payload);
      for (let index = insc.preferencia; index <= 5; index++) {
        try {
          const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia+1).id_inscricao
          context.commit('AUMENTARORDEM', id);
        } catch (error) {
          break;
        }
      }
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    aumentarOrdem(context, payload) {
      const insc = context.state.inscricoes.find(i => i.id_inscricao == payload);
      const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia-1).id_inscricao
      context.commit('AUMENTARORDEM', payload);
      context.commit('DIMINUIRORDEM', id);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    diminuirOrdem(context, payload) {
      const insc = context.state.inscricoes.find(i => i.id_inscricao == payload);
      const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia+1).id_inscricao
      context.commit('DIMINUIRORDEM', payload);
      context.commit('AUMENTARORDEM', id);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    criarProposta(context, payload) {
      context.commit('CRIARPROPOSTA', payload);
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
    },
    gerarNotificacao(context, payload) {
      const date = new Date();
      const data_hora = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes();
      const notificacao = {
        id_notificacao: context.getters.proximoIDNotificacao,
        id_utilizador: payload.id,
        id_tema: payload.tema,
        texto: payload.texto,
        data_hora: data_hora,
      }
      context.commit("GERARNOTIFICACAO", notificacao)
      localStorage.setItem('notificacoes', JSON.stringify(context.state.notificacoes));
    },
    inscreverProposta(context, payload) {
      const user = context.state.utilizadores.find(u => u.id_utilizador == context.state.utilizadorAutenticado)
      if (user.id_tipo != 1) {
        throw("Só um estudante se pode inscrever numa proposta")
      }
      const inscricao = context.state.inscricoes.find(i => i.id_proposta == payload.id && i.id_utilizador == context.state.utilizadorAutenticado);
      if (inscricao != undefined) {
        throw("Já está inscrito nesta proposta")
      }
      const preferencia = context.state.inscricoes.filter(i =>i.id_utilizador == context.state.utilizadorAutenticado).length
      if (preferencia == 5) {
        throw("Já está incrito em 5 propostas")
      }
      const dados = {
        id_inscricao: context.getters.proximoIDInscricao,
        id_utilizador: context.state.utilizadorAutenticado,
        id_proposta: payload.id,
        id_estado: 0,
        preferencia: preferencia + 1,
        ano_letivo: "2020/2021"
      }
      if (payload.empresa != null) {
        const estagio = {
          id_proposta: payload.id,
          id_empresa: payload.id_empresa,
          nome_tutor: payload.tutor,
          contacto_tutor: payload.contacto,
          cargo_tutor: payload.cargo,
          correio_tutor: payload.correio
        }
        context.commit("INSCREVERESTAGIO", estagio);
        localStorage.setItem('estagios', JSON.stringify(context.state.estagios));
      }
      context.commit("INSCREVERPROPOSTA", dados);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    }
  }
});
