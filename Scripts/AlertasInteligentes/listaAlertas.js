import { listaMock } from "../Mocks/alertas_inteligentes.js";
import { Button, ToggleButton } from "../../Scripts/Componentes/Buttons.js";
// import { chevron } from ".."
import { IconList } from "../../Scripts/Componentes/Icons.js";
import { CpInput } from "../../Scripts/Componentes/Inputs.js";
import { Pagination } from "../../Scripts/Componentes/Pagination.js";

export const ListaAlertas = Vue.component("lista-alertas", {
  name: "ListaAlertas",
  props: {},
  data() {
    return {
      pesquisaNomeAlerta: "",
      lista: listaMock,
      tipoAlertaSelecionado: ["clip", "evento", "sms"],
      alertaSelecionado: {},
      totalAlertas: 0,
      filtro: {
        paginaAtual: 1,
        nomeAlerta: "",
      },
    };
  },
  created() {
    this.carregarAlertas();
  },
  mounted() {},
  methods: {
    carregarAlertas() {
      console.log("carregando alertas");
    },
    selecionarAlerta(alerta) {
      if (alerta == this.alertaSelecionado) {
        this.alertaSelecionado = "";
      } else {
        this.alertaSelecionado = alerta;
      }
    },
    selecionarTipoAlerta(tipo) {
      if (this.tipoAlertaSelecionado.includes(tipo)) {
        this.tipoAlertaSelecionado = this.tipoAlertaSelecionado.filter((t) => {
          return t != tipo;
        });
      } else {
        this.tipoAlertaSelecionado.push(tipo);
      }
    },
    pesquisarAlerta() {},
    enviarEmail() {},
    deletarAlerta() {},
    editarAlerta() {},
    novoAlerta() {},
  },
  watch: {
    filtro: function () {
      this.carregarAlertas();
    },
  },
  computed: {
    alertasFiltrados() {
      return this.lista.filter((alerta) => {
        // Se não estiver na lista atual, manda o
        return alerta.nome
          .toLowerCase()
          .includes(this.pesquisaNomeAlerta.toLowerCase());
      });
    },
  },
  template: `
  <div class="">
      <div class="row py-3">
        <div class="col-lg-6 col-md-12 col-sm-12 justify-content-between align-items-center d-flex px-5 py-3 ">
          <Button white bold label="Novo Alerta" />
          <div class="d-flex align-items-center">
            <ToggleButton left primary
              tooltip="Evento"
              @click.native="selecionarTipoAlerta('evento')"  
              :toggle="tipoAlertaSelecionado.includes('evento')" 
              icon="fas fa-bell" 
            />
            <ToggleButton middle primary
              tooltip="Clipping"
              @click.native="selecionarTipoAlerta('clip')" 
              :toggle="tipoAlertaSelecionado.includes('clip')" 
              icon="fas fa-newspaper" 
            />
            <ToggleButton right primary
              tooltip="SMS"
              @click.native="selecionarTipoAlerta('sms')" 
              :toggle="tipoAlertaSelecionado.includes('sms')" 
              icon="fas fa-comment-dots"
            />
          </div>
        </div>

        <div class="col-lg-6 col-md-12 d-flex align-items-center justify-content-between px-5 py-3" style="gap:27px;">
          <CpInput v-model="filtro.nomeAlerta" placeholder="Digite o nome do alerta"/>
          <Button primary bold label="Pesquisar"/>
        </div>

      </div>

      <div class="d-flex px-3 ">
        <span class="col-lg-1 col-sm-1 p-3 px-5 font-bold">Tipo</span>
        <span class="col-lg-3 col-sm-3 p-3 font-bold">Nome do alerta</span>
        <span class="col-lg-2 col-sm-2 p-3 font-bold">Data da criação</span>
        <span class="col-lg-3 col-sm-3 p-3 font-bold">Autor</span>
        <span class="col-lg-2 col-sm-2 p-3 font-bold text-center">Ações</span>
        <span class="col-lg-1 col-sm-1 p-3 font-bold"></span>
      </div>
      <div class="px-4">
        <div 
          v-for="alerta in alertasFiltrados" 
          v-show="tipoAlertaSelecionado.includes(alerta.tipo)" 
          class="border mb-4 bg-white rounded select-none"
        >
          <div  class="d-flex p-2 justify-content-between align-items-center ">
            <span class="col-lg-1 text-left px-4 ">
              <Icon textGreen class="ps-" v-if="alerta.tipo == 'clip'" icon="fas fa-newspaper"/>
              <Icon textGreen class="ps-" v-if="alerta.tipo == 'evento'" icon="fas fa-paperclip"/>
              <Icon textGreen class="ps-" v-if="alerta.tipo == 'sms'" icon="fas fa-comment-alt"/>
            </span>
            <span class="col-lg-3 p-2">{{alerta.nome}}</span>
            <span class="col-lg-2 p-2 px-3">{{alerta.dataCriacao}}</span>
            <span class="col-lg-3 p-2 px-3">{{alerta.autor}}</span>
            <span class="col-lg-2 gap-1 d-flex justify-content-center">
              <Button small textSecondary transparent @click="enviarEmail" icon="fas fa-envelope"/>
              <Button small textSecondary transparent @click="editarAlerta" icon="fas fa-edit"/>
              <Button small textSecondary transparent @click="deletarAlerta" icon="fas fa-trash"/>
            </span>
            <span class="col-lg-1 text-right">
              <Chevron bgHover textGreen @click.native="selecionarAlerta(alerta)" :value="alertaSelecionado == alerta"/>
            </span>
          </div>
          <div v-show="alertaSelecionado == alerta" class="p-2 ">
              <div class="col m-4 p-3 border-top">
                Entrega para o Banco do Brasil de posts do Facebook e posts do Instagram todos os dias às 9h do dia 08 a 11 de junho por e-mail e pelo WhatsApp
              </div>
          </div>
        </div>
        <div v-if="tipoAlertaSelecionado.length == 0 || alertasFiltrados.length == 0" class="p-3 rounded alert-danger border-danger" role="alert">
          <span>Não existe resultados para esta pesquisa.</span>
        </div>
      </div>
      <Pagination 
        :paginas="totalAlertas" 
        :pagina="filtro.paginaAtual"  
        @trocaPagina="filtro.paginaAtual = $event"
      />
  </div>`,
});
