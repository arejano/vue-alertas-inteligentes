import { } from "../Scripts/Utils/global_functions.js";
import { ListaAlertas } from "../Scripts/AlertasInteligentes/listaAlertas.js"

Vue.component("main-app", {
  components:{ListaAlertas},
  name: "",
  data() {
    return {
      selectedMenu: "",
    };
  },
  created() {
  },
  methods: {
    selecionarMenu(menu) {
      this.selectedMenu = menu;
    },
  },
  watch: {},
  computed: {},
  template: `
  <div class="">
    <div class="bg-white shadow-sm mt-4 pb-4 p-2 px-4">
      <h2 class="px-3 w-full ">Lista de Alertas</h2>
      <div class="px-3 fs-5">
        <span class="">Home</span>
        <span class="px-2">/ Alertas Intelignetes /</span>
        <span class="px-2"><b>Lista de Alertas</b></span>
      </div>
    </div>

    <div class="p-3 mt-1">
      <ListaAlertas />
    </div>
  </div>`,
});

new Vue({ el: "#main-app" });
