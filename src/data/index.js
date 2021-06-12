class Global{
    constructor () {
        this.token = JSON.parse(localStorage.getItem("token"));
        this.user  = JSON.parse(localStorage.getItem("user"));
    } 
    
    get getToken() {
        return this.token;
    }
    get getUser() {
        return this.user;
    }
    get nameAvatar(){  
        try {
                        
            var na = this.user.nombre.charAt(0)
            var nb = this.user.apellido.charAt(0)
            return na + nb
                        
        } catch (error) {
            return ""
        }
    }
    get itemsNav(){
        try {
            const items = []
            const authorities = this.user.authorities 

            let authority = false 

            if(this.token != null && this.user != null)
                for (let index = 0; index < authorities.length; index++) if ( authorities[index].authority == "ROLE_ADMIN" ) authority = true
            
            if (this.token != null && this.user != null) 
                items.push(
                { name: "Citas empresariales", link: "/MisCitas", icon: "mdi-clipboard-file" }, 
                { name: "Crear una cita", link: "/CrearCitas", icon: "mdi-file-edit-outline" }, 
                { name: "Administación de clientes", link: "/Clientes", icon: "mdi-account-group-outline" },) 

            if (this.token != null && this.user != null && authority == true) 
                items.push({ name: "Administación de usuarios", link: "/Usuarios", icon: "mdi-account" }) 
            
            return items
        } catch (error) { 
            return null
        }
    }
    get isRender(){
        if (this.token != null && this.user != null) return true
        else false
    } 
    get noRender(){
        if (this.token == null || this.user == null) return true
        else false
    } 
} 

function closeSession() { 
    localStorage.clear()
    window.location.href = process.env.VUE_APP_FRONT_URL + "/Login"
}

function addVarLS(name, re){
    localStorage.setItem( name , JSON.stringify( re )) 
}

function redirectPage(page){
    window.location.href = process.env.VUE_APP_FRONT_URL + page  
}

export {Global, closeSession, addVarLS, redirectPage}
