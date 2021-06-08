import * as net from '../../data/index'  

export default {
    data() {
        return {
            color: '',
            role: '',

            password: '',
            newpassword: '',
            confpassword: ''
        }
    },  
    validators:{
        'password'(value){
            return this.$validator.value(value).required()
        }, 
        'newpassword'(value){
            return this.$validator.value(value).required()
        }, 
        'confpassword'(value){
            return this.$validator.value(value).required()
        }, 
    },
    created: function () {
        if (this.$global.norender) net.redirectPage("/Login") 
        this.viewRole()
    },
    methods:{
        viewRole(){
            const ROLE = {
                'ROLE_ADMIN': 'Administrador',
                'ROLE_MOD': 'Moderador',
                'CLIENTE': 'Cliente',
            }
            const COLOR = {
                'ROLE_ADMIN': 'red',
                'ROLE_MOD': 'green',
                'CLIENTE': 'blue',
            }
            this.role = ROLE[ this.$global.user.authorities[0].authority ] 
            this.color = COLOR[ this.$global.user.authorities[0].authority ] 
        },
        async updatePassword(){
            const _await = await this.$validate()
            if (!_await) return 

            alert()
        }
    }
}