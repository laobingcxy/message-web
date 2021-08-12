import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/utils/iconfont'







import 'element-plus/lib/theme-chalk/index.css'

// 3.0写法
createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
