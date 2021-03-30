<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-visivel animacao-opacidade-sombra-ligeira d-flex">
      <div class="area-conteudo">
        <div class="navegador-superior animacao-opacidade-sombra-ligeira d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <div class="area-navegacao-propostas-2 d-flex justify-content-start align-items-center"> 
            <router-link :to="{name:'Propostas'}" class="lista-propostas-link-a">
              <button class="lista-propostas-link-btn d-flex align-items-center fundo-dd borda-fina borda-aa borda-r5 opensans-sb fonte-14">
                <svg id="voltar2-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="14.667" viewBox="0 0 22 14.667"><path class="a" d="M7.334,15v3.667L0,11.333,7.334,4V7.667h8.185c8.3,0,6.54,8.728,5.806,10.467C20.6,15.892,19.066,15,16.4,15H7.334Z" transform="translate(0 -4)"/></svg>
                <a>Retornar</a>
              </button>
            </router-link>
          </div>
        </div>
        <div class="area-conteudo-com-navegador d-flex justify-content-between animacao-opacidade-sombra-ligeira fundo-f4 borda-r5 sombra-area-conteudo padding-all8">
          <b-form @submit.stop.prevent="onSubmit">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column justify-content-between width-55">
                <div class="d-flex align-align-items-start sem-margens width-100">
                  <div class="sem-padding width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold">Título da proposta *</div>
                    <b-form-input
                      v-model="form.tituloProposta"
                      class="width-input opensans-l fonte-12"
                      type="text"
                      required
                      placeholder="Aplicação de maratonas (Obrigatório)"
                      size="sm"
                    />
                  </div>
                  <div class="sem-padding margem-l32 width-25">
                    <div class="mukta-m fonte-16 align-left">Tipo da proposta *</div>
                    <b-form-select v-model="form.tipoProposta" class="mukta-m fonte-14 cor-60 align-left height-42" @change="onChangeTipo">
                      <b-form-select-option v-for="tipo in tiposPropostas" :value="tipo.id_tipo" :label="tipo.proposta" :key="tipo.id_tipo">{{ tipo.proposta }}</b-form-select-option>
                    </b-form-select>
                  </div>
                </div>
                <div class="d-flex sem-margens width-100">
                  <div class="sem-padding width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold width-100 padding-t8">Objetivos e descrição da proposta *</div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.descricaoProposta"
                      class="opensans-l fonte-12 width-100 height-165"
                      placeholder="Descreva sucintamente os objetivos do projeto e as principais atividades que o compõem. (Obrigatório)"
                      required
                    />
                  </div>
                  <div class="sem-padding margem-l32 width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold width-100 padding-t8">Plano provisório de trabalho *</div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.planoProvisorio"
                      class="opensans-l fonte-12 width-100 height-165"
                      placeholder="Resuma o plano de trabalhos ao longo das 15 semanas do estágio/projeto. (Obrigatório)"
                      required
                    />
                  </div>
                </div>
                <div class="d-flex sem-margens width-100">
                  <div class="sem-padding width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold">Resultados esperados *</div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.resultadosEsperados"
                      class="opensans-l fonte-12 height-165"
                      placeholder="Descreva o que pretende obter no final do estágio/projeto. (Obrigatório)"
                      required
                    />
                  </div>
                  <div class="sem-padding margem-l32 width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold">Perfil do candidato desejado *</div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.perfilDesejado"
                      class="opensans-l fonte-12 height-165"
                      placeholder="Perfil desejado do candidato (competências, entre outras). (Obrigatório)"
                      required
                    />
                  </div>
                </div>
                <div class="d-flex sem-margens width-100">
                  <div class="sem-padding width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold">Outros dados relevantes </div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.outrosDados"
                      class="opensans-l fonte-12 height-165"
                      placeholder="Exemplo: o estudante tem que estar disponível aos fins de semana."
                    />
                  </div>
                  <div class="sem-padding margem-l32 width-48">
                    <div class="mukta-m fonte-16 align-left texto-bold">Recursos necessários *</div>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.recursosNecessarios"
                      class="opensans-l fonte-12 height-165"
                      placeholder="Descreva necessidades específicas para o projeto como hardware e software necessário. (Obrigatório)"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column width-42">
                <div class="d-flex flex-column justify-content-between fundo-ff borda-r5 borda-grossa borda-bb padding-all8 margem-t32">
                  <div class="mukta-m fonte-16 align-left texto-bold margem-t7">Identificação da entidade acolhedora</div>
                  <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Nome da Empresa *</div>
                      <b-form-input
                        v-model="form.nomeEmpresa"
                        class="width-input opensans-l fonte-12"
                        type="text"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Correio eletrónico *</div>
                      <b-form-input
                        v-model="form.correioEletronicoEmpresa"
                        class="width-input opensans-l fonte-12"
                        type="email"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                  </div>
                  <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Morada da Empresa *</div>
                      <b-form-input
                        v-model="form.moradaEmpresa"
                        class="width-input opensans-l fonte-12"
                        type="text"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Website *</div>
                      <b-form-input
                        v-model="form.website"
                        class="width-input opensans-l fonte-12 height-42 borda-aa"
                        type="url"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                  </div>
                  <div class="fundo-aa height-2 width-100 margem-t15"></div>
                  <div class="mukta-m fonte-16 align-left texto-bold margem-t15">Tutor da entidade acolhedora</div>
                  <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Nome e apelido do tutor *</div>
                      <b-form-input
                        v-model="form.nomeApelidoTutor"
                        class="width-input opensans-l fonte-12"
                        type="text"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Correio eletrónico *</div>
                      <b-form-input
                        v-model="form.correioEletronicoTutor"
                        class="width-input opensans-l fonte-12"
                        type="email"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                  </div>
                  <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Cargo na Empresa *</div>
                      <b-form-input
                        v-model="form.cargoEmpresa"
                        class="width-input opensans-l fonte-12"
                        type="text"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                    <div class="d-flex flex-column sem-padding width-48">
                      <div class="mukta-m fonte-14 cor-60 align-left texto-bold">Contacto telefónico *</div>
                      <b-form-input
                        v-model="form.contactoTelefonico"
                        class="width-input opensans-l fonte-12"
                        type="number"
                        placeholder=""
                        size="sm"
                        :disabled="form.tipoProposta === 0"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="fundo-ff borda-r5 borda-grossa borda-bb padding-all8 margem-t7">
                  <p class="align-left fonte-14 cor-60 sem-margens">Por favor, preencha os campos com dados legítimos e corretos. A nossa plataforma não se responsabiliza por enganos no caso de dados falsos e/ou incorretos.<br />Cada proposta submetida, seja este estágio ou projeto, passa por verificação e validação por parte de uma comissão de docentes responsáveis pela Licenciatura de Tecnologias e Sistemas de Informação para a Web da Escola Superior de Media Artes e Design.</p>
                </div>
                <div class="d-flex align-bottom margem-t7 align-left">
                  <b-form-checkbox
                    v-model="form.concordar"
                    name="concordar"
                    value="1"
                    unchecked-value="0"
                    required
                  />
                  <div class="fonte-10 margem-t5">Concordo com os termos de funcionamento e a não responsabilização da plataforma em caso de dados incorretos.</div>
                </div>
                <div class="d-flex align-bottom align-left">
                  <b-form-checkbox
                    v-model="form.confirmar"
                    name="confirmar"
                    value="1"
                    unchecked-value="0"
                    required
                  />
                  <div class="fonte-10 margem-t5">Confirmo que os dados inseridos são legítimos e corretos.</div>
                </div>
                <b-button type="submit" class="margem-t7 fundo-0084c0">Criar a proposta</b-button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  components: {
    SideBar
  },
  data() {
    return {
      form: {
        tituloProposta: '',
        tipoProposta: '',
        descricaoProposta: '',
        planoProvisorio: '',
        resultadosEsperados: '',
        perfilDesejado: '',
        outrosDados: '',
        recursosNecessarios: '',
        nomeEmpresa: '',
        correioEletronicoEmpresa: '',
        moradaEmpresa: '',
        website: '',
        nomeApelidoTutor: '',
        correioEletronicoTutor: '',
        cargoEmpresa: '',
        contactoTelefonico: '',
        concordar: 0,
        confirmar: 0
      },
      tiposPropostas: [],
      utilizador: null
    }
  },
  created() {
    this.utilizador = this.obterUtilizadorAutenticado

    if (this.utilizador.id_tipo == 0) {
      this.tiposPropostas = [this.obterTipoPropostas()[0]]
      this.form.tipoProposta = 0
    } else if (this.utilizador.id_tipo == 1) {
      this.tiposPropostas = this.obterTipoPropostas()
      this.form.tipoProposta = 0
    } else {
      this.tiposPropostas = [this.obterTipoPropostas()[1]]
      this.form.tipoProposta = 1
    }
  },
  computed: {
    ...mapGetters([
      'obterTipoPropostas',
      'obterUtilizadorAutenticado',
    ])
  },
  methods: {
    ...mapActions(['criarProposta']),
    onChangeTipo() {
      if(this.form.tipoProposta === 0) {
        this.form.nomeEmpresa = ''
        this.form.correioEletronicoEmpresa = ''
        this.form.moradaEmpresa = ''
        this.form.website = ''
        this.form.nomeApelidoTutor = ''
        this.form.correioEletronicoTutor = ''
        this.form.cargoEmpresa = ''
        this.form.contactoTelefonico = ''
      }
    },
    onSubmit(event) {
      event.preventDefault()
      let propostas = localStorage.getItem('propostas') ? JSON.parse(localStorage.getItem('propostas')) : null

      const objProposta = {
        id_estado: 0,
        motivo: "",
        id_criador: this.utilizador.id_utilizador,
        id_docente: this.utilizador.id_tipo === 0 ? this.utilizador.id_utilizador : null,
        id_tipo: this.form.tipoProposta,
        titulo: this.form.tituloProposta,
        objetivos: this.form.descricaoProposta,
        planos: this.form.planoProvisorio,
        resultados: this.form.resultadosEsperados,
        perfil: this.form.perfilDesejado,
        dados: this.form.outrosDados,
        recursos: this.form.recursosNecessarios,
        data_hora: moment().format("DD/MM/YYYY HH:mm"),
        ano_letivo: "2020/2021"
      }
      if (propostas == null) {
        objProposta.id_proposta = 0
      } else {
        const ultimaProposta = propostas[propostas.length - 1]
        objProposta.id_proposta = ultimaProposta.id_proposta + 1
      }
      this.criarProposta(objProposta)
      this.$router.push({name: 'Propostas'})
    }
  }
};
</script>

<style>

.area-navegacao-propostas-2 a{color: #000000 !important; text-decoration: none;}
.lista-propostas-link-btn{ height: 42px; padding: 0px 10px;  }
.lista-propostas-link-btn:hover a{ color: #707070 !important; }
.width-input{width: 100% !important;}
</style>
