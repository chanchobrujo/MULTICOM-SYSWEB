<template>
    <v-container fluid v-if="!($global.token == null || $global.user == null)">
        Mis citas 
    </v-container>
</template>
<script src="./MisCitas.js"></script>