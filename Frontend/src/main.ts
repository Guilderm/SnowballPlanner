// src/main.ts
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(store);
app.use(router);

// PrimeVue setup
app.use(PrimeVue);

// Mount the app to the DOM
app.mount('#app');
