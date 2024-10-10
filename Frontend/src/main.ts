// src/main.ts
import './style.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import store from './store/index';
import router from './router/index';



const app = createApp(App);

// Use store and router
app.use(store);
app.use(router);

// PrimeVue setup
app.use(PrimeVue, { unstyled: true });

// Mount the app to the DOM
app.mount('#app');
