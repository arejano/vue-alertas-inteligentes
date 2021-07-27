export const CpInput = Vue.component("CpInput", {
  name: "CpInput",
  props: {
    value:{
      type:String
    },
    label: {
      type: String,
    },
     labelLeft: {
      type: String,
    },
    tooltip:{
      type:String,
      default:null
    },
    required: { type: Boolean},
    icon: { type: String, default: "" },
    leftIcon: { type: String, default: "" },
    rightIcon: { type: String, default: "" },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    white: { type: Boolean },
    expand: { type: Boolean },
    bold: { type: Boolean },
    circle: { type: Boolean },
    pill: { type: Boolean },
    disabled: { type: Boolean },
    transparent: { type: Boolean },
    right: { type: Boolean },
    left: { type: Boolean },
    middle: { type: Boolean },
    toggle: { type: Boolean },
    textPrimary: { type: Boolean },
    textSecondary: { type: Boolean },
    textSuccess: { type: Boolean },
    textInfo: { type: Boolean },
    textWarning: { type: Boolean },
    textDanger: { type: Boolean },
    textLight: { type: Boolean },
    textDark: { type: Boolean },
    textWhite: { type: Boolean },
    textGreen: { type: Boolean },
  },
  data() {
    return {
      showTooltip:false,
      alertField:false,
    };
  },
  methods: {
    onChange: function (value) {
      this.$emit("input", value);
    },
    fieldRequired(){
      if(this.required && this.value.length == 0){
        this.alertField = true;
      }else{
        this.alertField = false;
      }
    },
  },
  watch: {},
  computed: {},
  template: `
  <div class="w-full align-items-center gap-2">
    <label v-if="label" class="topLabel">{{label}}</label>
    <div class="d-flex align-items-center gap-3">
      <i v-if="leftIcon" class="" :class="leftIcon"/>
      <input
        :value="value"
        style="min-height:36px;"
        class="form-control rounded" 
        placeholder="Digite o nome do alerta"
        @input="onChange($event.target.value)"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
        @focusout="fieldRequired()"
        v-bind:class="[
          {'input-error':alertField},
          {'disabled':disabled},
          {'rounded-circle':circle},
          {'btn-primary':primary},
          {'btn-success':success},
          {'btn-secondary':secondary},
          {'btn-warning':warning},
          {'btn-info':info},
          {'btn-danger':danger},
          {'btn-light':light},
          {'btn-dark':dark},
          {'font-bold':bold},
          {'bg-white b-default':white},
          {'transparent rounded-3':transparent},
          {'btn-expand':expand},
          {'rounded-0 rounded-end':right},
          {'rounded-0 rounded-start':left},
          {'border-0 rounded-0 ':middle},
          {'text-green':textGreen},
          {'text-success':textSuccess},
          {'text-secondary':textSecondary},
          {'text-warning':textWarning},
          {'text-info':textInfo},
          {'text-danger':textDanger},
          {'text-light':textLight},
          {'text-dark':textDark},
        ]"
      />
      <i v-if="rightIcon" class="" :class="rightIcon"/>
    </div>
    <label v-if="alertField && value.length == 0" class="text-danger bottomAlert">Preenchimento obrigatorio</label>
  </div>`,
});


