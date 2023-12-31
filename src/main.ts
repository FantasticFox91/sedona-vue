import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './scss/style.scss';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('.app')

// "build": "run-p type-check build-only",
