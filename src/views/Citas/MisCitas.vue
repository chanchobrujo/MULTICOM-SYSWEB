<template>
    <v-container fluid v-if="!($global.token == null || $global.user == null)">
        Mis citas
        {{ $global.user.authorities[0].authority }} 
    </v-container>
</template>
<script src="./MisCitas.js"></script>