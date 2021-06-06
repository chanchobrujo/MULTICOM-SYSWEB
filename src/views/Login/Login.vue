<template> 
    <v-container class="fill-width" fluid v-if="$global.noRender">  
        <form @submit.prevent="login">
            <v-card width="400" class="pa-3 mx-auto mt-9" elevation="9" >
                <v-card-title>Inicio de sesión</v-card-title>
                <v-card-text>
                    <v-text-field v-model="email" label="Correo" prepend-icon="mdi-email" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('email')}}</span>
                    <v-text-field v-model="passw" label="Contraseña" prepend-icon="mdi-lock" type="password"></v-text-field> 
                    <span class="red--text">{{validation.firstError('passw')}}</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn type="submit" color="primary" class="secondary--text">
                        Ingresar
                    </v-btn> 
                    <router-link :to="{name: 'Recovery' }" style="text-decoration: none;" >
                        <v-btn color="primary" text >
                            Recuperar contraseña
                        </v-btn> 
                    </router-link>
                </v-card-actions> 
                <v-alert v-model="viewalert" border="right" :color="viewcolor" dense :icon="viewicon" text dismissible>
                    {{message}}
                </v-alert>
            </v-card>   
        </form>  
    </v-container> 
    
</template> 
<script src="./Login.js"></script>
