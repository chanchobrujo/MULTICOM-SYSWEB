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
            return na+nb
            
        } catch (error) {
            return ""
        }
    }
    get itemsNav(){
        const items = []
        if (this.user != null && this.token != null) {
            items.push({ name: "MisCitas",   link: "/MisCitas",   icon: "mdi-clipboard-file" }, 
            { name: "CrearCitas", link: "/CrearCitas", icon: "mdi-file-edit-outline" }, 
            { name: "Clientes",   link: "/Clientes",   icon: "mdi-account-group-outline" }, 
            { name: "Usuarios",   link: "/Usuarios",   icon: "mdi-account" })
        }
        return items
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
