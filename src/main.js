import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios' 
import SimpleVueValidator from 'simple-vue-validator'
import {Global} from './data/index'

const global = new Global() 

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_URL     
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${global.getToken}`;
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

Vue.use(SimpleVueValidator,{
    mode: 'manual',
    templates:{
        error: "Error.",
        required: "Requerido.",
        float: "Debe ser un número.",
        integer: "Debe ser un entero.",
        number: "Debe ser un número.",
        lessThan: "Debe ser menor a {0}.",
        lessThanOrEqualTo: "Debe ser menor o igual a {0}.",
        greaterThan: "Debe ser mayor a {0}.",
        greaterThanOrEqualTo: "Debe ser mayor o igual a {0}.",
        between: "Debe estar entre {0} y {1}.",
        size: "El tamaño deberia ser {0}.",
        length: "Debe ingresar {0} carácteres.",
        minLength: "Como mínimo se deben ingresar {0} carácteres.",
        lengthBetween: "Como máximo se deben ingresar {0} carácteres.",//-----------
        in: "Debe ser {0}.",
        notIn: "No debe ser {0}.",
        match: "No se pueden comparar.",
        regex: "Formato inválido.",
        digit: "Debe ingresar un dígito.",
        email: "Email inválido.",
        url: "Url inválida." 
    }
})

Vue.use({
    install(Vue){
        Object.defineProperty(Vue.prototype, "$validator",{
            value: SimpleVueValidator.Validator
        })
    }
})

Vue.use({
    install(Vue){
        Object.defineProperty(Vue.prototype, "$global",{
            value: {
                token: global.getToken,
                user: global.getUser,  
                avatar: global.nameAvatar,  
                items: global.itemsNav,  
                isrender: global.isRender,   
                norender: global.noRender,   
            }, 
        })
    }
}) 

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
