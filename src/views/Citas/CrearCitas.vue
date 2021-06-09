<template>
    <v-container fluid v-if="$global.isrender"> 
        <v-row no-gutters>
            <v-col cols="12" sm="5" >
                <v-card class="pa-2 ma-3">
                    <v-card-title>
                        Clientes  
                        <v-chip-group column>
                            <v-chip v-for="obj in select" :key="obj.nombre" >
                                {{ obj.nombre }}
                                <v-btn text small @click="remove(obj)">
                                    <v-icon>
                                        mdi-minus
                                    </v-icon>
                                </v-btn>
                            </v-chip>
                        </v-chip-group>
                    </v-card-title>
                    <v-card-text> 
                        <v-simple-table fixed-header height="400px" >
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left headline" colspan="2">
                                            Nombre
                                        </th>
                                        <th class="text-left headline">
                                            Apellido
                                        </th>
                                        <th class="text-left headline">
                                            Número
                                        </th>
                                        <th class="text-left headline">
                                            E-Mail
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in list" :key="item.nombre" >
                                        <td>
                                            <v-btn fab small dark class="primary" @click="add(item)">
                                                <v-icon>
                                                    mdi-plus
                                                </v-icon>
                                            </v-btn>
                                        </td>
                                        <td>{{ item.nombre }}</td>
                                        <td>{{ item.apellido }}</td>
                                        <td>{{ item.numero }}</td>
                                        <td>{{ item.email }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="7" >
                <v-form @submit.prevent="save">
                    <v-card class="pa-2 ma-3">
                        <v-card-title>
                            Registrar cita
                            <v-spacer></v-spacer>
                            <v-alert v-model="showMsg" border="right" :color="viewcolor" dense :icon="viewicon" text dismissible>
                                {{message}}
                            </v-alert>
                            <v-spacer></v-spacer>
                            <v-btn class="primary" type="submit">
                                <v-icon>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-row no-gutters>
                                <v-col cols="12" sm="4" >  
                                    <v-text-field v-model="horaInicio" label="Seleccione hora de inicio" type="time" ></v-text-field> 
                                    <span class="red--text">{{validation.firstError('horaInicio')}}</span> 

                                    <v-text-field v-model="horaFin" label="Seleccione hora de fin" type="time" ></v-text-field> 
                                    <span class="red--text">{{validation.firstError('horaFin')}}</span> 
                                    
                                    <v-textarea v-model="propocito" name="input-7-1" label="Propósito"  hint="..." ></v-textarea>
    
                                </v-col>
                                <v-col cols="12" sm="8" >
                                    <v-date-picker locale="es" class="pa-2" v-model="fecha" :min="hoy" :show-current="false" full-width></v-date-picker>
                                </v-col>
                            </v-row> 
                        </v-card-text> 
                    </v-card> 
                </v-form> 
            </v-col> 
        </v-row>  
    </v-container>
</template>
<script src="./CrearCitas.js"></script>
