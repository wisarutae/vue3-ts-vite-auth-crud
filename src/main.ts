import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers'
// import './tailwind.css'
// import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-sb-admin/dist/css/styles.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'startbootstrap-sb-admin/dist/js/scripts.js'
import './custom.css'

createApp(App).use(router).mount('#app')
