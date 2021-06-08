import * as net from '../../data/index.js'  

export default {
    data(){
        return{
            email: '', 
            message: '', 
            
            viewalert: false,
            viewcolor: 'red',
            viewicon: 'mdi-alert',  
        }
    }, 
    validators:{
        'email'(value){
            return this.$validator.value(value).required().email();
        }, 
    },
    methods: {
        async recovery(){
            const _await = await this.$validate()
            if (!_await) return 

            try { 

                const res = await this.axios.post('/recovery/password',{email: this.email}) 

                this.viewcolor = 'green'
                this.viewicon = 'mdi-email-check '
                this.message = res.data.mensaje 
                this.viewalert = true 

            } catch (error) { 
                this.message = error.response.data.mensaje 
                this.viewalert = true 
            } 
        }
    },
    created: function () { 
        if (this.$global.isRender) net.redirectPage("/MisCitas")   
        if (this.$global.noRender) return 
    } 
}