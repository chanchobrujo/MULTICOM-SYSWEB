<template>                     
    <v-app-bar app color="primary" dark dense>
        <div class="d-flex align-center">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40" /> 
            <div  class="font-weight-black headline shrink mt-1 hidden-sm-and-down secondary--text pr-5" contain min-width="100">MULTICOM</div>
        </div>                 

        <div class="d-flex align-center" v-for="item in tabs" :key="item.name">  
            <router-link :to="item.link" class="secondary--text pa-2" style="text-decoration: none;">
                <v-icon color="secondary" >
                    {{item.icon}}
                </v-icon>
                {{item.name}}
            </router-link>   
        </div> 

        <v-spacer></v-spacer>
            
        <router-link to="/Login" style="text-decoration: none;" v-if="($global.token == null || $global.user == null)">
            <v-btn text class="secondary--text">
                <span class="mr-2">Iniciar sesión</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </router-link> 
        
        <v-menu bottom rounded v-if="($global.token != null && $global.user != null)">
            <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on" >
                    <v-avatar size="48" > 
                        <span class="secondary--text headline">{{namenav}}</span>
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
                        <v-btn depressed rounded text >
                            Editar datos
                        </v-btn> 
                        <v-btn depressed rounded text @click="close">
                            Salir
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>  
    </v-app-bar>
</template>
<script src="./navBar.js"></script>