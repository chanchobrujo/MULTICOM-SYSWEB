<template>
	<v-container fluid v-if="$global.isrender">
		<v-row no-gutters>
			<v-col
				v-for="item in reservations"
				:key="item.id"
				class="ma-2"
				cols="12"
				sm="3"
			>
				<v-badge
					bottom
					overlap
					:color="
						item.estado == 'Cita cancelada.'
							? 'red'
							: item.estado == 'Cita expirada.'
							? 'orange'
							: 'green'
					"
				>
					<v-card class="pa-2" elevation="4" shaped>
						<v-card-title> {{ item.fecha }} </v-card-title>
						<v-card-text>
							<v-alert
								border="left"
								colored-border
								color="secondary"
								elevation="1"
							>
								{{ item.proposito }}
							</v-alert>
							{{ item.horaInicio + " - " + item.horaFin }}
							<br />
							{{ item.estado }}
							<v-divider class="ma-2"></v-divider>
							<v-chip-group
								v-for="cliente in item.clientes"
								:key="cliente.id"
							>
								<v-chip color="primary" outlined class="ma-1" label>
									{{ cliente.nombre + " " + cliente.apellido }}
								</v-chip>
							</v-chip-group>
						</v-card-text>
						<v-card-actions>
							<router-link
								:to="{
									name: 'citaDetails',
									params: { id: item.id },
								}"
								style="text-decoration: none;"
							>
								<v-btn color="primary" text>
									Ver detalle
								</v-btn>
							</router-link>
						</v-card-actions>
					</v-card>
				</v-badge>
			</v-col>
		</v-row>
	</v-container>
</template>
<script src="./MisCitas.js"></script>
