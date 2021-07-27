export const Pagination = Vue.component("Pagination", {
  name: "Pagination",
  props: {
    paginas: { type: Number, requiered: true },
    pagina: { type: Number, requiered: true },
  },
  data() {
    return {
    };
  },
  methods: {
    contruirRange(start, end) {
      return new Array(end - start).fill().map((d, i) => i + start);
    },
 
    trocaPagina(pagina) {
      this.returnValue(pagina);
    },
    labelqtPaginas() {
      if (this.totalPaginas == 0 || this.totalPaginas == 1) {
        return "página";
      }
      if (this.totalPaginas > 1) {
        return "páginas";
      }
    },
    primeiraPagina() {
      this.pagina = 1;
      this.returnValue(this.pagina);
    },
    ultimaPagina() {
      let ultimaPg = Math.ceil(this.totalNoticias / 12);
      this.pagina = ultimaPg;
      this.returnValue(this.pagina);
    },
    proximaPagina() {
      np = this.pagina + 1;
      if (np > this.totalNoticias) {
        //
      } else {
        this.pagina = np;
        this.returnValue(this.pagina);
      }
    },
    paginaAnterior() {
      np = this.pagina - 1;
      if (np < 1) {
        //
      } else {
        this.pagina = np;
        this.returnValue(this.pagina);
      }
    },
    returnValue(pagina) {
      console.log(pagina)
      this.$emit("trocaPagina", pagina);
    },
  },
  watch: {},
  computed: {
    labelPaginas() {
      return `${this.paginas}`;
    },
    totalPaginas() {
      return Math.ceil(this.totalNoticias / 12);
    },
    calcPaginas() {
      let paginaAtual = this.pagina;
      if (paginaAtual > 5) {
        return this.contruirRange(paginaAtual - 4, paginaAtual + 5);
      } else {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    },
  },
  template: `
  <div class="d-flex w-full justify-content-end">
    <Button small white 
      @click.native="primeiraPagina()"
      label="Primeira"
    />
    <Button small white 
      @click.native="primeiraPagina()"
      label="Anterior"
    />
    <Button small white 
      v-for="pagina in calcPaginas"
      v-bind:key="pagina"
      :label="pagina.toString()"
      @click.native="trocaPagina(pagina)"
    />
    <Button small white 
      @click.native="proximaPagina()"
      label="Proxima"
    />
    <Button small white 
      @click.native="ultimaPagina()"
      label="Ultima"
    />
  </div>`,
});
