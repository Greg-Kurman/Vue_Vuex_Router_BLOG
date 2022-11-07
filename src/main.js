import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI/index'
import VFocus from './directives/VFocus'


 
const app = createApp(App)

app.use(store).use(router)

components.forEach(component => {
    app.component(component.name, component)
})

app.directive('focus', VFocus)

app.mount('#app')
