// src/main.ts
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';

// PrimeVue imports
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

// PrimeVue CSS
import 'primevue/resources/themes/saga-blue/theme.css'; // Using saga-blue theme
import 'primevue/resources/themes/aura/theme.css'; // Correct theme path
import 'primevue/resources/primevue.min.css'; // PrimeVue core CSS
import 'primeicons/primeicons.css'; // PrimeIcons

const app = createApp(App);

// PrimeVue setup with ToastService
app.use(PrimeVue);
app.use(ToastService);

// Register Toast globally
app.component('PrimeToast', Toast);

// Mount the app to the DOM
app.mount('#app');
