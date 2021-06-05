import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login/Login.vue' 
import Profile from '../views/Profile/Perfil.vue' 
import Recovery from '../views/Login/Recovery.vue' 
import Clientes from '../views/Clientes/Clientes.vue'
import Create from '../views/Clientes/Create.vue'
import Editar from '../views/Clientes/Editar.vue'
import CrearCitas from '../views/Citas/CrearCitas.vue'
import MisCitas from '../views/Citas/MisCitas.vue'
import Usuarios from '../views/Usuarios/Usuarios.vue'
import error404 from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }, 
    {
        path: '/Clientes',                      
        name: 'Clientes',                         
        component: Clientes                     
    },
    {
        path: '/Clientes/Registrar',
        name: 'Create',
        component: Create
    },
    {
        path: '/Clientes/Editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/CrearCitas',
        name: 'CrearCitas',
        component: CrearCitas
    },
    {
        path: '/MisCitas',
        name: 'MisCitas',
        component: MisCitas
    },
    {
        path: '/Usuarios',
        name: 'Usuarios',
        component: Usuarios
    },  
    {
        path: '*',
        name: 'error404',
        component: error404
    }, 
    {
        path: '/Recuperar/Contrasena',  
        name: 'Recovery',
        component: Recovery
    }, 
    {
        path: '/Perfil',  
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
