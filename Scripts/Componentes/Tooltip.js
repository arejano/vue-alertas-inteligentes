export const Tooltip = Vue.component("Tooltip", {
  name: "Tooltip",
  props: {
    icon: {
      type: String,
    },
    tooltip: {
      type: String,
      default: "Texto da Tooltip Não definido",
    },
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
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    white: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="cp-tooltip" style="user-select:none"
    v-bind:class="[
      {'text-green':textGreen},
      {'text-success':textSuccess},
      {'text-secondary':textSecondary},
      {'text-warning':textWarning},
      {'text-info':textInfo},
      {'text-danger':textDanger},
      {'text-light':textLight},
      {'text-dark':textDark},
    ]"
  >
    <span class="tooltiptext">{{tooltip}}</span>
  </div>`,
});
