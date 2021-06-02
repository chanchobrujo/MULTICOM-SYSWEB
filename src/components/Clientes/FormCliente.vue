<template>
    <v-container >
        <form @submit.prevent="save" v-if="($global.token != null && $global.user != null)">
            <v-card width="400" class="pa-3 mx-auto mt-9" elevation="9">
                <v-card-title>{{type + " "}}un cliente</v-card-title>
                <v-card-text>
                    <v-text-field v-model="nombre" label="Nombre" prepend-icon="mdi-account" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('nombre')}}</span> 

                    <v-text-field v-model="apellido" label="Apellido" prepend-icon="mdi-account" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('apellido')}}</span> 

                    <v-text-field v-model="email" label="Correo" prepend-icon="mdi-email" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('email')}}</span> 

                    <v-text-field v-model="numero" type="number" label="Número" prepend-icon="mdi-phone" ></v-text-field> 
                    <span class="red--text">{{validation.firstError('numero')}}</span> 

                </v-card-text>
                <v-card-actions>  
                    <v-btn type="submit" color="primary" text >
                        Guardar
                    </v-btn>
                    <v-btn color="primary" text @click="clear"> 
                        Limpiar
                    </v-btn>
                    <v-btn color="primary" text @click="$router.push('/Clientes')"> 
                        REGRESAR
                    </v-btn>
                </v-card-actions>
                <v-alert v-model="viewalert" :color="viewcolor" :icon="viewicon" border="right" dense text dismissible>
                    {{message}}
                </v-alert>
            </v-card>
        </form>
    </v-container>
</template> 
<script src="./_FormCliente.js"></script>