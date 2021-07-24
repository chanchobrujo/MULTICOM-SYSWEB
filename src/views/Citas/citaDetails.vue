<template>
	<v-container
		class="fill-width"
		fluid
		v-if="$global.isrender"
	>
		<v-card width="550" class="pa-3 mx-auto " elevation="9">
			<v-card-title>Detalle de cita</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="6">
						<v-text-field
							v-model="citadata.fecha"
							readonly
							filled
							outlined
							label="Fecha de cita"
							prepend-icon="mdi-calendar"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="3">
						<v-text-field
							v-model="citadata.horaInicio"
							readonly
							filled
							outlined
							label="Inicio"
							prepend-icon="mdi-clock"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="3">
						<v-text-field
							v-model="citadata.horaFin"
							readonly
							filled
							outlined
							label="Final"
							prepend-icon="mdi-clock"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="6">
						<v-text-field
							v-model="citadata.usuario.nombre"
							readonly
							filled
							outlined
							label="Usuario que la registró"
							prepend-icon="mdi-account"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="6">
						<v-text-field
							v-model="citadata.proposito"
							readonly
							filled
							outlined
							label="Propócito"
							prepend-icon="mdi-text"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="6">
						<h3>Clientes</h3>
						<v-chip-group
							v-for="cliente in citadata.clientes"
							:key="cliente.id"
						>
							<v-chip color="primary" outlined class="ma-1" label>
								{{ cliente.nombre + " " + cliente.apellido }}
							</v-chip>
						</v-chip-group>
					</v-col>
					<v-col cols="12" sm="6">
						<h3>Reclamo:</h3>
						<div v-for="item in citadata.reclamo" :key="item.id">
							<v-card>
								<v-card-title>
									{{ item.motivo }}
								</v-card-title>
								<v-card-text>
									{{ item.descripcion }}
								</v-card-text>
								<v-divider class="mx-4"></v-divider>
								{{ item.fecha }}
							</v-card>
						</div>
					</v-col>
				</v-row>
				{{ citadata.estado }}
			</v-card-text>
		</v-card>
	</v-container>
</template>
<script src="./citaDetails.js"></script>
