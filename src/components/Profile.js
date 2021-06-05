import * as net from '../data/index'  

export default{
    name: 'Profile', 
    data: () => ({
        tabs: [],
        namenav: '', 
    }),
    created: function(){
        if (this.$global.token != null && this.$global.user != null){
            this.tabs.push( 
                { name: "MisCitas",  link: "/MisCitas", icon: "mdi-clipboard-file" }, 
                { name: "CrearCitas",  link: "/CrearCitas", icon: "mdi-file-edit-outline" }, 
                { name: "Clientes",  link: "/Clientes", icon: "mdi-account-group-outline" }, 
                { name: "Usuarios",  link: "/Usuarios", icon: "mdi-account" })
            this.nameForDashBoard()
        }
    },
    methods:{
        close(){
            net.closeSession()
        },
        profile(){
            net.redirectPage("/Perfil")
        },
        nameForDashBoard(){
            var f = this.$global.user.nombre.charAt(0)
            var l = this.$global.user.apellido.charAt(0)
            this.namenav = f+l
        }
    }, 
}