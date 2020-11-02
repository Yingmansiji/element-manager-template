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
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

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
