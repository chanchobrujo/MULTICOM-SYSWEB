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
