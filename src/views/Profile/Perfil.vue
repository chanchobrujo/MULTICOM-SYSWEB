<template>
	<v-container class="fill-width" v-if="$global.isrender">
		<v-row no-gutters>
			<v-col cols="12" sm="3">
				<v-avatar color="secondary" tile size="200" class="pa-3">
					<span class="primary--text text-h1">{{ $global.avatar }}</span>
				</v-avatar>
			</v-col>
			<v-col cols="12" sm="4">
				<v-simple-table>
					<template v-slot:default>
						<tr>
							<th class="text-left pb-5">
								Nombre:
							</th>
							<td class="text-left pb-5">
								{{ $global.user.nombre }}
							</td>
						</tr>
						<tr>
							<th class="text-left pb-5">
								Apellido:
							</th>
							<td class="text-left pb-5">
								{{ $global.user.apellido }}
							</td>
						</tr>
						<tr>
							<th class="text-left pb-5">
								Correo:
							</th>
							<td class="text-left pb-5">
								{{ $global.user.username }}
							</td>
						</tr>
						<tr>
							<th class="text-left pb-5">
								Número:
							</th>
							<td class="text-left pb-5">
								{{ $global.user.numero }}
							</td>
						</tr>
						<tr>
							<th class="text-left pb-5">
								Rol:
							</th>
							<td class="text-left pb-5">
								<v-chip :color="color" label link outlined>
									{{ role }}
								</v-chip>
							</td>
						</tr>
					</template>
				</v-simple-table>
			</v-col>
			<v-col cols="12" sm="5">
				<v-card elevation="5" class="pa-2">
					<form @submit.prevent="updatePassword">
						<v-simple-table>
							<thead>
								<th class="pb-5">Cambio de contraseña</th>
								<th class="pb-5">
									<v-btn type="submit" class="primary secondary--text">
										<h4>Actualizar</h4>
									</v-btn>
								</th>
							</thead>
							<tr>
								<td colspan="2">
									<v-card-text>
										<v-alert border="left" colored-border color="secondary" elevation="2">
											Su sesión acabará cuando su contraseña se actualize correctamente.
										</v-alert>
									</v-card-text>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<hr />
								</td>
							</tr>
							<tr>
								<th class="text-left pb-5">
									Contraseña antigua:
								</th>
								<td class="text-left pb-5">
									<v-text-field
										v-model="oldpassword"
										:append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
										:type="showpassword ? 'text' : 'password'"
										@click:append="showpassword = !showpassword"
									></v-text-field>
									<span class="red--text">{{
										validation.firstError("oldpassword")
									}}</span>
								</td>
							</tr>
							<tr>
								<th class="text-left pb-5">
									Nueva contraseña:
								</th>
								<td class="text-left pb-5">
									<v-text-field
										v-model="newpassword"
										:append-icon="showpassword1 ? 'mdi-eye' : 'mdi-eye-off'"
										:type="showpassword1 ? 'text' : 'password'"
										@click:append="showpassword1 = !showpassword1"
									></v-text-field>
									<span class="red--text">{{
										validation.firstError("newpassword")
									}}</span>
								</td>
							</tr>
							<tr>
								<th class="text-left pb-5">
									Confirmar contraseña:
								</th>
								<td class="text-left pb-5">
									<v-text-field
										v-model="confpassword"
										:append-icon="showpassword2 ? 'mdi-eye' : 'mdi-eye-off'"
										:type="showpassword2 ? 'text' : 'password'"
										@click:append="showpassword2 = !showpassword2"
									></v-text-field>
									<span class="red--text">{{
										validation.firstError("confpassword")
									}}</span>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<v-alert
										v-model="showMessage"
										:icon="iconMessage"
										:color="colorMessage"
										border="left"
										elevation="2"
										dense
										text
										dismissible
									>
										{{ message }}
									</v-alert>
								</td>
							</tr>
						</v-simple-table>
					</form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script src="./Perfil.js"></script>
