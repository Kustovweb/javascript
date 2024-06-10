import { createApp } from 'vue'
import './assets/style.sass'
import App from './App.vue'
const app = createApp(App)
import components from './UI'

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
