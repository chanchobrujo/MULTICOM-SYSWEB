<template>
    <v-container fluid v-if="!($global.token == null || $global.user == null)">
        {{ $global.user }}
    </v-container>
</template>