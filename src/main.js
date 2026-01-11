//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import './css/main.css' //Esto eraq tailwind pero no hace falta importar aquí ya que está en el index.html

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
