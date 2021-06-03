import * as net from '../../data/index.js'   

export default {
    data(){
        return{
            email: '',
            passw: '',
            viewalert: false,
            viewcolor: 'red',
            viewicon: 'mdi-alert',  
            message: '',  
        }
    },  
    validators:{
        'email'(value){
            return this.$validator.value(value).required().email();
        },
        'passw'(value){
            return this.$validator.value(value).required().minLength(6);
        },
    },
    methods: {
        async login(){ 
            const _await = await this.$validate()
            if (!_await) return 
            
            try {  
                const res = await this.axios.post('/auth/users',{email: this.email, password: this.passw})  
                net.addVarLS("token", res.data.token)
                net.addVarLS("user", res.data.userDetails) 
                net.redirectPage("/MisCitas")  
            } catch (error) {   
                this.message = error.response.data.mensaje
                this.viewalert = true 
            } 
        }, 

    }, 
    created: function () {
        if (this.$global.token != null && this.$global.user != null) net.redirectPage("/MisCitas")   
        if (this.$global.token == null || this.$global.user == null) return 
    } 
}               

