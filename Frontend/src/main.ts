// src/main.ts
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

// PrimeVue imports
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'; // Import the theme
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

// PrimeVue CSS
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '@primevue/themes/aura/theme.css'; // Ensure theme is imported

const app = createApp(App);

app.use(store);
app.use(router);

// PrimeVue setup with theme preset and ToastService
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ToastService);

// Register Toast globally
app.component('PrimeToast', Toast);

// Mount the app to the DOM
app.mount('#app');
