import * as net from '../../data/index'  

export default{
    data(){
        return{

        }
    },
    created: function () {
        if ($global.noRender) net.redirectPage("/Login") 
    }
}