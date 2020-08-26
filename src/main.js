import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";

import './assets/css/base.css';
// import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/element-other.less";

import * as api from './assets/js/api';
import * as utils from './assets/js/utils';
import config from "./assets/js/config";

// 引入 element-ui 框架    注意：要按需引入组件
import {
  Alert,
  Button,
  Card,
  DatePicker,
  Dialog,
  Select,
  Option,
  MessageBox,
  Menu,
  MenuItem,
  Row,
  Col,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  RadioGroup,
  Radio,
  RadioButton,
  Pagination,
  Switch,
  Divider,
  Upload,
  Message,
  Popover
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message=Message;
Vue.prototype.$msgbox=MessageBox;

Vue.prototype.$api = api;
Vue.prototype.$utils = utils;
Vue.prototype.$config = config;

Vue.config.productionTip = false

// 禁止输入emoji
Vue.prototype.validForbid = function (value) {
  return value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
