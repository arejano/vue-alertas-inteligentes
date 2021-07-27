export const IconList = Vue.component("iconList", {
  name: "miniButton",
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="iconList pt-1 pl-3" style="user-select:none">
    <i class="tt fas" v-bind:class="icon"></i>
  </div>`,
});

export const Icon = Vue.component("Icon", {
  name: "Icon",
  props: {
    icon: {
      type: String,
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
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {
    constructorIconClass(colorClass){
      return `${colorClass} ${icon}`
    }
  },
  template: `
  <span class="pt-1 pl-3" style="user-select:none"
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
    <i :class="icon"></i>
  </span>`,
});

export const Chevron = Vue.component("Chevron", {
  name: "Chevron",
  props: {
    value: {
      type: Boolean,
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
    bgHover: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
    <i 
      class="fas p-2 rounded" 
        v-bind:class="[
          {'text-green':textGreen},
          {'fa-chevron-down': !value},
          {'fa-chevron-up': value},
          {'text-success':textSuccess},
          {'text-secondary':textSecondary},
          {'text-warning':textWarning},
          {'text-info':textInfo},
          {'text-danger':textDanger},
          {'text-light':textLight},
          {'text-dark':textDark},
          {'bgHover':bgHover},
        ]"
    ></i>`,
});
