<template>
	<div>
		<v-list-item class="py-5">
			<v-list-item-title>
				<v-avatar color="secondary" size="90">
					<span class="primary--text text-h3">{{
						$global.avatar
					}}</span>
				</v-avatar>
			</v-list-item-title>
			<v-list-item-subtitle>
				{{ $global.user.nombre }}
			</v-list-item-subtitle>
		</v-list-item>
		<v-divider></v-divider>
		<v-list dense nav>
			<v-list-item>
				{{ $global.user.nombre }}
				{{ $global.user.apellido }}
			</v-list-item>
			<v-list-item>
				<v-list-item-subtitle>
					{{ $global.user.username }}
				</v-list-item-subtitle>
			</v-list-item>
		</v-list>
		<v-divider></v-divider>
		<v-list dense nav>
			<v-list-item
				v-for="item in $global.items"
				:key="item.name"
			>
				<router-link
					:to="item.link"
					style="text-decoration: none;"
				>
					<v-list-item-icon>
						<v-icon class="pr-3">{{ item.icon }}</v-icon>
						<v-list-item-title>{{ item.name }}</v-list-item-title>
					</v-list-item-icon>
				</router-link>
			</v-list-item>
		</v-list>
		<router-link to="/Perfil" style="text-decoration: none;">
			<v-btn depressed rounded text>
				Editar datos
			</v-btn>
		</router-link>
		<v-btn depressed rounded text @click="close">
			Salir
		</v-btn>
	</div>
</template>

<script>
import * as net from "../data/index";

export default {
	name: "Profile",
	methods: {
		close() {
			net.closeSession();
		},
	},
};
</script>
