export default {
    data(){
        return{ 
            value: 0,
            query: false,
            show: true,
            interval: 0,
        }
    },
    methods:{
        queryAndIndeterminate () {
            this.query = true
            this.show = true
            this.value = 0
    
            setTimeout(() => {
                this.query = false
    
                this.interval = setInterval(() => {
                    if (this.value === 100) {
                        clearInterval(this.interval)
                        this.show = false
                        return setTimeout(this.queryAndIndeterminate, 5000)
                    }
                    this.value += 25
                }, 1000)
            }, 2500)
        },
    },
    beforeDestroy () {
        clearInterval(this.interval)
    },
    mounted(){
        this.queryAndIndeterminate()
    }
        
}