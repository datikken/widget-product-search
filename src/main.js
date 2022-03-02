import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index'

const app = createApp(App)

app.use(store)

//Should be last action
app.mount('#app')