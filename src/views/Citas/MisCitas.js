import * as net from '../../data/index'  

export default{
    data(){
        return{

        }
    },
    created: function () {
        if (this.$global.token == null || this.$global.user == null) net.redirectPage("/Login")
        console.log(this.$global.user.authorities[0].authority);
    }
}