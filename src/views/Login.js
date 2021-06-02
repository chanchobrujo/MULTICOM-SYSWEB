import * as net from '../data/index'  
import Loader from '../components/Loader.vue'

export default {
    data(){
        return{
            email: '',
            passw: '',
            viewalert: false,
            message: '', 

            isLoading: false,
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
            this.isLoading = true
            
            try { 
                this.isLoading = true
                const res = await this.axios.post('/auth/loginForTheAdmin',{email: this.email, password: this.passw})  
                net.addVarLS("token", res.data.token)
                net.addVarLS("user", res.data.userDetails) 
                net.redirectPage("/MisCitas")  
            } catch (error) {   
                this.message = error.response.data.mensaje
                this.viewalert = true
                this.isLoading = false
            } 
        }, 

    }, 
    created: function () {
        if (this.$global.token != null && this.$global.user != null) net.redirectPage("/MisCitas")   
        if (this.$global.token == null || this.$global.user == null) return 
    },
    components:{
        Loader
    }
}               

