<template>
    <v-container > 
        Inicio
        <div v-if="$global.isrender">
            {{ "Bienvenido "+$global.user.nombre }}
        </div>
    </v-container> 
</template>