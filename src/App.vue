<template>
    <v-app>  
        <v-navigation-drawer  v-model="drawer" absolute temporary v-if="($global.token != null && $global.user != null)">
            <profile/>
        </v-navigation-drawer>
        
        <navbar/>
            
        <v-main>
            <v-app-bar-nav-icon @click="drawer = true" v-if="($global.token != null && $global.user != null)"></v-app-bar-nav-icon>
            <router-view/> 
        </v-main> 

    </v-app>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Montserrat:wght@300&display=swap');
</style>

<script>
import navbar from '../src/components/navBar.vue' 
import profile from '../src/components/Profile.vue' 

export default {
    name: 'App',

    data: () => ({ 
        drawer: false 
        
    }),
    mounted(){  

    },
    components:{ 
        navbar,  
        profile
    }
};
</script>
