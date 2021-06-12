import * as net from '../../data/index'  

export default{
    data(){
        return{
            reservations: []
        }
    },
    created: function () {
        if (this.$global.norender) net.redirectPage("/Login") 
        else this.listReservation()
    },
    methods: {
        async listReservation(){
            try {
                const res = await this.axios.get('/Reservation/')
                this.reservations = res.data
            } catch (error) {
                console.log( error.response.data ); 
            }
        }
    }
}