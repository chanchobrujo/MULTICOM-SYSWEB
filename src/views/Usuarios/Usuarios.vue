<template>
    <v-container fluid v-if="$global.isrender"> 
        <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search"  hide-default-footer >
            <template v-slot:header>
                <v-toolbar dark color="primary" class="mb-1 " >
                    <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" class="primary--text" label="Buscar" ></v-text-field>
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-spacer></v-spacer>
                        <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="Buscar por..." ></v-select>
                        <v-spacer></v-spacer>
                        <v-btn-toggle >
                            <router-link to="/Usuarios/Registrar" style="text-decoration: none;" >
                                <v-btn large color="primary" dark>
                                    <v-icon class="secondary--text">mdi-plus</v-icon>
                                </v-btn> 
                            </router-link>
                        </v-btn-toggle>
                    </template>
                </v-toolbar>
            </template>

            <template v-slot:default="props" >
                <v-row>
                    <v-col v-for="item in props.items" :key="item.nombre" class="mt-5" cols="12" sm="6" md="4" lg="3" >
                        <v-card elevation="9" shaped>
                            <v-card-title class="subheading font-weight-bold">
                                {{ item.nombre + " " + item.apellido }}
                            </v-card-title> 
                            <v-divider></v-divider>  
                            <v-list dense>
                                <v-list-item v-for="(key, index) in filteredKeys" :key="index" >
                                    <v-list-item-content :class="{ 'font-weight-black primary--text': sortBy === key }">
                                        {{ key }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end" :class="{ 'font-weight-black primary--text': sortBy === key }" >
                                        {{ item[key.toLowerCase()] }} 
                                    </v-list-item-content> 
                                </v-list-item> 
                            </v-list>
                            <v-divider></v-divider> 
                            <v-card-actions>
                                <router-link :to="{name: 'Editar', params: {id: item.id}}" style="text-decoration: none;" >
                                    <v-btn text color="secondary">
                                        Editar
                                    </v-btn>
                                </router-link> 
                                <v-btn text color="error" @click="_delete(item.id)" >
                                    Eliminar
                                </v-btn> 
                                <v-btn v-if="item.estado == false" text color="red"> 
                                    INACTIVO
                                </v-btn> 
                                <v-btn v-else text color="primary"> 
                                    ACTIVO
                                </v-btn>  
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>        
            </template>

            <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center" >
                    <span class="grey--text">Usuarios por página.</span>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on" >
                                {{ itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)" >
                                <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <span class="mr-4 grey--text" >
                        Page {{ page }} of {{ numberOfPages }}
                    </span>
                    <v-btn fab dark color="primary" class="mr-1" @click="formerPage" >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn fab dark color="primary" class="ml-1" @click="nextPage" >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-row>
            </template>
        </v-data-iterator>
    </v-container>
</template>
<script src="./Usuarios.js"></script>