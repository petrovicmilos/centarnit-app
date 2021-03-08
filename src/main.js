import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
AOS.init({
    duration: 1000,
    
});

app.use(VueScrollTo, {
    container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
})
app.use(AOS)
app.use(router)
app.mount('#app')
