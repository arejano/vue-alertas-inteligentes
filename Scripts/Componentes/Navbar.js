import { mockNavBar } from "../Mocks/navbar.js";

Vue.component("NavBar", {
  name: "NavBar",
  props:{
    chevron:{
      type:Boolean,
    }
  },
  data() {
    return {
      menus:mockNavBar,
      selectedMenu:'',
    };
  },
  methods: {
    selecionarMenu(menu){
      this.selectedMenu = menu;
    }
  },
  watch: {},
  computed: {},
  template: `
  <div>
    <div 
      @click="selecionarMenu(menu)" 
      class="mw-220 p-3 px-5" 
      v-bind:class="{'menu-item-select':selectedMenu == menu}"
      v-for="menu in menus"> 
     {{ menu.label}}
     <div v-if="menu.submenus">
       <div v-if="selectedMenu == menu">
         <div v-for="menu in menu.submenus">
           {{menu.label}}
         </div>
       </div>
     </div>
     </div>
  </div>`,
});

new Vue({ el: "#nav-bar" });


