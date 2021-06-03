<template>
    <v-container class="fill-width" fluid v-if="($global.token == null || $global.user == null)"> 
        <form @submit.prevent="recovery">
            <v-card width="400" class="pa-3 mx-auto mt-9" elevation="9" >
                <v-card-title>Recuperar contraseña</v-card-title> 
                <v-card-text>
                    <v-alert border="left" colored-border color="secondary" elevation="2" >
                        Se le proporcionarà una contraseña, en su correo electrònico.
                    </v-alert>
                    <v-text-field v-model="email" label="Correo" prepend-icon="mdi-email" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('email')}}</span> 
                </v-card-text>
                <v-card-actions>
                    <v-btn type="submit" color="primary" class="secondary--text" >
                        Recuperar
                    </v-btn>  
                    <router-link :to="{name: 'Login' }" style="text-decoration: none;" >
                        <v-btn color="primary" text >
                            Regresar
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

<script src="./Recovery.js"></script>