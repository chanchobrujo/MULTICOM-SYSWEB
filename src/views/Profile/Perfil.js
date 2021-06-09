import * as net from '../../data/index'  

export default {
    data() {
        return {
            color: '',
            role: '',

            message: '',
            showMessage: false,
            iconMessage: 'mdi-check',
            colorMessage: 'green',

            showpassword: false,
            showpassword1: false,
            showpassword2: false,

            oldpassword: '',
            newpassword: '',
            confpassword: ''
        }
    },  
    validators:{
        'oldpassword'(value){
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

            

            try {
                const res = await this.axios.post('/Update/Password/'+ this.$global.user.id,{ oldPassword: this.oldpassword,  newPassword: this.newpassword,  confirmPassword: this.confpassword })   
                this.showMessage = true 
                this.colorMessage = 'green'
                this.iconMessage = 'mdi-check' 
                this.message = res.data.mensaje   
                net.closeSession()
            } catch (error) {
                this.showMessage = true 
                this.colorMessage = 'red'
                this.iconMessage = 'mdi-alert' 
                this.message = error.response.data.mensaje 
            }
        }
    }
}