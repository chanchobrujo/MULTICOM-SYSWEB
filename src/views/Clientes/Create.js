import * as net from '../../data/index'  

export default {
    data(){
        return{
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
    validators:{
        'nombre'(value){
            return this.$validator.value(value).required().minLength(3);
        }, 
        'apellido'(value){
            return this.$validator.value(value).required().minLength(3);
        }, 
        'email'(value){
            return this.$validator.value(value).required().email();
        }, 
        'numero'(value){
            return this.$validator.value(value).required().minLength(9);
        }
    },
    created: function () {
        if ($global.noRender) net.redirectPage("/Login") 
    },
    methods: {
        async save(){
            const _await = await this.$validate() 
            if (!_await) return
            try {
                const res = await this.axios.post('/client/create',{ nombre: this.nombre, apellido: this.apellido, email: this.email, numero: this.numero }) 
                this.message = res.data.mensaje
                
                this.viewcolor = 'green'
                this.viewicon = 'mdi-account'
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
    }
}