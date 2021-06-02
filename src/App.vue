<template>
    <v-app>
        <navbar/>
            
        <v-main>
            <router-view/> 
        </v-main>

        <!--<v-footer app color="primary">-->
            
        <!--</v-footer>-->
    </v-app>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Montserrat:wght@300&display=swap');
</style>

<script>
import navbar from '../src/components/navBar.vue'

export default {
    name: 'App',

    data: () => ({ 
        
    }),
    mounted(){  

    },
    components:{ 
        navbar
    }
};
</script>
