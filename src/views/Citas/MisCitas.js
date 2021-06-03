import * as net from '../../data/index'  

export default{
    data(){
        return{

        }
    },
    created: function () {
        if (this.$global.token == null || this.$global.user == null) net.redirectPage("/Login") 
    }
}