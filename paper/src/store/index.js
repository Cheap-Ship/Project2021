import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const API_URL = "http://127.0.0.1:8081/";

export default new Vuex.Store({
  state: {
    estados: [],
    tipo_utilizadores: [],
    tipo_propostas: [],
    utilizadores: [],
    agenda: [],
    propostas: [],
    empresas: [],
    estagios: [],
    inscricoes: [],
    notificacoes: [],
    temas: [],
    utilizadorAutenticado: localStorage.getItem('utilizadorAutenticado')
      ? JSON.parse(localStorage.getItem('utilizadorAutenticado')) : ""
  },
  getters: {
    obterUtilizadorAutenticado: (state) => state.utilizadores.find(u => u.id_utilizador == state.utilizadorAutenticado.id_utilizador),
    ativoUtilizadorAutenticado: (state) => state.utilizadorAutenticado != "",
    proximoIDNotificacao: (state) => {
      return state.notificacoes.length > 0 ?
        state.notificacoes[state.notificacoes.length - 1].id_notificacao + 1
        : 0;
    },
    proximoIDInscricao: (state) => {
      return state.inscricoes.length > 0 ?
        state.inscricoes[state.inscricoes.length - 1].id_inscricao + 1
        : 0;
    },
    obterTipoUtilizador: (state) => {
      const ops = []
      const len = state.tipo_utilizadores.length;
      for (let i = 1; i < len; i++) {
        ops.push({ value: state.tipo_utilizadores[i].id_tipo, text: state.tipo_utilizadores[i].tipo })
      }
      return ops;
    },
    obterTipoUtilizadorePorId: (state) => (id) => {
      return state.tipo_utilizadores.find(tu => id == tu.id_tipo).tipo
    },
    obterTipoPropostas: (state) => () => {
      return state.tipo_propostas
    },
    obterTabelaAprovarUsers: (state, getters) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (utilizador.id_estado == 1) {
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
        if (proposta.id_estado == 1) {
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
      return tabela.sort(function (a, b) { return -(a.id - b.id); })
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
      if (dados[0].id_tipo == 2) {
        const estagio = state.estagios.find(e => e.id_proposta == id)
        dados.push(estagio);
        dados.push(state.empresas.find(e => e.id_empresa == estagio.id_empresa).nome);
      }
      return dados;
    },
    obterCardsPropostas: (state) => (select) => {
      const tabela = [];
      let counter = 0, ph = [];
      const lista_invertida = state.propostas.reverse();
      lista_invertida.forEach(proposta => {
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
            if (counter == 4) {
              counter = 0; tabela.push(ph); ph = [];
            }
          }
        }
      });
      if (ph.length > 0) {
        tabela.push(ph);
      }
      return tabela;
    }
  },
  mutations: {
    FETCH_ESTADOS(state, payload) {
      state.estados = payload
    },
    FETCH_TIPO_UTILIZADORES(state, payload) {
      state.tipo_utilizadores = payload
    },
    FETCH_TIPO_PROPOSTAS(state, payload) {
      state.tipo_propostas = payload
    },
    FETCH_UTILIZADORES(state, payload) {
      state.utilizadores = payload
    },
    FETCH_AGENDA(state, payload) {
      state.agenda = payload
    },
    FETCH_PROPOSTAS(state, payload) {
      state.propostas = payload
    },
    FETCH_EMPRESAS(state, payload) {
      state.empresas = payload
    },
    FETCH_ESTAGIOS(state, payload) {
      state.estagios = payload
    },
    FETCH_INSCRICOES(state, payload) {
      state.inscricoes = payload
    },
    FETCH_NOTIFICACOES(state, payload) {
      state.notificacoes = payload
    },
    FETCH_TEMAS(state, payload) {
      state.temas = payload
    },
    AUTENTICADO(state, payload) {
      state.utilizadorAutenticado = payload;
    },
    DESCONECTAR(state) {
      state.utilizadorAutenticado = "";
    },
    REGISTADO(state, payload) {
      state.utilizadores.push(payload.utilizador);
      if (payload.empresa != null) { state.empresas.push(payload.empresa); }
    },
    EDITARPERFIL(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload.id_utilizador) {
          utilizador = payload
        }
        return utilizador;
      })
    },
    APROVARUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 2;
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
          proposta.id_estado = 2;
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
    async verifySession(context) {
      const response = await fetch(API_URL + 'auth/verify', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      context.commit('AUTENTICADO', response.ok ? context.state.utilizadorAutenticado : "")
      localStorage.setItem('utilizadorAutenticado',
        response.ok ? JSON.stringify(context.state.utilizadorAutenticado) : "")
    },
    async fetchEstados(context) {
      const response = await fetch(API_URL + 'estados', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_UTILIZADORES', data) : {}
    },
    async fetchTipoUtilizadores(context) {
      const response = await fetch(API_URL + 'tipo_utilizadores', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_TIPO_UTILIZADORES', data) : {}
    },
    async fetchTipoPropostas(context) {
      const response = await fetch(API_URL + 'tipo_propostas', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_TIPO_PROPOSTAS', data) : {}
    },
    async fetchUtilizadores(context) {
      const response = await fetch(API_URL + 'utilizadores', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_UTILIZADORES', data) : {}
    },
    async fetchAgenda(context) {
      const response = await fetch(API_URL + 'agenda', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_AGENDA', data) : {}
    },
    async fetchPropostas(context) {
      const response = await fetch(API_URL + 'propostas', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_PROPOSTAS', data) : {}
    },
    async fetchEmpresas(context) {
      const response = await fetch(API_URL + 'empresas', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_EMPRESAS', data) : {}
    },
    async fetchEstagios(context) {
      const response = await fetch(API_URL + 'estagios', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_ESTAGIOS', data) : {}
    },
    async fetchInscricoes(context) {
      const response = await fetch(API_URL + 'inscricoes', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_INSCRICOES', data) : {}
    },
    async fetchNotificacoes(context) {
      const response = await fetch(API_URL + 'notificacoes', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_NOTIFICACOES', data) : {}
    },
    async fetchTemas(context) {
      const response = await fetch(API_URL + 'temas', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      const data = await response.json()
      response.ok ? context.commit('FETCH_TEMAS', data) : {}
    },
    async autenticacao(context, payload) {
      const response = await fetch(API_URL + 'auth/signin', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json()
      if (response.ok) {
        if (data.id_estado === 1) {
          throw Error("Espere aprovação");
        } else if (data.id_estado === 3) {
          throw Error("Foi banido da aplicação por tempo indefinido")
        }
        const send = { id_utilizador: data.id_utilizador, accessToken: data.accessToken };
        context.commit('AUTENTICADO', send)
        localStorage.setItem('utilizadorAutenticado', JSON.stringify(send))
      } else {
        throw Error(data.message)
      }
    },
    async registo(context, payload) {
      const responseUser = await fetch(API_URL + 'auth/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(payload.utilizador)
      });
      const dataUser = await responseUser.json()
      if (responseUser.ok) {

        if (payload.empresa != null) {
          const empresa = context.state.empresas.find((empresa) => empresa.nome === payload.empresa.nome)
          if (empresa == undefined) {
            const responseCo = await fetch(API_URL + 'empresas', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              },
              body: JSON.stringify(payload.empresa)
            });
            const dataCo = await responseCo.json()
            if (!responseCo.ok) {
              throw Error(dataCo.message)
            }
          } else {
            payload.empresa = null;
          }
        }

        context.commit('REGISTADO', payload);
      } else {
        throw Error(dataUser.message)
      }
    },
    desconectar(context) {
      context.commit("DESCONECTAR");
      localStorage.removeItem("utilizadorAutenticado");
    },
    async editarPerfil(context, payload) {
      const ogUser = context.getters.obterUtilizadorAutenticado
      let newUser = {
        id_estado: ogUser.id_estado,
        nome: ogUser.nome,
        apelido: ogUser.apelido,
        correio: ogUser.correio,
        passe: payload.passe ? payload.passe : ogUser.passe,
        id_tipo: ogUser.tipo_utilizador,
        numero_estudante: ogUser.numero_estudante,
        nome_empresa: ogUser.nome_empresa,
        cca: ogUser.cca,
        foto: payload.foto ? payload.foto : ogUser.foto,
        cv: payload.cv ? payload.cv : ogUser.cv,
        portfolio: payload.portfolio ? payload.portfolio : ogUser.portfolio,
        facebook: payload.facebook ? payload.facebook : ogUser.facebook,
        instagram: payload.instagram ? payload.instagram : ogUser.instagram,
        github: payload.github ? payload.github : ogUser.github,
        discord: payload.discord ? payload.discord : ogUser.discord,
        ano_letivo: ogUser.ano_letivo
      }
      const response = await fetch(API_URL + 'utilizadores/' + ogUser.id_utilizador, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        },
        body: JSON.stringify(newUser)
      });
      if (response.ok) {
        context.commit('EDITARPERFIL', newUser);
      } else {
        const data = await response.json()
        throw Error(data.message)
      }
    },
    async aprovarUtilizador(context, payload) {
      let newUser = context.state.utilizadores.find(u => u.id_utilizador == payload)
      newUser.id_estado = 2
      const response = await fetch(API_URL + 'utilizadores/' + payload, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        },
        body: JSON.stringify(newUser)
      });
      if (response.ok) {
        context.commit('APROVARUTILIZADOR', payload);
      } else {
        const data = await response.json()
        throw Error(data.message)
      }
    },
    async negarUtilizador(context, payload) {
      const response = await fetch(API_URL + 'utilizadores/' + payload, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      if (response.ok) {
        context.commit('NEGARUTILIZADOR', payload);
      } else {
        const data = await response.json()
        throw Error(data.message)
      }
    },
    async aprovarProposta(context, payload) {
      let newProp = context.state.propostas.find(p => p.id_proposta == payload)
      newProp.id_estado = 2
      const response = await fetch(API_URL + 'propostas/' + payload, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        },
        body: JSON.stringify(newProp)
      });
      if (response.ok) {
        context.commit('APROVARPROPOSTA', payload);
        const notificacao = {
          id: newProp.id_criador,
          tema: 2,
          texto: "A sua proposta foi aprovada."
        }
        context.dispatch("gerarNotificacao", notificacao);
      } else {
        const data = await response.json()
        throw Error(data.message)
      }
    },
    async negarProposta(context, payload) {
      const response = await fetch(API_URL + 'propostas/' + payload, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-access-token": context.state.utilizadorAutenticado.accessToken
        }
      });
      if (response.ok) {
        context.commit('NEGARPROPOSTA', payload);
        const notificacao = {
          id: context.state.propostas.find(p => p.id_proposta == payload).id_criador,
          tema: 2,
          texto: "A sua proposta foi negada."
        }
        context.dispatch("gerarNotificacao", notificacao);
        } else {
        const data = await response.json()
        throw Error(data.message)
      }
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
          const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia + 1).id_inscricao
          context.commit('AUMENTARORDEM', id);
        } catch (error) {
          break;
        }
      }
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    aumentarOrdem(context, payload) {
      const insc = context.state.inscricoes.find(i => i.id_inscricao == payload);
      const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia - 1).id_inscricao
      context.commit('AUMENTARORDEM', payload);
      context.commit('DIMINUIRORDEM', id);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    diminuirOrdem(context, payload) {
      const insc = context.state.inscricoes.find(i => i.id_inscricao == payload);
      const id = context.state.inscricoes.find(i => i.id_utilizador == insc.id_utilizador && i.preferencia == insc.preferencia + 1).id_inscricao
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
        throw ("Só um estudante se pode inscrever numa proposta")
      }
      const inscricao = context.state.inscricoes.find(i => i.id_proposta == payload.id && i.id_utilizador == context.state.utilizadorAutenticado);
      if (inscricao != undefined) {
        throw ("Já está inscrito nesta proposta")
      }
      const preferencia = context.state.inscricoes.filter(i => i.id_utilizador == context.state.utilizadorAutenticado).length
      if (preferencia == 5) {
        throw ("Já está incrito em 5 propostas")
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
