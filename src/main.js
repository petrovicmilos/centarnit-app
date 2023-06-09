import { createApp } from 'vue'
import App from './App.vue'
import BaseToast from './components/base/BaseToast.vue'
import BaseSpinner from './components/base/BaseSpinner.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store/index.js'

const app = createApp(App)
AOS.init({
    duration: 800,
    
});

app.component('base-toast', BaseToast)
app.component('base-spinner', BaseSpinner)

app.use(AOS)
app.config.globalProperties.axios=axios
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')
