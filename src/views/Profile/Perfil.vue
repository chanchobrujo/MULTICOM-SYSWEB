<template>
    <v-container class="fill-width" v-if="$global.isrender">  
        <v-row no-gutters>
            <v-col cols="12" sm="3" >
                <v-avatar color="secondary" tile size="200" class="pa-3"> 
                    <span class="primary--text text-h1">{{$global.avatar}}</span>
                </v-avatar>
            </v-col>  
            <v-col cols="12" sm="5" >
                <v-simple-table>
                    <template v-slot:default>
                        <tr>
                            <th class="text-left pb-5">
                                Nombre:
                            </th> 
                            <td class="text-left pb-5">
                                {{ $global.user.nombre }}
                            </td> 
                        </tr> 
                        <tr>
                            <th class="text-left pb-5">
                                Apellido:
                            </th> 
                            <td class="text-left pb-5">
                                {{ $global.user.apellido }}
                            </td> 
                        </tr> 
                        <tr>
                            <th class="text-left pb-5">
                                Correo:
                            </th> 
                            <td class="text-left pb-5">
                                {{ $global.user.username }}
                            </td> 
                        </tr> 
                        <tr>
                            <th class="text-left pb-5">
                                Número:
                            </th> 
                            <td class="text-left pb-5">
                                {{ $global.user.numero }}
                            </td> 
                        </tr> 
                        <tr>
                            <th class="text-left pb-5">
                                Rol:
                            </th> 
                            <td class="text-left pb-5"> 
                                <v-chip :color="color" label link outlined >
                                    {{ role }}
                                </v-chip>
                            </td> 
                        </tr>  
                    </template>
                </v-simple-table> 
            </v-col>
            <v-col cols="12" sm="4" >
                <form @submit.prevent="updatePassword"> 
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <th class="pb-5">Cambio de contraseña</th>
                                <th class="pb-5">
                                    <v-btn type="submit" class="primary secondary--text">
                                        <h4>Actualizar</h4>
                                    </v-btn>
                                </th>
                            </thead>
                            <tr>
                                <th class="text-left pb-5">
                                    Contraseña antigua:
                                </th> 
                                <td class="text-left pb-5"> 
                                    <v-text-field v-model="oldpassword" type="password" ></v-text-field> 
                                    <span class="red--text">{{validation.firstError('oldpassword')}}</span>
                                </td> 
                            </tr> 
                            <tr>
                                <th class="text-left pb-5">
                                    Nueva contraseña:
                                </th> 
                                <td class="text-left pb-5">  
                                    <v-text-field v-model="newpassword" type="password" ></v-text-field> 
                                    <span class="red--text">{{validation.firstError('newpassword')}}</span>
                                </td> 
                            </tr> 
                            <tr>
                                <th class="text-left pb-5">
                                    Confirmar contraseña:
                                </th> 
                                <td class="text-left pb-5">  
                                    <v-text-field v-model="confpassword" type="password" ></v-text-field>
                                    <span class="red--text">{{validation.firstError('confpassword')}}</span>
                                </td> 
                            </tr> 
                            <tr>
                                <td colspan="2">
                                    <v-alert v-model="showMessage" :icon="iconMessage" :color="colorMessage" border="left" elevation="2" dense text dismissible >
                                        {{message}}
                                    </v-alert> 
                                </td> 
                            </tr>
                        </template>
                    </v-simple-table> 
                </form>
            </v-col>
        </v-row> 
    </v-container>
</template>
<script src="./Perfil.js"></script>