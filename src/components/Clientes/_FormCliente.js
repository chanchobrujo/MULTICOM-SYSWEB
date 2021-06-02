import FormCliente from './FormCliente'
import * as net from '../../data/index'  

export default{
    name: 'From',
    data(){
        return{
            id: this.$route.params.id,
            
            nombre: '', 
            apellido: '', 
            email: '', 
            numero: '',

            viewalert: false,
            viewcolor: 'green',
            viewicon: 'mdi-account',  
            message: '', 
        }
    }, 
    props: {
        type: String
    },
    validators:{
        'nombre'(value){
            return this.$validator.value(value).required().minLength(4);
        }, 
        'apellido'(value){
            return this.$validator.value(value).required().minLength(4);
        }, 
        'email'(value){
            return this.$validator.value(value).required().email();
        }, 
        'numero'(value){
            return this.$validator.value(value).required().minLength(9);
        }
    },
    created: function () {
        if (this.$global.token == null || this.$global.user == null) net.redirectPage("/Login") 
        else this.extrData() 
    },
    methods:{
        async extrData(){
            const res = await this.axios.get('/client/detail/'+this.id)  
            this.nombre = res.data.nombre
            this.apellido = res.data.apellido
            this.email = res.data.email
            this.numero = res.data.numero
        },
        async save(){
            const _await = await this.$validate() 
            if (!_await) return
            try {
                const res = []
                
                res = await this.axios.put('/client/update/'+this.id,{ nombre: this.nombre, apellido: this.apellido, email: this.email, numero: this.numero }) 
                this.message = res.data.mensaje
            } catch (error) {
                this.viewcolor = 'red'
                this.viewicon = 'mdi-block-helper'
                this.message = error.response.data.mensaje
            }
            this.viewalert = true 
            this.clear()
        },
        clear(){
            this.nombre = '',
            this.apellido = '',
            this.email = '',
            this.numero = '' 
        }
    },
    components:{ 
        FormCliente
    },
}