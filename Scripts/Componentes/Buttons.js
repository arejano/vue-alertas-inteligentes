import {Tooltip} from './Tooltip.js'

export const Button = Vue.component("Button", {
  name: "Button",
  props: {
    label: {
      type: String,
    },
    tooltip:{
      type:String,
      default:null
    },
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
    small: { type: Boolean },
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
    };
  },
  methods: {
  },
  watch: {},
  computed: {},
  template: `
  <div>
    <Tooltip v-if="showTooltip && tooltip != null" :tooltip="tooltip" />
    <button
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
      style="min-height:36px;"
      class="btn"
      v-bind:class="[
      {'btn-small':small},
      {'rounded-pill':pill},
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
    >
      <i v-if="leftIcon" class="" :class="leftIcon"/>
      <i v-if="icon" class="text-gray fs-sm" :class="icon"/>
      <span class="px-4" v-if="label">{{label}}</span>
      <i v-if="rightIcon" class="" :class="rightIcon"/>
      <slot>
      </slot>
    </button>
  </div>`,
});

export const ToggleButton = Vue.component("ToggleButton", {
  name: "ToggleButton",
  props: {
    label: {
      type: String,
    },
    tooltip: {
      type: String,
      default:null,
    },
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
  },
  data() {
    return {
      showTooltip:false,
    };
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="">
    <Tooltip v-if="showTooltip" :tooltip="tooltip" />
    <button
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
      style="min-height:36px;"
      class="btn m-0"
      v-bind:class="[
      {'rounded-pill':pill},
      {'disabled':disabled},
      {'rounded-circle':circle},
      {'btn-primary':primary && toggle},
      {'btn-success':success && toggle},
      {'btn-secondary':secondary && toggle},
      {'btn-warning':warning && toggle},
      {'btn-info':info && toggle},
      {'btn-danger':danger && toggle},
      {'btn-light':light && toggle},
      {'btn-dark':dark && toggle},
      {'font-bold':bold},
      {'bg-white b-default border-top border-bottom': white || !toggle},
      {'transparent':transparent},
      {'btn-expand':expand},
      {'rounded-0 rounded-end':right},
      {'rounded-0 rounded-start':left},
      {'border-0 rounded-0 ':middle},
      ]"
    >
      <i v-if="leftIcon" class="" :class="leftIcon"/>
      <i v-if="icon" class="" :class="icon"/>
      <span class="px-4" v-if="label">{{label}}</span>
      <i v-if="rightIcon" class="" :class="rightIcon"/>
    </button>
  </div>`,
});



export const MiniButton = Vue.component("MiniButton", {
  name: "MiniButton",
  props: {
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    expand: { type: Boolean },
    icon: { type: String, requiered: true },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="p-1">
    <button 
      class="btn"
      v-bind:class="[
      {'btn-primary':primary},
      {'btn-success':success},
      {'btn-secondary':secondary},
      {'btn-warning':warning},
      {'btn-info':info},
      {'btn-danger':danger},
      {'btn-light':light},
      {'btn-dark':dark},
      {'btn-expand':expand},
      ]"
    >
    <i :class="icon"></i>
    </button>
  </div>`,
});

var ButtonRight = Vue.component("ButtonRight", {
  name: "ButtonRight",
  props: {
    label: {
      type: String,
    },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    expand: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="">
    <button 
      class="btn button-right align-items-center"
      v-bind:class="[
      {'btn-primary':primary},
      {'btn-success':success},
      {'btn-secondary':secondary},
      {'btn-warning':warning},
      {'btn-info':info},
      {'btn-danger':danger},
      {'btn-light':light},
      {'btn-dark':dark},
      {'btn-expand':expand},
      ]"
    >
      {{label}}
      <slot>
      </slot>
    </button>
  </div>`,
});

var ButtonMiddle = Vue.component("ButtonMiddle", {
  name: "ButtonMiddle",
  props: {
    label: {
      type: String,
    },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    expand: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="">
    <button 
      class="btn button-middle align-items-center"
      v-bind:class="[
      {'btn-primary':primary},
      {'btn-success':success},
      {'btn-secondary':secondary},
      {'btn-warning':warning},
      {'btn-info':info},
      {'btn-danger':danger},
      {'btn-light':light},
      {'btn-dark':dark},
      {'btn-expand':expand},
      ]"
    >
      {{label}}
      <slot>
      </slot>
    </button>
  </div>`,
});

var ButtonLeft = Vue.component("ButtonLeft", {
  name: "ButtonLeft",
  props: {
    label: {
      type: String,
    },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    light: { type: Boolean },
    dark: { type: Boolean },
    expand: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="">
    <button 
      class="btn button-left align-items-center"
      v-bind:class="[
      {'btn-primary':primary},
      {'btn-success':success},
      {'btn-secondary':secondary},
      {'btn-warning':warning},
      {'btn-info':info},
      {'btn-danger':danger},
      {'btn-light':light},
      {'btn-dark':dark},
      {'btn-expand':expand},
      ]"
    >
      {{label}}
      <slot>
      </slot>
    </button>
  </div>`,
});
