// Exemplo da chamada no HTML
// <div id="novoAlerta">
//   <novo-alerta></novo-alerta>
// </div>

var novoAlerta = Vue.component("novo-alerta", {
  name: "novo-alerta",
  props: {},
  data() {
    return {
      abaSelecionada:1,
      filtro:{
        periodo:{
          data_inicial:'01/01/2020',
          data_final:'01/01/2020',
        }
      },
     dados:{
        link:'https:www.zeeng.com.br'
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    selecionarAlerta(alerta) {
      if (alerta == this.alertaSelecionado) {
        this.alertaSelecionado = "";
      } else {
        this.alertaSelecionado = alerta;
      }
    },
  },
  watch: {},
  computed: {},
  template: `
    <div class="vueContainer">
    <h1>Cadastro de Alerta</h1>
      <div class="row justify-content-end px-3">
          <div @click="abaSelecionada = 1" class="containerVue aba" v-bind:class="{'abaSelecionada': abaSelecionada == 1}">O que você quer receber?</div>
          <div @click="abaSelecionada = 2" class="containerVue aba" v-bind:class="{'abaSelecionada': abaSelecionada == 2}">Como você quer receber?</div>
          <div @click="abaSelecionada = 3" class="containerVue aba" v-bind:class="{'abaSelecionada': abaSelecionada == 3}">Para quem vai ser enviado?</div>
      </div>
        <div v-if="abaSelecionada == 1" class="containerVue">
          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Quais as marcas?</div>
            <Drop label="Especifico" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Especifico','Todas']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><input placeholder="Insira as marcas" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Quais os conteúdos públicos?</div>
            <div class="d-flex col-md-12 col-lg-8 justify-content-between " style="padding-top:15px;">
              <CheckBox label="Posts do Instagram"/>
              <CheckBox label="Posts do Facebook"/>
              <CheckBox label="Posts do Twitter"/>
              <CheckBox label="Posts do Youtube"/>
              <CheckBox label="Impresso/Digital"/>
              <CheckBox label="TV"/>
            </div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Quais os perfis? </div>
            <Drop label="Especifico" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Especifico','Todas']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><input placeholder="Insira os perfis" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Quais os conteúdos privados?</div>
            <div class="d-flex col-md-12 col-lg-8 justify-content-between " style="padding-top:15px;">
              <CheckBox label="Posts do Instagram"/>
              <CheckBox label="Menções do Instagram"/>
              <CheckBox label="Posts do Facebook"/>
              <CheckBox label="Menções do Facebook"/>
              <CheckBox label="Posts do Youtube"/>
            </div>
 
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">conteúdo deve ter palavras-chaves?</div>
            <Drop label="Sim" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Sim','Não']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><input placeholder="Insira as palavras-chaves" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Conteúdo deve ter tags?</div>
            <Drop label="Sim" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Sim','Não']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><input placeholder="Insira as tags" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Configurações avançadas?</div>
            <div class="d-flex col-md-12 col-lg-8 justify-content-between " style="padding-top:15px;">
              <CheckBox label=""/>
            </div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o ordenamento? </div>
            <Drop label="Mais recente" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Mais recente','Mais antigos']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o agrupamento? </div>
            <Drop label="Marcas" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Marcas','Conteúdo','Redes Sociais','Notícias','Sem agrupamento']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o tipo de diagramação?</div>
            <Drop label="Completo" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Completo','Resumido','Tabular']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="footer d-flex flex-row-reverse">
            <Button green label="Proxímo"/>
          </div>
        </div>

        <div v-if="abaSelecionada == 2" class="containerVue">
          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o nome do assunto?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input placeholder="Insira o nome do assunto" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o nome do alerta?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input placeholder="Insira o nome do alerta" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o cabeçalho?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input placeholder="" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual a frequência?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input placeholder="Insira as tags" class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o horário? </div>
            <Drop label="09:00" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Mais recente','Mais antigos']" class="col-2" />
            <div class="inputContainer d-flex col-md-12 col-lg-6"></div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4 p-3">Qual o período? </div>
            <Drop label="Especifico" @DropSelect="selecionarMarcas(event)" value="opcoes" :opcoes="['Marcas','Conteúdo','Redes Sociais','Notícias','Sem agrupamento']" class="col-2" />
            <DateRange :periodo="filtro.periodo" class="p-3" />
          </div>

          <div class="footer d-flex flex-row-reverse">
            <Button green label="Proxímo"/>
          </div>
        </div>

        <div v-if="abaSelecionada == 3" class="containerVue">
         <div class="envio row">
            <div class="label col-md-12 col-lg-4">Qual o canal de envio?</div>
            <div class="inputContainer justify-content-between d-flex col-md-12 col-lg-8">
              <div class="groupBtn">
                <span class="btnComp left">E-mail</span>
                <span class="btnComp midle">Whatsapp</span>
                <span class="btnComp right">SMS</span>
              </div>
              <i class="fas fa-check-circle"></i>
            </div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4">Quais os emails dos usuários da plataforma?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emailsExternos row">
            <div class="label col-md-12 col-lg-4">Quais os e-mails externos?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="telefones row">
            <div class="label col-md-12 col-lg-4">Quais os números dos usuários?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="footer d-flex flex-row-reverse">
            <Button white label="Cancelar"/>
            <Button green label="Enviar"/>
          </div>
 
        </div>


  </div>`,
});

new Vue({ el: "#novoAlerta" });
