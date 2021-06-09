<template>
    <v-container v-if="$global.isrender"> 
        <div v-for="item in reservations" :key="item">
            {{ item.fecha }}<br>
            {{ item.horaInicio }}<br>
            {{ item.horaFin }}<br>  
            {{ item.proposito }}<br>
            Clientes:
            <div v-for="cliente in item.clientes" :key="cliente"> 
                {{" -"+cliente.nombre}} 
            </div>
            {{ item.estado }}<br><br>
        </div>
    </v-container>
</template>
<script src="./MisCitas.js"></script>