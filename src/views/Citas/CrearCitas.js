import * as net from '../../data/index'  

export default{
    data(){
        return{
            hoy: new Date().toISOString().substr(0, 10),
            fecha: new Date().toISOString().substr(0, 10), 
            horaInicio: null, 
            horaFin: null, 

            showMsg: false, 
            viewcolor: 'green',
            viewicon: 'mdi-check', 
            message: '',
            
            list: [],
            select: [],
            clientID: [] 
        }
    },
    validators:{
        'horaInicio'(value){
            return this.$validator.value(value).required();
        }, 
        'horaFin'(value){
            return this.$validator.value(value).required(); 
        }, 
    },
    created: function () {
        if ($global.noRender) net.redirectPage("/Login") 
        else this.listarClientes()
    },
    mounted(){ 

    },
    methods:{
        async save(){ 
            const _await = await this.$validate() 
            if (!_await) return
            
            for (let index = 0; index < this.select.length; index++) this.clientID.push( this.select[ index ].id )

            console.log("Hola...");
            console.log(this.clientID);

            try {
                const res = await this.axios.post('/Reservation/create',{ fecha: this.fecha, horaInicio: this.horaInicio, horaFin: this.horaFin, estado: "En proceso.", idusuario: this.$global.user.id, clientes: this.clientID })

                this.showMsg = true
                this.message = res.data.mensaje
                
                this.viewcolor = 'green'
                this.viewicon = 'mdi-check'
            } catch (error) { 
                this.showMsg = true
                this.viewicon = 'mdi-block-helper'
                this.viewcolor = 'red'
                this.message = error.response.data.mensaje  
            } finally{
                this.listarClientes()
                this.select.splice(0, 2)
            }

        },
        async listarClientes(){ 
            const res = await this.axios.get('/client/') 
            this.list = res.data 
        },
        add( item ){
            var index = this.list.indexOf(item)
            
            this.select.push( item )        
            this.list.splice( index , 1 )               
        },
        remove( item ){
            var index = this.select.indexOf(item)   
            
            this.list.push( item )   
            this.select.splice( index , 1 )                     
        }
    }
}