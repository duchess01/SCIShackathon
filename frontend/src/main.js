import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Chart from 'primevue/chart'; 
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DataView from 'primevue/dataview';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import PickList from 'primevue/picklist';
import OrderList from 'primevue/orderlist';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Chips from 'primevue/chips';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import SelectButton from 'primevue/selectbutton';
import MultiSelect from 'primevue/multiselect';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import TabPanel from 'primevue/tabpanel';
import Accordion from 'primevue/accordion';
import Listbox from 'primevue/listbox';
import Panel from 'primevue/panel';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Avatar from 'primevue/avatar';
import Menubar from 'primevue/menubar';
import Breadcrumb from 'primevue/breadcrumb';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Menu from 'primevue/menu';
import MegaMenu from 'primevue/megamenu';
import PanelMenu from 'primevue/panelmenu';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';

// Import Bootstrap and Popper
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});

router.beforeEach((to, from, next) => {
    const userRole = localStorage.getItem('userRole');
    
    if (to.path === '/' && userRole === 'user') {
        next('/user-dashboard');
    } else if (to.path === '/user-dashboard' && userRole === 'admin') {
        next('/');
    }

        // Allow other routes to proceed
        else {
            next();
        
    }
});

app.use(ToastService);
app.use(ConfirmationService);
app.component('Chart', Chart); 
app.component('DataView', DataView);
app.component('PickList', PickList);
app.component('DataTable', DataTable); 
app.component('Column', Column);
app.component('OrderList', OrderList);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('Calendar', Calendar);
app.component('Chips', Chips);
app.component('Dialog', Dialog);
app.component('Toast', Toast);
app.component('SelectButton', SelectButton);
app.component('MultiSelect', MultiSelect);
app.component('Slider', Slider);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('TabPanel', TabPanel);
app.component('Accordion', Accordion);
app.component('Panel', Panel);
app.component('Fieldset', Fieldset);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Galleria', Galleria);
app.component('Avatar', Avatar);
app.component('Listbox', Listbox);
app.component('Menubar', Menubar);
app.component('Breadcrumb', Breadcrumb);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TieredMenu', TieredMenu);
app.component('Menu', Menu);
app.component('MegaMenu', MegaMenu);
app.component('PanelMenu', PanelMenu);


app.mount('#app');
