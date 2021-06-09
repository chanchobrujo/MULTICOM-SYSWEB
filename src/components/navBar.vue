<template>                     
    <v-app-bar app color="primary" dark dense>
        <div class="d-flex align-center" >
            <router-link :to="{name: 'Inicio' }" style="text-decoration: none;" >
                <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40" /> 
            </router-link>
            
            <div class="font-weight-black headline shrink mt-1 secondary--text pr-5" contain min-width="100">MULTICOM</div>
        </div>                 

        <div class="d-flex align-center" v-for="item in $global.items" :key="item.name"  >  
            <router-link :to="item.link" class="secondary--text pa-2 hidden-sm-and-down" style="text-decoration: none;">
                <v-icon color="secondary" >
                    {{item.icon}}
                </v-icon>
                {{item.name}}
            </router-link>      
        </div> 

        <v-spacer></v-spacer>
            
        <router-link to="/Login" style="text-decoration: none;" v-if="$global.norender">
            <v-btn text class="secondary--text">
                <span class="mr-2">Iniciar sesión</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </router-link> 
        
        <v-menu bottom rounded v-if="$global.isrender">
            <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on" class="hidden-sm-and-down">
                    <v-avatar size="48" > 
                        <span class="secondary--text headline">{{$global.avatar}}</span>
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center"> 
                        <h3>{{$global.user.nombre}}</h3>
                        <p class="caption mt-1"> {{$global.user.apellido}} </p>
                        <p class="caption mt-1"> {{$global.user.username}} </p>
                        <v-divider class="my-3"></v-divider>
                        <router-link to="/Perfil" style="text-decoration: none;">
                            <v-btn depressed rounded text >
                                Editar datos
                            </v-btn> 
                        </router-link>
                        <v-btn depressed rounded text @click="close">
                            Salir
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>  
    </v-app-bar>
    
</template>

<script>
import * as net from '../data/index'    

export default{
    name: 'NavBar',  
    methods:{
        close(){ 
            net.closeSession()
        },
        profile(){
            net.redirectPage("/Perfil")
        }, 
    },  
}
</script>