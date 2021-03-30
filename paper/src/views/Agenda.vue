<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-visivel animacao-opacidade-sombra-ligeira d-flex">
      <div class="area-conteudo animacao-opacidade-sombra-ligeira d-flex justify-content-start fundo-f4 borda-r5 sombra-ligeira">
        <!-- Por fazer -->
        <div>Calendário</div>
        <div>
          Marcar entrevista
          <form @submit.prevent="adicionarEntrevista">

            <!-- Dia da entrevista -->
            <label for="dia">Dia</label>
            <input type="date" id="dia" />

            <!-- Hora da entrevista -->
            <label for="hora">Hora</label>
            <input type="time" id="hora" />
            
            <!-- FIXME:BUTTON TO REMOVE ENTREVISTA AFTER PROPOSTAS -->

            <!-- Inscrito convidado -->
            <label for="convidado">Convidado</label>
            <select name="" id="convidado">
              <option value="" disabled selected hidden>
                Selecione um dos utilizadores
              </option>
              <!-- FIXME: Select options AFTER PROPOSTAS -->
            </select>

            <!-- Detalhes sobre a entrevista -->
            <label for="detalhes">detalhes</label>
            <textarea id="detalhes" rows="4" cols="50" placeholder="Insira os detalhes relativos a entrevista a ser realizada"></textarea>

            <input type="submit" value="Criar entrevista">

          </form>
        </div>
        <div>Lista de entrevistas

           <!-- Cada entrevista -->
          <div v-for="entrevista in entrevistas" :key="entrevista.id_convidado">
           <!--FIXME: Change LATER -->
            {{entrevista.hora}}
            Convidado:{{entrevista.id_convidado}}
            {{entrevista.detalhes}}
          </div>

        </div>
        <!-- Por fazer -->
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
  data() {
    return {

      //FIXME: GETTER NEEDED AFTER PROPOSTAS!
      //FIXME:PRECISA DE SER ARRAY
      entrevistas: []


    };
  },

  methods: {

    adicionarEntrevista() {
      console.log("test")
      //Metodo que irá adicionar as entrevistas a plataforma





    },
  },
};
</script>
