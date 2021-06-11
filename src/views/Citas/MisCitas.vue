<template>
    <v-container v-if="$global.isrender"> 
        <v-row no-gutters>
            <v-col v-for="item in reservations" :key="item.id" class="ma-2" cols="12" sm="3" >
                <v-badge bottom overlap color="green">
                    <v-card class="pa-2" elevation="4" shaped>
                        <v-card-title> {{ item.fecha }} </v-card-title>
                        <v-card-text>
                            <v-alert border="left" colored-border color="secondary" elevation="1">
                                {{ item.proposito }}
                            </v-alert>
                            {{ item.horaInicio + " - " + item.horaFin  }}
                            <v-divider class="ma-2"></v-divider> 
                            <v-chip-group v-for="cliente in item.clientes" :key="cliente"> 
                                <v-chip color="primary" outlined class="ma-1" label >{{ cliente.nombre +" "+cliente.apellido }} </v-chip> 
                            </v-chip-group>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" text> 
                                Ver
                            </v-btn>
                            <v-btn color="red" text> 
                                Cancelar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-badge>
            </v-col>
        </v-row>
    </v-container>
</template>
<script src="./MisCitas.js"></script>

<!--

        <div v-for="item in reservations" :key="item">
            <br> 
            {{ item.proposito }}<br>
            Clientes:
            <div v-for="cliente in item.clientes" :key="cliente"> 
                {{" -"+cliente.nombre}} 
            </div>
            {{ item.estado }}<br><br>
        </div>
-->