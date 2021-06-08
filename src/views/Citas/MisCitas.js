import * as net from '../../data/index'  

export default{
    data(){
        return{

        }
    },
    created: function () {
        if (this.$global.norender) net.redirectPage("/Login") 
    }
}